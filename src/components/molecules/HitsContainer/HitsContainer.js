import React,{useContext} from 'react'
import Hits from '../Hits/Hits'
import { StatsContext } from '../../../context/StatsContext'

const HitsContainer = () => {
    const {hits} = useContext(StatsContext);

  return (
    <>
        <Hits HitStrike={hits}/>
    </>
  )
}

export default HitsContainer