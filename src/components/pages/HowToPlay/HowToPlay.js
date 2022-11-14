import React, {useEffect} from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Image from '../../atoms/Image/Image';
import screen from '../../../assets/images/htp_image.jpg'
import heart from '../../../assets/images/htp_heart.jpg'
import arrow from '../../../assets/images/rightArrow.jpg'
import hits from '../../../assets/images/htp_hits.jpg'
import gameover from '../../../assets/images/htp_gameover.jpg'
import { Link, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive'

const HtpWrapper = styled.div`
  display:grid;
  height:600px;
  width:600px;
  background-color:rgba(44, 44, 44, 0.81);
  border-radius:16px;
  grid-template-area:"headlines headlines"
                     "icons headers";
  grid-template-rows:10% 90%;
  grid-template-columns:20% 80%;
  padding:50px;
  margin-bottom:200px;
  @media screen and (max-width:768px){
    max-width:550px;
    font-size:.8em
  }
  @media screen and (max-width:650px){
    max-width:450px;
    font-size:.8em;
  }
  @media screen and (max-width:550px){
    max-width:350px;
    font-size:.7em;
    padding:20px;
  }
  @media screen and (max-width:460px){
    max-width:350px;
    font-size:.7em;
  }
  @media screen and (max-width:400px){
    max-width:300px;
    font-size:.7em;
  }
  @media screen and (max-width:340px){
    max-width:250px;
    font-size:.65em;
  }
  @media screen and (max-width:290px){
    max-width:200px;
    font-size:.5em;
  }
  
`
const Headlines = styled.div`
  display:flex;
  justify-content:space-between;
  grid-area:headlines;
  grid-column-start:1;
  grid-column-end:3;
  grid-row-start:1;
  grid-row-end:2;
`
const IconsColumn = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  grid-area:icons;
  background-color:transparent;
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start:2;
  grid-row-end:3;
  align-items:center;
`
const ExampleColumn = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  grid-area:headers;
  background-color:transparent;
  grid-column-start:2;
  grid-column-end:3;
  grid-row-start:2;
  grid-row-end:3;
  align-items:center;
  @media screen and (max-width:550px){
    margin-left:20px
  }
`
const GoBack = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const HowToPlay = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HtpWrapper>
      <Headlines>
        <Header innerText='How to Play'/>
        <Link className='GoBack-LinkBtn' aria-current='page' to='/'>
          <GoBack>
              <FontAwesomeIcon className='leftArrow' icon={faLongArrowLeft}/>
              <Header fontSize='1em' innerText='Go Back'/> 
          </GoBack>
        </Link>
      </Headlines>
      <IconsColumn>
        <Image br='12px' url={screen} x='50px' y='50px'/>
        <Image br='12px' url={heart} x='50px' y='50px'/>
        <Image br='12px' url={arrow} x='50px' y='50px'/>
        <Image br='12px' url={hits} x='50px' y='50px'/>
        <Image br='12px' url={gameover} x='50px' y='50px'/>
      </IconsColumn>
      <ExampleColumn>
        <MediaQuery minWidth={769}>
          <Header fontSize='1em' margin='auto 90px auto auto' innerText='Use the image provided to guess the name of the game.'/>
          <Header fontSize='1em' margin='auto 90px auto auto' innerText='If you get a guess wrong a new image from another game is revealed and you lose 25 points of health.'/>
          <Header fontSize='1em' margin='auto 90px auto auto' innerText='Leave the input blank and press Submit to skip to the next image, you will lose 25 points of health.'/>
          <Header fontSize='1em' margin='auto 90px auto auto' innerText='Everytime you guess, the hit number increases, you have to break your max streak!'/>
          <Header fontSize='1em' margin='auto 90px auto auto' innerText='If your health goes down to 0, you lose the game and your current hits.'/>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Header fontSize='1em' margin='auto' innerText='Use the image provided to guess the name of the game.'/>
          <Header fontSize='1em' margin='auto' innerText='If you get a guess wrong a new image from another game is revealed and you lose 25 points of health.'/>
          <Header fontSize='1em' margin='auto' innerText='Leave the input blank and press Submit to skip to the next image, you will lose 25 points of health.'/>
          <Header fontSize='1em' margin='auto' innerText='Everytime you guess, the hit number increases, you have to break your max streak!'/>
          <Header fontSize='1em' margin='auto' innerText='If your health goes down to 0, you lose the game and your current hits.'/>
        </MediaQuery>
      </ExampleColumn>
    </HtpWrapper>
  )
}

export default HowToPlay