

import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('');

 /* const handleClick = (e) => {
    if(result)
    setResult(result.concat(e.target.name));
  };*/
  const handleClick = (e) => {
    const input = e.target.name;
    if (/[\+\-\*\%\(\)\/]{2,}/.test(result + input)) {
      return; 
    }
   
    setResult(result.concat(input));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="calculator">
      
      
      <div className={`display${result ? ' blinker' : ''}`}>{result}</div>
      <div className="keypad">
        <button className="high" onClick={clear} id="clear">
          Clear
        </button>
        <button name="%" onClick={handleClick}>
          %
        </button>
        <button name="(" onClick={handleClick}>
          (
        </button>
        <button name=")" onClick={handleClick}>
          )
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="*" onClick={handleClick}>
          x
        </button>
        <button name="/" onClick={handleClick}>
          ÷
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="light" onClick={calculate} id="result">
          =
        </button>
        <button className="highlight" onClick={backspace} id="backspace">
          &#9003;
        </button>
        
      </div>
    </div>
  );
};

export default Calculator;
