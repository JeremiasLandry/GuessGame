import React from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
`
const InfoTitles = styled.div`
  display:flex;
  justify-content:space-between;
  grid-area:headlines;
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:2;
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
`

const Info = () => {
  return (
    <InfoWrapper>
      <InfoTitles>
        <Header innerText='About'/>
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