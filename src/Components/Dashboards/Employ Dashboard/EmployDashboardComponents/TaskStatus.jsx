import React from 'react'

const TaskStatus = (propse) => {
  
  
  return (
    <div className='flex justify-between gap-4 overflow-x-auto'>
        <div className='w-[45%] border-[1px] mt-10 border-green-600 p-10'>
            <div>
            <h2 className='text-4xl font-medium'>{propse.data.taskCounts.active}</h2>
            <h3 className='text-2xl font-medium'>Active Tasks</h3>
            </div>
        </div>
        <div className='w-[45%] border-[1px] mt-10 border-purple-600 p-10'>
            <div>
            <h2 className='text-4xl font-medium'>{propse.data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Tasks</h3>
            </div>
        </div>
        <div className='w-[45%] border-[1px] mt-10 border-yellow-600 p-10'>
            <div>
            <h2 className='text-4xl font-medium'>{propse.data.taskCounts.completed}</h2>
            <h3 className='text-[3.8vmin] font-medium'>Completed Tasks</h3>
            </div>
        </div>
        <div className='w-[45%] border-[1px] mt-10 border-red-600 p-10'>
            <div>
            <h2 className='text-4xl font-medium'>{propse.data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-medium text-red-600'>Failed Tasks</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskStatus