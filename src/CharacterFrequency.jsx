import React from 'react'
import { useState } from 'react';

const CharacterFrequency = () => {
    const [text, setText] = useState('');
  const [maxChars, setMaxChars] = useState([]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    findMaxConsecutiveChars(inputText);
  };

  const findMaxConsecutiveChars = (input) => {
    let maxCount = 0;
    let maxChars = [];

    for (let i = 0; i < input.length; i++) {
      let count = 1;
      while (i < input.length - 1 && input[i] === input[i + 1]) {
        count++;
        i++;
      }
      if (count > maxCount) {
        maxCount = count;
        maxChars = [input[i]];
      } else if (count === maxCount) {
        maxChars.push(input[i]);
      }
    }

    setMaxChars(maxChars);
  };

  return (
    <div className="character">
        <h2>Character Frequency</h2>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <p>Max Consecutive Character(s): {maxChars.join(', ')}</p>
    </div>
  )
}

export default CharacterFrequency