import { useState } from 'react';
import './App.css';
import { type PacoteType, data } from './Pacote'; 
import ListagemDePacotes from './ListagemDePacotes';

function App() {
  const [pacotes, setPacotes] = useState<PacoteType[]>(data);

  function excluirPacote(id: string) {
    setPacotes(pacotes.filter(pacote => pacote.id !== id));
  }

  return (
    <div className="app-container">
      <ListagemDePacotes pacotes={pacotes} excluirPacote={excluirPacote} />
    </div>
  );
}

export default App;






