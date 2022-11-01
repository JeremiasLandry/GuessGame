import React,{ useContext } from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image/Image'
import record from '../../../assets/images/record.png'
import Header from '../../atoms/Header/Header'
import ResponsiveContext from '../../../context/ResponsiveContext'

const RecordWrapper = styled.div`
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

const Record = ({Record='0'}) => {
  const { isBigger, isLarge, isMediumLarge, isMedium, isMediumSmall, isSmall, isExtraSmall } = useContext(ResponsiveContext);

  if(isBigger){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} x='190px' y='20px'/>
      </RecordWrapper>
    )
  }
  else if(isLarge){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} x='180px' y='20px'/>
      </RecordWrapper>
    )
  }
  else if(isMediumLarge){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} x='175px' y='20px'/>
      </RecordWrapper>
    )
  }
  else if(isMedium){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} x='170px' y='17px'/>
      </RecordWrapper>
    )
  }
  else if(isMediumSmall){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} x='165px' y='15px'/>
      </RecordWrapper>
    )
  }
  else if(isSmall){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} maxX='100px !important' maxY='10px'/>
      </RecordWrapper>
    )
  }
  else if(isExtraSmall){
    return (
      <RecordWrapper>
          <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
          <Image outline='none' url={record} maxX='80px' maxY='10px'/>
      </RecordWrapper>
    )
  }
}

export default Record