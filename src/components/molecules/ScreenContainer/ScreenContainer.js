import React from 'react'
import { StatsContext } from '../../../context/StatsContext';
import { GameContext } from '../../../context/GameContext';
import { useContext, useEffect} from 'react';
import ResponsiveContext from '../../../context/ResponsiveContext';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import LoseSign from '../LoseSign/LoseSign';

const ImageWrapper = styled.div`
    margin-bottom: 30px;
`

const ScreenContainer = () => {
    const {life, hits} = useContext(StatsContext);
    const {game, playing} = useContext(GameContext);
    const { isBigger, isLarge, 
            isMediumLarge, isMedium, 
            isMediumSmall, isSmall, 
            isExtraSmall} = useContext(ResponsiveContext);

    useEffect(() => { 
        localStorage.setItem('game',JSON.stringify(game))
    },[hits, life])

    useEffect(()=>{
        if(playing === false){
            localStorage.removeItem('life');
        }
    },[playing])
 
    if(playing){
        return (
          <ImageWrapper>
              {isBigger ? <Image  y='auto' maxX='800px' url={game ? game.url : ''} br={game ? '20px' : '12px'}/>
              : isLarge ? <Image br='20px' y='auto' maxX='600px' url={game ? game.url : ''}/>
              : isMediumLarge ? <Image br='12px' y='auto' maxX='500px' url={game ? game.url : ''}/>
              : isMedium ? <Image br='12px' y='auto' maxX='400px' url={game ? game.url : ''}/>
              : isMediumSmall ? <Image br='12px' y='auto' maxX='400px' url={game ? game.url : ''}/>
              : isSmall ? <Image br='12px' y='auto' maxX='300px' url={game ? game.url : ''}/>
              : isExtraSmall ? <Image br='12px' y='auto' maxX='290px' url={game ? game.url : ''}/>
              : ''}
          </ImageWrapper>
        )
    }

    return(<><LoseSign/></>)
}

export default ScreenContainer