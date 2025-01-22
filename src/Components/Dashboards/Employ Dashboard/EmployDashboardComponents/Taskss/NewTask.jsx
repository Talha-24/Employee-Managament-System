import React from 'react'

const NewTask = (propse) => {
    console.log();
    
  
    let username="Accepted";
   
 
  return (
    <div className='w-[300px] flex-shrink-0 border-[2px] border-purple-600 p-4 '>
      <marquee className=''>FROM CEO! {propse.tasks.btnReply[0]}</marquee>
            <div className='flex justify-between'>
                <h4 className='bg-red-600 py-1 px-2 rounded' >{propse.data.taskCategory}</h4>
                <h3>{propse.data.taskDate}</h3>
            </div>
           
            <div className='flex  items-center gap-10 py-1 px-1 mt-5 '>
                <h6 className='bg-green-600 p-1 rounded-sm'>New Task</h6>
                <h5 className='text-xl font-semibold text-justify'>{propse.data.taskTitle}</h5>
            </div>
            <p className='text-justify'>{propse.data.taskDescription}</p>
           
            <div className='flex justify-between  mt-4'>
                <button id="loginbtn" onClick={(e)=>{let turn=confirm("You're accepting the task,are you sure?"); if(turn){ e.target.innerHTML="Task Accepted"; e.target.style.backgroundColor="purple";e.target.style.color="white";e.target.style.fontWeight="bold";}}} className='py-1 px-2 bg-green-600 rounded-sm'>Accept Task</button>

                <button onClick={(evt)=>{
           let msg=prompt("Your message to CEO(1-200)");
         propse.tasks.taskmsg.unshift(msg);
         console.log( propse.tasks.taskmsg);
         propse.tasks.adminmsg.unshift(<button onClick={(e)=>{

         }}>🆗</button>);
         propse.tasks.adminmsg.push(<button onClick={()=>{
       
         }}>🚫</button>);
         evt.target.innerHTML="Request Sent";
         alert('Request has Successfully to CEO...')

          
      //  console.log(data);
       
         

        }} id="loginbtn"  className='py-1 px-2 bg-red-600 rounded-sm'>Send Request</button>
            </div>

        </div>
  )
}

export default NewTask