
import React, { createContext, useState } from 'react'

export const AccountContext=createContext(null);
 const AccountProvider = ({children}) => {
  const [data,setData]=useState([]);
   const [single,setSingle]=useState({}); 
   if(JSON.parse(localStorage.getItem('user'))===null)localStorage.setItem('user',JSON.stringify([]))
  return (
  <AccountContext.Provider value={{
   data,setData,single,setSingle
  }}>
    {children}
  </AccountContext.Provider>
  )
}
export default AccountProvider
