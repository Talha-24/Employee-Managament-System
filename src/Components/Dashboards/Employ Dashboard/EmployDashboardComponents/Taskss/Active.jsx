import React from 'react'

const Active = (propse) => {
  console.log("Data is here...",propse.tasks);
  const btnHandler=(e,evt)=>{
    
  let turn=true;
    if(turn==true){
      let i="true";
      if(i=="true"){
      e.target.innerHTML="Submitted";
      e.target.style.color="White";
      e.target.style.fontWeight="bold";
      e.target.style.backgroundColor="lightseagreen";
     
      }
      i="false";

      
     
    }
  
   
   turn="false";
   

  }
 
 
  return (
    <div className='w-[300px] border-[2px]  border-green-600 flex-shrink-0 p-4 '>
    <div className='flex justify-between'>
        <h4 className='bg-red-600 py-1 px-2 rounded' >{propse.data.taskCategory}</h4>
        <h3>10 Dec 2024</h3>
    </div>
    <div className='flex justify-between items-center py-1 px-1 mt-5 '>
        <h6 className='bg-purple-600 p-1 rounded-sm'>Active</h6><h5 className='text-xl font-semibold self-start'>{propse.data.taskTitle}</h5>
    </div>
    <p className='text-justify'>{propse.data.taskDescription}</p>
    <div className='flex justify-between  mt-4'>
        <button id="loginbtn" onClick={(e)=>{btnHandler(e);}} className='py-1 px-2 bg-green-600 rounded-sm'>Submit Task</button>
         
        <button onClick={(evt)=>{
           let msg=prompt("Your message to CEO(1-200)");
         propse.tasks.taskmsg.unshift(msg);
         console.log( propse.tasks.taskmsg);
         evt.target.innerHTML="Request Sent";
         evt.target.style.display="none"; 

          
      //  console.log(data);
       
         

        }} id="loginbtn"  className='py-1 px-2 bg-red-600 rounded-sm'>Send Request</button>
    </div>

    
    
    </div>
  )
}

export default Active