import React, { useState } from 'react';
import './NumberList.css';

const NumberList: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>(Array.from({ length: 10 }, (_, i) => i + 1));

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNumber]);
  };

  return (
    <div className="number-list">
      <h2>Números</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={addRandomNumber}>Adicionar Número Random</button>
    </div>
  );
};

export default NumberList;
