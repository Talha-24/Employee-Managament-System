import React from 'react'
import Header from '../../Header/Header'
import CreateTask from './AdminDashComponents/CreateTask'
import AdminHeader from '../../Header/AdminHeader'
import EmployMessages from './AdminDashComponents/EmployMessages'

const AdminDashboard = (propse) => {
  
 
  return (
    <div className='p-10 '>
      <AdminHeader loggedInUser={propse.loggedInUser} />
        <CreateTask/>
        <EmployMessages  />
        
    </div>
  )
}

export default AdminDashboard