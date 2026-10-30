import React, { useState } from 'react';


type PacoteCampos = "peso" | "largura" | "altura" | "profundidade";


interface Pacote {
  id: string;
  peso: number;
  largura: number;
  altura: number;
  profundidade: number;
}

interface ListaDePacotesProps {
  pacotes: Pacote[];
  excluirPacote: (id: string) => void;
}

export default function ListaDePacotes({ pacotes, excluirPacote }: ListaDePacotesProps) {
  
  const [ordenacao, setOrdenacao] = useState<PacoteCampos>('peso');


  function mudaOrdenacao(event: React.ChangeEvent<HTMLSelectElement>) {
    setOrdenacao(event.target.value as PacoteCampos);
  }

  return (
    <div>
      
      <select onChange={mudaOrdenacao} value={ordenacao}>
        <option value="peso">Peso</option>
        <option value="largura">Largura</option>
        <option value="altura">Altura</option>
        <option value="profundidade">Profundidade</option>
      </select>

      <dl>
        
        {pacotes
          .slice() 
          .sort((a, b) => {
            if (a[ordenacao] > b[ordenacao]) return 1;
            if (a[ordenacao] < b[ordenacao]) return -1;
            return 0;
          })
          .map((pacote) => (
            <Pacote
              key={pacote.id}
              pacote={pacote}
              onExcluir={() => { excluirPacote(pacote.id); }}
            />
          ))
        }
      </dl>
    </div>
  );
}
