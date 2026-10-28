import type { PacoteProps } from './types';

export default function Pacote({ id, largura, altura, profundidade, peso }: PacoteProps) {
  return (
    <div className="pacote">
      <div>id</div>
      <dd>{id}</dd>
      <dt>largura (cm)</dt>
      <dd>{largura}</dd>
      <dt>Altura (cm)</dt>
      <dd>{altura}</dd>
      <dt>Profundidade (cm)</dt>
      <dd>{profundidade}</dd>
      <dt>Peso (kg)</dt>
      <dd>{peso}</dd>
    </div>
  );
}
