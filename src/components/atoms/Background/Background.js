import React,{ useContext } from 'react'
import {GameContext} from '../../../context/GameContext'
import styled from 'styled-components'

const BgImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding:0;
    width: 100%;
    height: 100%;
    background:url(${props => props.bg ? props.bg : 'none'});
    background-size:cover;
    background-position: right center;
    background-repeat:no-repeat;
    background-attachment: fixed;
    filter:blur(11px) brightness(46%);
    box-shadow: -2px 0px 29px 56px rgba(0,0,0,0.75);
    -webkit-box-shadow: -2px 0px 29px 56px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 0px 29px 56px rgba(0,0,0,0.75);
`

function Background() {
    const {game} = useContext(GameContext)

    return (
        <>
            <BgImage bg={game.url}></BgImage>
        </>
        )
}

export default Background;
