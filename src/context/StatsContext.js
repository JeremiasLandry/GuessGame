import React from 'react'
import { createContext } from 'react';
import { useState } from 'react' 


export const StatsContext = createContext()

export const StatsProvider = ({children}) => {

    const [life, setLife] = useState(()=>{
        const stickyValue = window.localStorage.getItem('life');
        return stickyValue !== null
          ? parseInt(stickyValue)
          : 100;
    });

    const [hits, setHits] = useState(0);

    const [record, setRecord] = useState(()=>{
        const stickyValue = window.localStorage.getItem('record');
        return stickyValue !== null
          ? parseInt(stickyValue)
          : 0;
    });


  return (
    <StatsContext.Provider value={{
        record,
        setRecord,
        hits,
        setHits,
        life,
        setLife
    }}> {children} </StatsContext.Provider>
  )
}

export default StatsContext