import React, { useContext } from 'react'
import Image from '../../atoms/Image/Image'
import gameover from '../../../assets/images/GameOver.png'
import styled from 'styled-components'
import { GameContext } from '../../../context/GameContext';
import { StatsContext } from '../../../context/StatsContext';
import Header from '../../atoms/Header/Header';


const LoseSignWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:center;
    align-items:center;
    margin-bottom:100px;
    margin-top:100px;
`
const PlayAgain = styled.button`
    text-decoration:underline double;
    text-underline-offset: 8px;
    border:none;
    max-width:200px;
    padding:10px;
    max-height:100px;
    background-color:transparent;
    color:white;
    font-size:1.5em;
    margin-top:50px;
    cursor:pointer;
    font-family:'Silkscreen', cursive;
    &:hover{
        color:#8584B6;
    }
`

const LoseSign = () => {
    const { setPlaying } = useContext(GameContext);
    const { record, hits ,setHits, setLife } = useContext(StatsContext);
    const HandleButton = ()=>{
        setPlaying(true)
        setHits(0)
        setLife(100)
    }

  return (
    <LoseSignWrapper>
        <Image margin='20px auto' url={gameover} outline='none' x='500px' y='70px'/>
        <Header family="'Silkscreen', cursive" innerText={"Hits: " + hits}/>
        <Header family="'Silkscreen', cursive" innerText={"Max streak: " + record}/>
        <PlayAgain onClick={()=> HandleButton()}>Play Again</PlayAgain>
    </LoseSignWrapper>
  )
}

export default LoseSign