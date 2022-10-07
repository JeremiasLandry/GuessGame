import React, { useState, useContext } from 'react'
import { GameContext } from '../../../context/GameContext';
import { StatsContext } from '../../../context/StatsContext';
import styled from 'styled-components';
import { AllGames } from '../../../data/Data';

const InputStyle = styled.input`
    outline: none;
    border:none;
    margin: 5px;
    padding:10px;
    border-radius:10px;
`
const InputWrapping = styled.div`
    display:flex;
    flex-direction:column;
`

const SendButton = styled.button`
    outline:none;
    border:none;
    background-color:#000;
    color: #fff;
    border-radius:7px;
    padding:9px;
    cursor: pointer;
`

const ResultWrapper = styled.p`
    background-color:#F4F4F4;
    padding: 10px;
    border-radius:10px;
    margin: 5px;
    cursor: pointer;
    &:hover{
        background-color: #8584B6;
        color: #fff;
    }
`

const InputContainer = () => {
    const [input, setInput] = useState("")
    const { game, playing, setPlaying} = useContext(GameContext);
    const { setHits, hits, record, setRecord, life, setLife} = useContext(StatsContext);

    const selectGame = (result) => {
        setInput(result)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(input)
        console.log(game.title)

        if(input.toLowerCase() === game.title.toLowerCase()){
            setHits(parseInt(hits) + 1)
            setInput('')
            if(hits >= record){
                setRecord(hits)
            }
        }else{
            setInput('')
            if(parseInt(life) === 25){
                setPlaying(false)
                setLife(parseInt(life) - 25)
            }else{
                setLife(parseInt(life) - 25)
            }
        }
    }

    if(playing){
        return (
            <form onSubmit={handleSubmit}>
                <InputWrapping>
                    <div>
                        <InputStyle 
                            type='text' 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                        />
                        <SendButton type='submit'>ENVIAR</SendButton>
                    </div>
                    {
                        AllGames.map((val, key) =>{
                            if(input == ''){
                                return <></>
                            }
                            else if(val.title.toLowerCase().includes(input.toLowerCase())){
                                return <div><ResultWrapper onClick={()=> selectGame(val.title)}>{val.title}</ResultWrapper></div>
                            }
                        })
                    }
                </InputWrapping>
            </form>
            )
    }else{
        return(<></>)
    }
}

export default InputContainer