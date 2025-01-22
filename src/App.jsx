import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Authentication/Login'
import Header from './Components/Header/Header'
import AdminDashboard from './Components/Dashboards/Admin Dashboard/AdminDashboard'
import EmployDashboard from './Components/Dashboards/Employ Dashboard/EmployDashboard'
import { DataSender } from './Components/Context API/AuthContext'
const App = (email,password) => {
   const [user,setUser]=useContext(DataSender);
   const [log,setLog]=useState(null);
   const [loggedInUser,setloggedInUser]=useState(null);
   
   useEffect(()=>{
    const LoggedInUser=localStorage.getItem("Employees");
  
    if(LoggedInUser){
      const authData=JSON.parse(LoggedInUser);
      setLog(authData.role);
      setloggedInUser(authData.data);
    }
  },[])
  

   
    

    const LoginFunction=(email,password)=>{

    if(email == "admin@example.com" && password == "admin@password.com"){
      setLog("Admin");
      localStorage.setItem("Employees",JSON.stringify({role: "Admin"}));
    }
    else if(user){
      const employee=user.find((element)=> email == element.email && element.password == password)
   
      if(employee){
        setLog("Employee");
        setloggedInUser(employee);
        localStorage.setItem("Employees",JSON.stringify({role: "Employee",data:employee}));
       
      }
    }
   
   }
   
   
   
   return (
     <div>
    {!log ? <Login LoginFunction={LoginFunction} />: ''}
    {log == "Admin" ? <AdminDashboard loggedInUser={setLog} data={loggedInUser} /> :  (log == "Employee"? <EmployDashboard loggedInUser={loggedInUser} data={setLog} /> : null)}
    </div>
  )
}


export default App