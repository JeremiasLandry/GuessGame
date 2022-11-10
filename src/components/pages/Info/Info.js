import React,{ useContext } from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveContext } from '../../../context/ResponsiveContext'

const InfoWrapper = styled.div`
  display:grid;
  height:600px;
  width:600px;
  background-color:rgba(44, 44, 44, 0.81);
  border-radius:16px;
  grid-template-area:"headlines"
                    "info";
  grid-template-rows:10% 90%;
  grid-template-columns:100%;
  padding:50px;
  margin-bottom:200px;
  @media screen and (max-width:700px){
    max-width:600px;
    padding:25px;
  }
  @media screen and (max-width:650px){
    max-width:550px;
    padding:20px;
    margin:20px 2% 200px 2%;
    width:96%;
  }
  @media screen and (max-width:575px){
    max-width:450px;
    padding:15px;

  }
  @media screen and (max-width:500px){
    max-width:400px;
    padding:15px;

  }
  @media screen and (max-width:415px){
    max-width:315px;
    padding:15px;
  }
  @media screen and (max-width:340px){
    max-width:230px;
    padding:15px;
  }
`
const InfoTitles = styled.div`
  display:flex;
  justify-content:space-between;
  height:auto;
  width:100%;
  grid-area:headlines;
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:2;
  @media screen and (max-width:768px){
    font-size:.9em;
  }
`
const GoBack = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const InfoColumn = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  align-items:flex-start;
  grid-area:info;
  grid-row-start:2;
  grid-row-end:3;
  grid-column-start:1;
  grid-column-end:3;
  @media screen and (max-width:768px){
    font-size:.9em
  }
  @media screen and (max-width:700px){
    font-size:.8em
  }
  @media screen and (max-width:600px){
    font-size:.7em
    justify-content:flex-start;
    align-content:flex-start;
  }

`

const Info = () => {
  const { 
    isBigger,
    isLarge,
    isMediumLarge,
    isMedium,
    isMediumSmall,
    isSmall,
    isExtraSmall 
    } = useContext(ResponsiveContext)

  return (
    <InfoWrapper>
      <InfoTitles>
        <Header 
          innerText='About'
          fontSize={isBigger ? '1.5em'
                   : isLarge ? '1.2em'
                   : isMediumLarge ? '.8em'
                   : isMedium ? '.7em' : '.5em'}
        />
        <Link className='GoBack-LinkBtn' aria-current='page' to='/'>
          <GoBack>
              <FontAwesomeIcon className='leftArrow' icon={faLongArrowLeft}/>
              <Header fontSize='1em' innerText='Go Back'/> 
          </GoBack>
        </Link>
      </InfoTitles>
      <InfoColumn>
        <Header textAlign='left' margin='10px auto 20px 10px' innerText='A game for gamers and casual gaming enjoyers alike, inspired by Wordle, Framed, and all the other spinoffs.'/>
        <Header textAlign='left' margin='10px auto 20px 10px' innerText='You can play as many times as you want and beat your own record!.'/>
        <Header textAlign='left' margin='10px auto 20px 10px' innerText='All rights go to the rightful owners - no copyright infringement intended.'/>
        <Header fontSize='1em' textAlign='left' margin='120px auto 20px 10px' innerText='Contact me via email: jeremiaslandrycontact@gmail.com'/>
      </InfoColumn>
    </InfoWrapper>
  )
}

export default Info