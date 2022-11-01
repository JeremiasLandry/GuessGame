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
import { ResponsiveProvider } from './context/ResponsiveContext';
import Background from './components/atoms/Background/Background';
import Footer from './components/organism/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import HowToPlay from './components/pages/HowToPlay/HowToPlay';
import Info from './components/pages/Info/Info';


function App() {

  return (
    <>
    <ResponsiveProvider>
      <GameProvider>
        <StatsProvider>
          <BrowserRouter>
            {/* app */}
            <div className="mainContainer">
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/howtoplay' element={<HowToPlay/>}/>
                <Route path='/info' element={<Info/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
              </Routes>
              <Footer/>
            </div>
            {/* background */}
            <Background/>
          </BrowserRouter>
        </StatsProvider>
      </GameProvider>
    </ResponsiveProvider>
    </>
    )
}

export default App;
