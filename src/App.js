import './App.css';
import React,{ useContext } from 'react'
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/molecules/Navbar/Navbar';
import Image from './components/atoms/Image/Image'
import Input from './components/atoms/Input/Input'
import HealthBar from './components/molecules/HealthBar/HealthBar';
import Hits from './components/molecules/Hits/Hits';
import Hud from './components/organism/Hud/Hud';
import ScreenContainer from './components/molecules/ScreenContainer/ScreenContainer';
import { GameProvider } from './context/GameContext'
import { StatsProvider } from './context/StatsContext'
import { GameContext } from './context/GameContext'
import Background from './components/atoms/Background/Background';

function App() {

  return (
    <>
    <GameProvider>
      <StatsProvider>
        {/* app */}
        <div className="mainContainer">
          <Navbar/>
          <ScreenContainer/>
          <Hud/>
        </div>
        {/* background */}
        <Background/>
      </StatsProvider>
    </GameProvider>
    </>
    )
}

export default App;
