import React from 'react'

const Completed = () => {
  return (
    <div className='w-[300px] border-[2px] border-yellow-600 flex-shrink-0 p-4 '>
            <div className='flex justify-between'>
                <h4 className='bg-red-600 py-1 px-2 rounded' >Category</h4>
                <h3>10 Dec 2024</h3>
            </div>
            <div className='flex justify-between items-center gap-4 py-1 px-1 mt-5 '>
                <h6 className='bg-purple-600 p-1 rounded-sm'>Completed</h6><h5 className='text-xl font-semibold'>Youtube Video</h5>
            </div>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sunt atque suscipit natus soluta totam, vitae voluptates laboriosam praesentium nemo?</p>
            <div className='flex justify-between  mt-4'>
                <button id="loginbtn" className='py-1 px-2 bg-green-600 rounded-sm'>Accept Task</button>
                <button id="loginbtn" className='py-1 px-2 bg-red-600 rounded-sm'>Reject Task</button>
            </div>

        </div>
       
  )
}

export default Completed