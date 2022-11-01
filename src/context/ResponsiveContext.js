import React from 'react'
import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const ResponsiveContext = createContext()

export const ResponsiveProvider = ({children}) => {
  const isBigger = useMediaQuery({ minWidth: 768 })
  const isLarge = useMediaQuery({ maxWidth: 768 })
  const isMediumLarge = useMediaQuery({ maxWidth: 640 })
  const isMedium = useMediaQuery({ maxWidth: 568 })
  const isMediumSmall = useMediaQuery({ maxWidth: 500 })
  const isSmall = useMediaQuery({ maxWidth: 450 })
  const isExtraSmall = useMediaQuery({ maxWidth: 350 })
    
  return (
    <ResponsiveContext.Provider value={{
       isBigger,
       isLarge,
       isMediumLarge,
       isMedium,
       isMediumSmall,
       isSmall,
       isExtraSmall
    }}>
    {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContext