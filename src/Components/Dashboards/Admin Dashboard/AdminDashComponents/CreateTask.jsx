import React, { useContext, useState } from 'react'
import { DataSender } from '../../../Context API/AuthContext';

const CreateTask = () => {

    const [user,setUser]=useContext(DataSender);

    const [taskTitle,settaskTitle]=useState('');
    const [taskCategory,settaskCategory]=useState('');
    const [taskAssign,settaskAssign]=useState('');
    const [taskDate,settaskDate]=useState('');
    const [taskDescription,settaskDescription]=useState('');
    const [taskrequest,settaskrequest]=useState([]);
    const [newTask,setnewTask]=useState(null);

  const   createTask=()=>{
    if(taskTitle,taskCategory,taskAssign,taskDate,taskDescription,taskrequest){
    setnewTask({taskTitle,taskCategory,taskAssign,taskDate,taskDescription,taskrequest,newTask: true,failed: false,});
    console.log(newTask);
}
    user.forEach((element,idx,user)=>{
       if(taskAssign == element.firstName){
         let permission=confirm(`You are assigning task to ",${taskAssign}," Are you sure??`);
        if(permission){element.tasks.unshift(newTask);
        element.taskCounts.newTask=element.taskCounts.newTask+1;
        alert(`Successfully Assigned to ,${taskAssign}`)
        }
        else{
            alert(`NOTE! Task is N/A...`);
        }
       }
     
      
      
             settaskTitle('');      
             settaskAssign('');
             settaskCategory('');
             settaskDate('');
             settaskDescription('');
    })
   

    }

  return (
    <div id="admincomponents" className='border-[1px] border-purple-600 mt-5 '>
        <form onSubmit={(e)=>{e.preventDefault();}} className='flex  justify-between m-10 '>
            <div id="inputs" className='w-1/2   '>    
                <div>
                    <h3 className='text-xl  font-bold mt-2'>Task Title</h3>
                    <input required onChange={(e)=>{
                         settaskTitle(e.target.value);
                    }} value={taskTitle} className='w-1/2 text-xl bg-[#1C1C1C] rounded-sm text-white border-[2px] border-purple-600 py-3  px-4' type="text" placeholder='e.g analyze data,attend meetings'  />
                </div>
                <div>
                    <h3 className='text-xl  font-bold mt-2'>Task Category</h3>
                    <input required onChange={(e)=>{
                        settaskCategory(e.target.value);
                    }} value={taskCategory} className='w-1/2 text-xl bg-[#1C1C1C] rounded-sm text-white border-[2px] border-purple-600 py-3 px-10 ' type="text" placeholder='e.g Design, Development' />
                </div>
                <div>
                    <h3 className='text-xl  font-bold mt-2'>Assign To</h3>
                    <input required  onChange={(e)=>{settaskAssign(e.target.value)}} value={taskAssign} className='w-1/2 text-xl bg-[#1C1C1C] rounded-sm text-white border-[2px] border-purple-600 py-3 px-10' type="text" placeholder='e.g Talha,Uzair,Hammad' />
                </div>
                <div>
                    <h3  className='text-xl  font-bold mt-2'>Task Deadline</h3>
                    <input required onChange={(e)=>{settaskDate(e.target.value)}} value={taskDate} className='w-1/2 text-xl bg-[#1C1C1C] rounded-sm text-white border-[2px] border-purple-600 py-3 px-10' type="datetime-local" />
                </div>
               
                    
            </div>
            <div id="textarea" className='flex flex-col w-1/2 '>
            <h3 className='text-xl  font-bold mt-2'>Task Description</h3>
               
                <textarea required onChange={(e)=>{settaskDescription(e.target.value)}} value={taskDescription} className='h-full bg-[#1C1C1C] outline-none rounded border-[1px] border-red-600' name="" id="" cols="30" rows="10"></textarea>
                <button id="createBtn" onClick={createTask} className='  py-3 border-[2px] border-purple-600  font-medium text-2xl mt-2 hover:bg-purple-600 hover: text-white rounded'>Create Task</button>
             

            </div>

        </form>
    </div>
  )
}

export default CreateTask