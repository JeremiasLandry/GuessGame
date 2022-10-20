import React, { useContext } from 'react'
import ScreenContainer from '../../molecules/ScreenContainer/ScreenContainer'
import Hud from '../../organism/Hud/Hud'
import { GameContext } from '../../../context/GameContext'

const Home = () => {
  const {playing} = useContext(GameContext);

  if(playing){
    return (
      <>
        <ScreenContainer/>
        <Hud/>
      </>
    )
  }else{
    return(
      <>
        <ScreenContainer/>
      </>
    )
  }
}

export default Home