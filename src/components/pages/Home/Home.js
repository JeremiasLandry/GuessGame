import React, { useContext } from 'react'
import ScreenContainer from '../../molecules/ScreenContainer/ScreenContainer'
import Hud from '../../organism/Hud/Hud'
import { GameContext } from '../../../context/GameContext'
import HitsContainer from '../../molecules/HitsContainer/HitsContainer'
import RecordContainer from '../../molecules/RecordContainer/RecordContainer'
import styled from 'styled-components'

const StatsContainer = styled.div`
  display:flex;
  justify-content:space-between;
  max-width:800px;
  width:100%;
  margin-bottom:20px;
`

const Home = () => {
  const {playing} = useContext(GameContext);

  if(playing){
    return (
      <>
        <StatsContainer>
          <HitsContainer/>
          <RecordContainer/>
        </StatsContainer>
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