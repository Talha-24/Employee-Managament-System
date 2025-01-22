import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Local Storage/LocalStorage';
export const DataSender=createContext();
const AuthContext = ({children}) => {
   const [user,setUser]=useState(null);//LocalStorageDataIsStoredInHookStatesAndThenPassedThroughContextAPIBYUSERSTateHOOKS
   
   useEffect(()=>{
    setLocalStorage();
    const {employees}=getLocalStorage();
    setUser(employees);
  
   },[])
   


  return (
    <DataSender.Provider value={[user,setUser]}>
        {children}

    </DataSender.Provider>
   
  )
}

export default AuthContext