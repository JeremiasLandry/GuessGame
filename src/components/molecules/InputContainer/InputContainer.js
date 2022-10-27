import React, { useState, useContext } from 'react'
import { GameContext } from '../../../context/GameContext';
import { StatsContext } from '../../../context/StatsContext';
import styled from 'styled-components';
import { AllGames } from '../../../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRightLong} from '@fortawesome/free-solid-svg-icons';

const InputStyle = styled.input`
    outline: none;
    border:none;
    margin: 5px 25px;
    padding:10px;
    border-radius:10px;
`
const InputWrapping = styled.div`
    display:flex;
    flex-direction:column;
    max-height:250px;
`

const SendButton = styled.button`
    outline:none;
    border:none;
    background-color:#000;
    color: #fff;
    border-radius:7px;
    padding:8px;
    cursor: pointer;
    margin-left:-60px;
    transition: transform .2s ease-in-out;
    &:hover{
        transform:scale(.90,.90)
    }
`

const ResultWrapper = styled.p`
    background-color:#F4F4F4;
    padding: 10px;
    border-radius:10px;
    margin: 5px 25px;
    margin-right:-5px;
    margin-left:30px
    cursor: pointer;
    &:hover{
        background-color: #8584B6;
        color: #fff;
        cursor:pointer;
    }
`

const InputContainer = () => {
    const [input, setInput] = useState("")
    const { game, playing, setPlaying, changeGame, setGame} = useContext(GameContext);
    const { setHits, hits, record, setRecord, life, setLife} = useContext(StatsContext);

    const selectGame = (result) => {
        setInput(result)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setGame(changeGame(AllGames));
        console.log(input)
        console.log(game.title)


        if(input.toLowerCase() === game.title.toLowerCase()){
            setHits(parseInt(hits) + 1)
            setInput('')
            localStorage.setItem('hits', hits + 1)

            if(hits >= record){
                setRecord(hits + 1)
                localStorage.setItem('record', record + 1)
            }
        }else{
            setInput('')
            if(parseInt(life) === 25){
                setPlaying(false)
                setLife(parseInt(life) - 25)
                localStorage.removeItem('life')
                localStorage.removeItem('hits')
            }else{
                setLife(parseInt(life) - 25)
                // localStorage.removeItem('life')
                // localStorage.setItem('life', life)
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
                        <SendButton type='submit'><FontAwesomeIcon icon={faArrowRightLong}/></SendButton>
                    </div>
                    <div className='resultContainer'>
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
                    </div>
                </InputWrapping>
            </form>
            )
    }else{
        return(<></>)
    }
}

export default InputContainer