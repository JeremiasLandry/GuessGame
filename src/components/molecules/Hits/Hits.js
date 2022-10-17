import React from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image/Image'
import hits from '../../../assets/images/hits.png'
import Header from '../../atoms/Header/Header'

const HitsWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content:center;
    margin:10px 25px;
    margin-left:40px;
`

const Hits = ({HitStrike='0'}) => {
  return (
    <HitsWrapper>
        <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
        <Image outline='none' url={hits} x='80px' y='20px'/>
    </HitsWrapper>
  )
}

export default Hits