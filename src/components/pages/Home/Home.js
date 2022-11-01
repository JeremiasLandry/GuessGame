import React, { useContext } from 'react'
import ScreenContainer from '../../molecules/ScreenContainer/ScreenContainer'
import Hud from '../../organism/Hud/Hud'
import { GameContext } from '../../../context/GameContext'
import HitsContainer from '../../molecules/HitsContainer/HitsContainer'
import RecordContainer from '../../molecules/RecordContainer/RecordContainer'
import styled from 'styled-components'
import Footer from '../../organism/Footer/Footer'

const StatsContainer = styled.div`
  display:flex;
  justify-content:space-between;
  max-width:800px;
  width:100%;
  margin-bottom:20px;

  @media screen and (max-width:768px){
    max-width:600px;
  }

  @media screen and (max-width:640px){
    max-width:500px;
    justify-content:center;
  }

  @media screen and (max-width:568px){
    max-width:450px;
  }
  @media screen and (max-width:500px){
    max-width:400px;
  }
  @media screen and (max-width:450px){
    max-width:95%;
    justify-content:space-around;

  }
  @media screen and (max-width:350px){
    max-width:250px;
  }
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
        <Footer/>
      </>
    )
  }else{
    return(
      <>
        <ScreenContainer/>
        <Footer/>
      </>
    )
  }
}

export default Home