import React, { useContext } from 'react'
import { DataSender } from '../Context API/AuthContext'

const Header = (propse) => {
  const data=propse.data;
  console.log();

  const logout=()=>{
    let perm=confirm("You are Loggin Out??");
if(perm){
    localStorage.setItem("Employee",'');
    propse.loggedInUser('');
  }
  }
    

  return (
    <div className='p-10 bg-[#1C1C1C] flex items-end justify-between border-[1px] border-purple-600 '>
        <h1  className='text-2xl text-white font-semibold'>Hello <br /> <span className='text-4xl text-white font-bold'>{data.firstName}👋</span></h1>
        <button onClick={()=>{logout()}} className='bg-purple-600 py-3 px-4 text-xl font-medium text-white rounded-sm active:scale-[0.5] active:bg-green-500 '>Log Out</button>
    </div>
  )
}

export default Header