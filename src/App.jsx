import './App.css'
import TimeComponent from './components/TimeComponent'
import WalletComponent from './components/WalletComponent'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import CharacterFrequency from './CharacterFrequency'
import NumberPairs from './NumberPairs'

const AppContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;


`;


function App() {
  const [bgColor, setBgColor] = useState('green');

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const color = `rgb(${x * 255}, ${y * 255}, 150)`;
    setBgColor(color);
  };
  

  return (
    <>
    <AppContainer>
      <TimeComponent />
      <WalletComponent />
      <CharacterFrequency />
      <NumberPairs />
    </AppContainer>
      
    </>
  )
}

export default App
