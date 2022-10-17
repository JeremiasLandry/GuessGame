import React from 'react'
import styled from 'styled-components'
import Header from '../../atoms/Header/Header'
import logo from '../../../assets/images/logo.png'
import Image from '../../atoms/Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

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
        <NavLink className="nav-link" aria-current='page' to='/howtoplay'>
          <FontAwesomeIcon className="nav-link iconGroup" icon={faQuestion} fade={true} />
        </NavLink>

        <Link className="logoUrl" aria-current='page' to='/'>
          <Image className="logoUrl iconGroup" url={logo} x='50px' y='50px'/>
        </Link>

        <NavLink className="nav-link" aria-current='page' to='/info'>
          <FontAwesomeIcon className="nav-link iconGroup" icon={faChartBar} fade={true}/>
        </NavLink>
    </NavWrapper>
  )
}

export default Navbar