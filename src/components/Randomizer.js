// Randomizer.js
import React, { useState } from 'react';
import '../styles/Randomizer.css';

const Randomizer = () => {
  // Состояние для хранения границ диапазона и результата
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);

  // Функция генерации случайного числа
  const generateRandom = () => {
    if (min > max) {
      alert('Минимальное значение не может быть больше максимального!');
      return;
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNumber);
  };

  return (
    <div className="randomizer-container">
      <h2>Генератор случайных чисел</h2>
      
      <div className="input-group">
        <label>
          Минимум:
          <input 
            type="number" 
            value={min} 
            onChange={(e) => setMin(parseInt(e.target.value))}
            min={1}
          />
        </label>
        
        <label>
          Максимум:
          <input 
            type="number" 
            value={max} 
            onChange={(e) => setMax(parseInt(e.target.value))}
            min={1}
          />
        </label>
      </div>

      <button onClick={generateRandom} className="generate-btn">
        Сгенерировать
      </button>

      {result && (
        <div className="result">
          <h2>Результат: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Randomizer;
