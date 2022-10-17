import React from 'react'
import Header from '../../atoms/Header/Header'
import Heart from '../../../assets/images/pixelHeart.png'
import Image from '../../atoms/Image/Image'
import styled from 'styled-components'

const HealthBarWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin:10px 25px;
`

const HealthBar = ({lifeState='100'}) => {
  return (
    <HealthBarWrapper>
      <Image outline='none' url={Heart} x='30px' y='30px'/>
      <Header family="'Silkscreen', cursive" level='2' innerText={lifeState} margin='auto 10px 5px 10px'/>
    </HealthBarWrapper>
  )
}

export default HealthBar