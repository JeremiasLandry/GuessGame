import React, { useContext } from 'react'
import styled from 'styled-components'
import ResponsiveContext from '../../../context/ResponsiveContext'

const InputStyle = styled.input`
    outline: none;
    margin:${props => props.margin ? props.margin : "auto"};
`

const Input = ({type}) => {
  const { isMedium } = useContext(ResponsiveContext);

  if(isMedium){
    return(<InputStyle margin='0 15px 0 0 !important' type={type}/>)
  }
  return (
    <InputStyle type={type}/>
  )
}

export default Input