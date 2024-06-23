import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase/firebase';

const Login = () => {
  const[user,setUser]=useState({Email:"", Password:""});
  let navigate=useNavigate();
  const handleChange = (e) =>{
      if(e.target.name=="Email"){
        setUser({...user, Email: e.target.value});
      }else if(e.target.name=="Password"){
        setUser({...user, Password: e.target.value})
      }
  }

  const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, user.Email, user.Password);
            console.log("User logged in successfully");
            alert("login successful")
            navigate("/")
        }catch(error){
            console.log(error)
        }
  }
  return (
    <div className="bg-slate-200 flex items-center" style={{minHeight:"calc(100vh - 60px)"}}>
        <div className='container'>
            <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto bg-white rounded-xl shadow-xl p-8">
                <dl>
                    <dd className="flex items-center justify-center"><h2 className='text-2xl font-medium text-center'>User Login</h2> <Link to="/" className="text-2xl relative right-[-100px]"><RxCross2 /></Link></dd>
                    <dt className='font-medium'>Email</dt>
                    <dd><input type="email" onChange={handleChange} required placeholder="Enter your email" name='Email' className="p-2 my-1 rounded w-full bg-gray-100" /></dd>
                    <dt className='font-medium mt-3'>Password</dt>
                    <dd><input type="text" name="Password" required onChange={handleChange} placeholder="Enter your password" className='p-2  my-1 rounded w-full bg-gray-100' /></dd>
                    <dd className="text-center"><button className='mt-3 px-3 rounded text-white bg-slate-400 py-1 hover:bg-slate-500 duration-200'>Login</button></dd>
                    <dd className="mt-3">Don't have account? <Link className="text-sky-500 underline" to="/signup">Sign-up</Link></dd>

                </dl>
            </form>
        </div>
    </div>
  )
}

export default Login