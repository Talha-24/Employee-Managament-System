import React, { useState } from 'react'
import "./Login.css";
const Login = ({LoginFunction}) => {

    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');

    const LoginHandler=()=>{

        
        LoginFunction(email,password)
        setEmail('');
        setPassword('');
        
    }



  return (
    <div className='w-screen h-screen flex items-center justify-center p-[30vmin]'  id="parentlogin">
        <form onSubmit={(e)=>{
            e.preventDefault();
            LoginHandler();
        }} id='childlogin'  className='flex flex-col  border-[1px] border-purple-600 p-[16vmin]'>
            <div>
                <div>
                <h3 className='text-white  text-xl pt-4 pb-1 font-medium'>Email Address</h3>
                <input onChange={(e)=>{
                    setEmail(e.target.value);

                }} value={email} className='py-2 px-5 border-[4px] border-purple-600 bg-[#1C1C1C] rounded text-2xl text-white placeholder:text-grey-400 mb-1 outline-none ' required autoFocus type="email" placeholder='Authenticated Email' />
                </div>
                <div>
                <h3 className='text-white text-xl pt-4 pb-1 font-medium'>Account Password</h3>
                <input  onChange={(e)=>{
                    setPassword(e.target.value);

                }} required value={password} className='py-2 px-5 border-[4px] border-purple-600 bg-[#1C1C1C] rounded text-2xl text-white placeholder:text-grey-400 outline-none' type="password" placeholder='Authenticated Password' />
                </div>
            </div>
            <div>
            <p className='text-white py-3'><a href="tel:+923420305622"> New Employ?</a></p>
             <button id="loginbtn" className='w-full border-[4px] rounnded border-purple-600 py-3 text-purple-600 text-2xl font-semibold hover:text-white hover:bg-purple-600  '>Login</button>
            </div>

        </form>
    </div>
  )
}

export default Login