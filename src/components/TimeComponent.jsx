import React from 'react'
import './TimeComponent.css'
import { useState } from 'react';

const TimeComponent = () => {
    const [time, setTime] = useState(new Date());
    const [clickCount, setClickCount] = useState(0);
  
    const handleShowTime = () => {
      setClickCount(clickCount + 1);
      setTime(new Date());
      console.log('Button clicked:', clickCount);
    }; 

  return (
    <div className="time">
      <h2>Time Component</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      <button onClick={handleShowTime}>Show Current Time</button>
      <p>Button Clicks: {clickCount}</p>
    </div>
  )
}

export default TimeComponent