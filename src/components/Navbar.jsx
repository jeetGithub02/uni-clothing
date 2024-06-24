import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { HiOutlineUser } from "react-icons/hi2";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { removeItem } from '../redux/bagSlicer';

const Navbar = () => {
    let navRaf=useRef();
    const[isLogin,setIsLogin]=useState(false)
    const[show,setShow]=useState(false)
    const[bagShow,setBagShow]=useState(false)
    const bagItems = useSelector(state=>state.myBag.items);
    const dispatch= useDispatch()


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

  function toggleBagBox(){
        setBagShow(!bagShow);
     
  }
  function removeClick(id){
    dispatch(removeItem(id))
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
    <header className="bg-slate-200 ">
        <div className="container flex items-center justify-between h-[60px] headerBar">
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
                
                <button title="My bag" onClick={toggleBagBox} className='relative'><HiOutlineShoppingBag /> <span className="text-[14px] font-medium absolute -top-3 -right-2 text-red-700">{bagItems.length}</span></button>
                <label title="Account">
                    <div onClick={()=>setShow(!show)} className='cursor-pointer'><HiOutlineUser/></div>
                    <ul onClick={handelAccountClick}  className={`text-[16px] mt-1 h- ${show ? "block" : "hidden"} cursor-pointer rounded font-medium bg-white leading-5 absolute right-2 z-[100] `}>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">Account</li>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">Orders</li>
                        <li className="px-3 py-1 rounded hover:bg-slate-400 duration-200">
                            {isLogin?<span onClick={handleLogout}>Logout</span>
                            :<Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </label>
            </div>
        <div className={`bg-white bagBox rounded-md scroll-none  ${bagShow? "block right-1" : "hidden"} border border-slate-500`}>
            <h4 className="text-lg font-medium text-center border-b pb-2">Items in my bag</h4>
            <div className="p-2">
                {
                   bagItems.map(item=>(
                    <div key={item.id} className='grid grid-cols-12 relative border-b py-3 '>
                        <div className='col-span-2'><img src={item.image} alt="product"  width="60" className='object-contain h-[60px]' /></div>
                        <div className="col-span-9 leading-4 flex flex-col justify-between">
                           <div>
                                <div className='truncate font-medium text-[15px]'>{item.title}</div>
                                <span className='text-slate-500 text-[14px]'>Category: {item.category}</span>
                           </div>
                            <div className='flex items-center justify-between'><span className="text-[15px]">Qnt: <input type="number" className="border rounded px-1 w-10" value={item.qnt} /></span> <span className="text-lg font-medium">${item.price}</span></div>
                        </div>
                        <button className='absolute top-2 right-2' onClick={()=>removeClick(item.id)} title="Remove item"><RxCross2/></button>
                    </div>
                   )) 
                }
               
            </div>
            <div className='flex p-2 items-center justify-between sticky bottom-0 border bg-slate-100 w-full'> 
                    <div>
                        <span >Total: </span>
                        <span className='font-medium text-lg'>${bagItems.reduce((pre, item)=> pre+item.price*item.qnt,0).toFixed(2)}</span>
                        &nbsp;
                        <span className='text-[14px]'> Items: <span className="font-medium">{bagItems.reduce((pre,item)=>pre+item.qnt ,0)}</span></span>
                    </div>
                    <button className='bg-slate-400 rounded px-2 py-1 text-white font-medium'>Place order</button>
                </div>
        </div>
        </div>
        
    </header>
  )
}


export default Navbar