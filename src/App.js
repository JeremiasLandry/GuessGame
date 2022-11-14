import './App.css';
import React from 'react'
import Navbar from './components/molecules/Navbar/Navbar';
import { GameProvider } from './context/GameContext'
import { StatsProvider } from './context/StatsContext'
import { ResponsiveProvider } from './context/ResponsiveContext';
import Background from './components/atoms/Background/Background';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
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
