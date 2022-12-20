import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { AllGames } from '../data/Data';


export const GameContext = createContext()

export const GameProvider = ({children}) => {
    const changeGame = ({list=AllGames})=> {
      return list[Math.floor((Math.random()*list.length))];
    }

    const [playing, setPlaying] = useState(true);
    const [game, setGame] = useState(()=>{
      const stickyValue = localStorage.getItem('game');
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : changeGame(AllGames);
  });

  return (
    <GameContext.Provider value={{
        game,
        setGame,
        changeGame,
        setPlaying,
        playing
    }}>
    {children}
    </GameContext.Provider>
  )
}

export default GameContext