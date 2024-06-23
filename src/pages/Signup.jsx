import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../components/firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {

  const[user,setUser]=useState({Email:'', Password:'', ConfPassword:''});
  let navigate=useNavigate();

  function handleChange(e){
     if(e.target.name=="Email"){
        setUser({...user, Email:e.target.value})
     }else if(e.target.name=="Password"){
        setUser({...user, Password:e.target.value})
     }else{
        setUser({...user, ConfPassword:e.target.value})
     }
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    toast("Hello world")
    if(user.Password===user.ConfPassword){
      console.log(user)
      try{
        
        await createUserWithEmailAndPassword(auth, user.Email, user.Password)
        let formUser=auth.currentUser;
        console.log(formUser);
        alert("User registered successfully")
        navigate("/login")

      }catch(error){
          console.log(error)
      }
    }
  }

  return (
    <div className="bg-slate-200 flex items-center" style={{minHeight:"calc(100vh - 60px)"}}>
        <div className='container'>
            <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto bg-white rounded-xl p-8 shadow-xl">
                <dl>
                    <dd className="flex items-center justify-center"><h2 className='text-2xl font-medium text-center'>User Sign-up</h2> <Link to="/" className="text-2xl relative right-[-100px]"><RxCross2 /></Link></dd>
                    <dt className='font-medium'>Email</dt>
                    <dd><input onChange={handleChange} type="email" name='Email' required placeholder="Enter your email"  className="p-2 my-1 rounded w-full bg-gray-100" /></dd>
                    <dt className='font-medium mt-3'>Password</dt>
                    <dd><input  onChange={handleChange} name="Password" type="password" required placeholder="Create your password" className='p-2  my-1 rounded w-full bg-gray-100' /></dd>
                    <dt className='font-medium mt-3'>Confirm Password</dt>
                    <dd><input  onChange={handleChange} type="password" name="ConfPassword"  placeholder="Confirm your password" className='p-2  my-1 rounded w-full bg-gray-100' /></dd>
                    
                    <dd className="text-center"><button type="submit" className='mt-3 px-3 rounded w-full text-white bg-slate-400 py-1 hover:bg-slate-500 duration-200'>Sign-up</button></dd>
                    <dd className="mt-3">Already have an account? <Link className="text-sky-500 underline" to="/login">Login</Link></dd>
                </dl>
                
            </form>
        </div>
        
    </div>
  )
}

export default Signup