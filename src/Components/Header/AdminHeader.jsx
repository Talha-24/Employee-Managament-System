import React, { useContext, useEffect } from 'react'
import { DataSender } from '../Context API/AuthContext'
import "./Header.css";

const AdminHeader = (propse) => {
   


   
        const Logoutbtn=()=>{
            let admin=confirm("Are you Sure to Logout..?");
          if(admin){
            const logout=localStorage.getItem("Employee");
            propse.loggedInUser('');

          }
         
        

        }
  

    
    
    
  return (
    <div className='p-[4vw] bg-[#1C1C1C] flex items-end justify-between border-[1px] border-purple-600 '>
        <h1 id="adminh1"  className='text-[3vmin] text-white font-semibold'>Hello <br /> <span className='text-[5vmin] text-white font-bold'>Talha(CEO)!👋</span></h1>
        <button id="adminbtn" onClick={()=>{Logoutbtn()}}   className='bg-purple-600 py-3 px-4 text-xl font-medium text-white rounded-sm active:scale-[0.5] active:bg-red-600'>Log Out</button>
    </div>
  )
}

export default AdminHeader