import './App.css'
import Pacote, { type PacoteType } from './Pacote'


const data: Array<PacoteType> = [
  {
    id: '9281d08a-7978-40ad-9ae3-d6659a503ef3',
    largura: 10,
    profundidade: 20,
    altura: 30,
    peso: 5
  },
  {
    id: 'b303bc37-46ca-45a8-9a24-9c046731b849',
    largura: 30,
    profundidade: 40,
    altura: 20,
    peso: 20
  }
];

export default function App() {
  return (
    
    <dl className="pacote">
      {data.map(pacote => (
        <Pacote key={pacote.id} pacote={pacote} />
      ))}
    </dl>
  )
}





