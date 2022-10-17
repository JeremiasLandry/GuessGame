import React from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'

const HTP_Wrapper = styled.div`
  display:grid;
  height:600px;
  width:600px;
  background-color:blueviolet;
  grid-template-area:"headlines headlines"
                     "icons headers";
  grid-template-rows:10% 90%;
  grid-template-columns:10% 90%;
`
const Headlines = styled.div`
  
  justify-content:space-between;
  grid-area:headlines;
  width:100%;
  height:100%;
  background-color:red;
  align-items:flex-start;
`

const HowToPlay = () => {
  return (
    <HTP_Wrapper>
      <Headlines>
        <Header innerText='Instructions'/>
        <Header innerText='Instructions'/>
      </Headlines>
    </HTP_Wrapper>
  )
}

export default HowToPlay