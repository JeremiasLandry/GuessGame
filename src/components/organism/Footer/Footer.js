import React from 'react'
import Header from '../../atoms/Header/Header'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-content:center;
    position:absolute;
    bottom:0;
    left:0;
    width:96%;
    margin:2%;   
`
const LinkTo = styled.a`
  text-decoration:underline;
  color:white;
`

const Footer = () => {
  return (
    <FooterWrapper>
        <Header fontSize='1em' family="'Roboto Mono', monospace" level='5' innerText='Created by Jeremias Landry'/>
        <LinkTo href='https://chardle.vercel.app'>
            <Header fontSize='1em' family="'Roboto Mono', monospace" level='5' innerText='Also play chardle here!'/>
        </LinkTo>
    </FooterWrapper>
  )
}

export default Footer