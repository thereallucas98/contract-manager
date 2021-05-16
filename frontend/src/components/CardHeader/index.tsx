import React from 'react';
import './styles.css';

interface IHeader {
  timeQuantity: number;
  amount: number;
}

const CardHeader: React.FC<IHeader> = ({ timeQuantity, amount }) => {
  return (
    <div className="card-content">
      <h1>Vence em {timeQuantity} dias</h1>
      <span>
        Existem {amount} contratos para vencer
      </span>
      <footer>Clique aqui para saber quais!</footer>
    </div>
  );
}

export default CardHeader;