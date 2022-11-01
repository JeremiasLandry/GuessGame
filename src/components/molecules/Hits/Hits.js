import React, {useContext} from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image/Image'
import hits from '../../../assets/images/hits.png'
import Header from '../../atoms/Header/Header'
import ResponsiveContext from '../../../context/ResponsiveContext'

const HitsWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content:center;
    margin:10px 25px;
    margin-left:40px;
    @media screen and (max-width:450px){
      margin-right:0;
      margin-left:0 !important;
    }
`

const Hits = ({HitStrike='0'}) => {
  const { isBigger, isLarge, isMediumLarge, isMedium, isMediumSmall, isSmall, isExtraSmall} = useContext(ResponsiveContext)

  if(isLarge){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='70px' y='18px'/>
      </HitsWrapper>
    )  
  }
  else if(isMediumLarge){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='50px' y='15px'/>
      </HitsWrapper>
    )
  }
  else if(isMedium){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='45px' y='13px'/>
      </HitsWrapper>
    )
  }
  else if(isMediumSmall){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='40px' y='11px'/>
      </HitsWrapper>
    )
  }
  else if(isSmall){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='30px !important' y='9px'/>
      </HitsWrapper>
    )
  }
  else if(isExtraSmall){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} maxX='30px !important' maxY='9px'/>
      </HitsWrapper>
    )
  }else if(isBigger){
    return (
      <HitsWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={HitStrike}/>
          <Image outline='none' url={hits} x='70px' y='18px'/>
      </HitsWrapper>
    )
  }
}

export default Hits