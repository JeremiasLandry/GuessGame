import React from 'react'
import Header from '../../atoms/Header/Header'
import Heart from '../../../assets/images/pixelHeart.png'
import Image from '../../atoms/Image/Image'
import styled from 'styled-components'

const HealthBarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content:flex-start;
  margin:0 25px;
  padding-top:10px;
`

const HealthBar = ({lifeState='100'}) => {
  return (
    <HealthBarWrapper>
      <Image outline='none' url={Heart} x='30px' y='30px'/>
      <Header family="'Silkscreen', cursive" level='2' innerText={lifeState} margin='auto 10px auto 10px'/>
    </HealthBarWrapper>
  )
}

export default HealthBar