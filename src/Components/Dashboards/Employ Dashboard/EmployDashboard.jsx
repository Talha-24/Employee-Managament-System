import React from 'react'
import Header from '../../Header/Header'
import TaskStatus from './EmployDashboardComponents/TaskStatus'
import Tasks from './EmployDashboardComponents/Tasks'

const EmployDashboard = (propse) => {
  
  return (
    <div className='p-10'>
        <Header loggedInUser={propse.data} data={propse.loggedInUser} />
        <TaskStatus data={propse.loggedInUser} />
        <Tasks  data={propse.loggedInUser}/>

    </div>
  )
}

export default EmployDashboard