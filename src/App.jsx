import './App.css'
import TimeComponent from './components/TimeComponent'
import WalletComponent from './components/WalletComponent'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import CharacterFrequency from './CharacterFrequency'
import NumberPairs from './NumberPairs'
import Header from './components/Header'

const AppContainer = styled.div`
  /* background-color: ${({ bgColor }) => bgColor}; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  color: white;
  width: 100%


`;


function App() {
  const [bgColor, setBgColor] = useState('green');



  return (
    <>
      <Header />
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
