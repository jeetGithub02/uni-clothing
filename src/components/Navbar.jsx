import React, { useRef, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { HiOutlineUser } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
    let navRaf=useRef();
    function handleMenuToggle(){
        navRaf.current.classList.toggle('show');
    }
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
            <div className='flex gap-4 text-xl'>
                <button title="My bag"><HiOutlineShoppingBag /></button>
                <button title="My account"><HiOutlineUser /></button>
            </div>
        </div>
    </header>
  )
}

export default Navbar