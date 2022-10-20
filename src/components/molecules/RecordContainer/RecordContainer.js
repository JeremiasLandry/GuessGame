import React,{useContext} from 'react'
import { StatsContext } from '../../../context/StatsContext'
import Record from '../Record/Record';

const RecordContainer = () => {
    const {record} = useContext(StatsContext);

  return (
    <>
        <Record Record={record ? record : '0'}/>
    </>
  )
}

export default RecordContainer