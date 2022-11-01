import React,{useContext, useEffect} from 'react'
import Input from '../../atoms/Input/Input'
import HealthBar from '../../molecules/HealthBar/HealthBar'
import Hits from '../../molecules/Hits/Hits'
import styled from 'styled-components'
import InputContainer from '../../molecules/InputContainer/InputContainer'
import HitsContainer from '../../molecules/HitsContainer/HitsContainer'
import {StatsContext} from '../../../context/StatsContext'
import RecordContainer from '../../molecules/RecordContainer/RecordContainer'
import MediaQuery from 'react-responsive'

const HudWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    align-content:center;
    background: rgba(44, 44, 44, 0.81);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(44, 44, 44, 0.15);
    max-width:800px;
    padding:10px 20px;
    margin-bottom:500px;

    @media screen and (max-width:768px){
      max-width:600px;
    }

    @media screen and (max-width:640px){
      max-width:500px;
    }

    @media screen and (max-width:568px){
      max-width:450px;
    }
    @media screen and (max-width:500px){
      max-width:400px;
    }
    @media screen and (max-width:450px){
      max-width:300px;
    }
    @media screen and (max-width:350px){
      max-width:250px;
    }
    
`
const LifeAndInput = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  align-content:center;
  justify-content:space-between;
  width:495px;
  @media screen and (max-width:568px){
    padding-right:0;
}
  `

const Hud = () => {
  const {life} = useContext(StatsContext);

  useEffect(()=>{
    localStorage.removeItem('life');
    localStorage.setItem('life', life);
  },[life])

  return (
    <HudWrapper>
      <LifeAndInput>
        <HealthBar lifeState={life}/>
        <InputContainer/>
      </LifeAndInput>
    </HudWrapper>
  )
}

export default Hud