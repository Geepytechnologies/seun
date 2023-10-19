import React from 'react'
import { useState } from 'react'

const NumberPairs = ({ numbers, target }) => {
    const [pairs, setPairs] = useState([]);

    const findNumberPairs = () => {
      const seen = new Set();
      const result = [];
  
      for (let number of numbers) {
        const complement = target - number;
  
        if (seen.has(complement) && !seen.has(number)) {
          result.push([complement, number]);
        }
  
        seen.add(number);
      }
  
      setPairs(result);
    };
  return (
    <div className="Number">
      <h2>Number Pairs</h2>
      <button onClick={findNumberPairs}>Find Pairs</button>
      <p>Target Sum: {target}</p>
      <ul>
        {pairs.map((pair, index) => (
          <li key={index}>{pair.join(', ')}</li>
        ))}
      </ul>
    </div>
  )
}

export default NumberPairs