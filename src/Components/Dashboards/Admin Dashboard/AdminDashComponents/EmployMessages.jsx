import React, { useContext } from 'react'
import { DataSender } from '../../../Context API/AuthContext'

const EmployMessages = (propse) => {
    const [user,setUser]=useContext(DataSender);
    function replyhandler(e){
        e.target.innerHTML="Denied";
        e.target.style.backgroundColor="Red";
        e.target.style.fontWeight="bolder";
    }
    function replyhandlerTwo(evt){
        evt.target.innerHTML="Accepted";
        evt.target.style.backgroundColor="purple";
        evt.target.style.fontWeight="bolder";

    }
    console.log("User",user[0]);
    return (
        <div className='  mt-1 border-[1px] px-10 border-purple-600  '>
        <div className='flex items-center justify-between mt-5  border-yellow-600'>
            <h3 className='w-1/3 font-medium text-[4vmin]'>Name</h3>
            <p className='w-1/3 font-medium text-[4vmin]'>Message </p>
            <p className='w-1/3 text-3xl text-[4vmin] text-yellow-500 font-serif text-center'>Submit</p>

        </div>
        {user.map((element,idx)=>{
   
    

            
            return(
                <div key={idx} className='flex justify-between py-2   mt-2'>
                <h3 id="adminmsgtext" className='w-1/3  text-xl'>{element.firstName}</h3>
                <p id='employmsg' className='w-1/3 text-xl text-justify'>{element.taskmsg[0]}  </p>
                <div className='w-1/3 flex justify-center'>
                <button onClick={(e)=>{
                   
                     console.log("Before",element.taskmsg);
                element.taskmsg.shift();
                console.log("After",element.taskmsg)
                 element.btnReply.unshift('Request is Approved');
                 e.target.style.display="none";
                //  window.location.reload();
                
                
                }} className='mr-10 active:scale-[1.2]'>{element.adminmsg[0]}</button>

                <button onClick={(e)=>{
                    element.btnReply.unshift('Request is Denied');
                    e.target.style.display="none";
                    // window.location.reload();
                }} className='active:scale-[1.8]'>{element.adminmsg[1]}</button>
                </div>
                
            </div>

            )
        })}
        
    </div>
  )
}

export default EmployMessages