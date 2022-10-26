import React, { useState } from 'react'
import { StatsContext } from '../../../context/StatsContext';
import { GameContext } from '../../../context/GameContext';
import { useContext, useEffect} from 'react';
import { AllGames } from '../../../data/Data';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import LoseSign from '../LoseSign/LoseSign';

const ImageWrapper = styled.div`
    margin-bottom: 30px;
    
`

const ScreenContainer = () => {
    const {life, hits} = useContext(StatsContext);
    const {setGame, changeGame, game, playing} = useContext(GameContext);
    const [ currentGame, setCurrentGame] = useState([]);

    useEffect(() => { 
        localStorage.setItem('game',JSON.stringify(game))
    },[hits, life])

    useEffect(()=>{
        if(playing === false){
            localStorage.removeItem('life');
        }
    },[playing])
 
    // useEffect(()=>{
    //     if(localStorage.getItem('game') !== null){
    //         const localValue = JSON.parse(localStorage.getItem('game'))
    //         setGame(localValue)
    //     }
    // })

    if(playing){
        return (
          <ImageWrapper>
              <Image br='12px' y='auto' url={game ? game.url : ''}/>
          </ImageWrapper>
        )
    }

    return(<><LoseSign/></>)
}

export default ScreenContainer