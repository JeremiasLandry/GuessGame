import React,{useContext, useEffect} from 'react'
import Input from '../../atoms/Input/Input'
import HealthBar from '../../molecules/HealthBar/HealthBar'
import Hits from '../../molecules/Hits/Hits'
import styled from 'styled-components'
import InputContainer from '../../molecules/InputContainer/InputContainer'
import HitsContainer from '../../molecules/HitsContainer/HitsContainer'
import {StatsContext} from '../../../context/StatsContext'
import RecordContainer from '../../molecules/RecordContainer/RecordContainer'

const HudWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
    background: rgba(44, 44, 44, 0.81);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(44, 44, 44, 0.15);

    padding:10px;
`

const Hud = () => {
  const {life} = useContext(StatsContext);

  useEffect(()=>{
    localStorage.removeItem('life');
    localStorage.setItem('life', life);
  },[life])

  return (
    <HudWrapper>
        <HealthBar lifeState={life}/>
        <InputContainer/>
        <HitsContainer/>
        <RecordContainer/>
    </HudWrapper>
  )
}

export default Hud