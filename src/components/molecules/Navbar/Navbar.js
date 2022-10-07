import React from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import logo from '../../../assets/images/logo.png'
import Image from '../../atoms/Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

const NavWrapper = styled.div`
    display:flex;
    width:90%;
    max-width:800px;
    height:auto;
    margin: 3% 5%;
    align-content:center;
    align-items:center;
    justify-content:center;
    padding:10px;
    color:#fff;
    
    background: rgba(44, 44, 44, 0.81);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(44, 44, 44, 0.15);
    

`

const Navbar = () => {
  return (
    <NavWrapper>
        <FontAwesomeIcon icon={faQuestion} fade={true} className='iconGroup'/>
        <Image url={logo} x='50px' y='50px'/>
        <FontAwesomeIcon icon={faChartBar} fade={true} className='iconGroup'/>
    </NavWrapper>
  )
}

export default Navbar