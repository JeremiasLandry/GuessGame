import React from 'react'
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

    useEffect(() => {
        setGame(changeGame(AllGames));
    },[hits, life])

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