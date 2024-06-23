import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { HiOutlineUser } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import { IoMdLogOut } from 'react-icons/io';
import { auth } from './firebase/firebase';

const Navbar = () => {
    let navRaf=useRef();
    const[isLogin,setIsLogin]=useState(false)
    const[show,setShow]=useState(false)
    function handleMenuToggle(){
        navRaf.current.classList.toggle('show');
    }

    const handleLogout = async()=>{
        try{
          await auth.signOut();
          alert("Logout successfully")

        }catch(error){
            console.log(error)
        }
    }

  const handelAccountClick = ()=>{
        setShow(!show)
  }

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setIsLogin(true)
            }else{
                setIsLogin(false)
            }
        })
    },[])
  return (
    <header className="bg-slate-200 overflow-hidden ">
        <div className="container flex items-center justify-between h-[60px] ">
            <button className='menu sm:hidden text-xl' onClick={handleMenuToggle}><RiMenu2Fill/></button>
            <div className="text-3xl font-bold "><Link to='/' className="flex flex-col items-center leading-[20px] "><span>UNI</span><span className='text-[13px]'>clothing</span></Link></div>
            <nav 
                ref={navRaf} 
               className='text-lg font-medium flex gap-4 
                        bg-slate-200
                        navbar'>
                <Link to="/">Home</Link>
                <Link to="/category/men">Men</Link>
                <Link to="/category/women">Women</Link>
                <Link to="/products">Discover all</Link>
            </nav>
            <div className='flex gap-3 text-xl'>
                
                <button title="My bag"><HiOutlineShoppingBag /></button>
                <label title="Account">
                    <div onClick={()=>setShow(!show)} className='cursor-pointer'><HiOutlineUser/></div>
                    <ul onClick={handelAccountClick}  className={`text-[16px] mt-1 h- ${show ? "block" : "hidden"} cursor-pointer rounded font-medium bg-white leading-5 absolute right-2  `}>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">Account</li>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">Orders</li>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">
                            {isLogin?<span onClick={handleLogout}>Logout</span>
                            :<Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </label>
            </div>
        </div>
    </header>
  )
}

export default Navbar