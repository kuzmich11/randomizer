// StringRandomizer.js
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../styles/StringRandomizer.css';

const StringRandomizer = () => {
  const [strings, setStrings] = useState('');
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGenerate = () => {
    const stringArray = strings.split('\n').map(str => str.trim());
    const filteredArray = stringArray.filter(str => str.length > 0);
    
    if (filteredArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    setResult(filteredArray[randomIndex]);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const handleClear = () => {
    setStrings('');
    setResult(null);
  };

  return (
    <div className="string-randomizer">
      {showConfetti && <Confetti gravity={0.3} fallSpeed={5} />}
      <h2>Генератор случайных строк</h2>
      <div className="input-wrapper">
        <div className="input-container">
          <textarea
            value={strings}
            onChange={(e) => setStrings(e.target.value)}
            placeholder="Введите строки, каждая с новой строки"
            rows={10}
          />
        </div>
        <div className="controls-container">
            <div className="output">
              Результат: <span className="result">{result}</span>
            </div>
          <div className="button-group">
            <button onClick={handleGenerate}>
              Сгенерировать
            </button>
            <button onClick={handleClear}>
              Очистить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringRandomizer;
