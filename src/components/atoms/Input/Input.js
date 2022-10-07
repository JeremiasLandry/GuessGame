import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    outline: none;
`

const Input = ({type}) => {
  return (
    <InputStyle type={type}/>
  )
}

export default Input