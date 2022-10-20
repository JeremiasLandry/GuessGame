import React from 'react'
import styled from 'styled-components'
import Image from '../../atoms/Image/Image'
import record from '../../../assets/images/record.png'
import Header from '../../atoms/Header/Header'

const RecordWrapper = styled.div`
    display: flex;
    align-items: center;
    align-content:center;
    margin:10px 25px;
    margin-left:40px;
`

const Record = ({Record='0'}) => {
  return (
    <RecordWrapper>
        <Header family="'Silkscreen', cursive" level='2' margin='0 10px 3px 10px' innerText={Record}/>
        <Image outline='none' url={record} x='190px' y='25px'/>
    </RecordWrapper>
  )
}

export default Record