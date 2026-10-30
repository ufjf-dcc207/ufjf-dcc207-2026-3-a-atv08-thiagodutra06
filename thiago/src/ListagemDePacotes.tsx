import { useState } from "react";
import "./ListaDePacotes.css";
import type { PacoteType } from "./Pacote";
import Pacote from "./Pacote";

type ListaDePacotesProps = {
  pacotes: Array<PacoteType>;
  excluirPacote: (id: string) => void;
}

export default function ListaDePacotes({ pacotes, excluirPacote }: ListaDePacotesProps) {
  const [ordenacao, setOrdenacao] = useState('peso');

  return (
    <dl>
      {pacotes.map(pacote => (
        <Pacote 
          key={pacote.id}
          pacote={pacote}
          onExcluir={() => { excluirPacote(pacote.id); }}
        />
      ))}
    </dl>
  );
}
