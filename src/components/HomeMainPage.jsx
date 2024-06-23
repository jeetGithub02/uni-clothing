import React from 'react'
import { Link } from 'react-router-dom'
import men from "../assets/men-min.png"
import women from '../assets/women-min.png'
const HomeMainPage = () => {
  return (
    <section className='bg-slate-200 flex items-center' style={{minHeight:'calc(100vh - 60px)'}}>
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center py-5 gap-5">
                <div>
                    <h2 className='md:text-3xl text-2xl font-bold leading-6'>
                        Welcome to UNI clothing, Experience the height of fashion with our exquisite designer pieces.
                    </h2>   
                    <p className='md:text-lg leading-5 mt-2'>
                    Where style, sophistication, exclusivity is the forefront of our collection. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat nostrum quia nam earum, libero, expedita impedit delectus provident quo eveniet.
                    </p>
                    <Link 
                    to="/products"
                    className="bg-slate-400
                    rounded-md px-2 py-[7px] text-white font-medium inline-block mt-2">Discover our products</Link>
                </div>
                <div  className="flex justify-center">
                    <div>
                        <img src={men} alt="men image" className="h-[300px] w-[300px] object-cover object-top bg-slate-400 rounded-t-[200px]"/>
                    </div>
                    <div>
                        <img src={women} alt="women image" className='h-[300px] w-[300px] object-cover object-top bg-slate-300 rounded-b-[200px] relative 
                        lg:top-[50px] 
                        md:right-[20px]
                        right-[50px]
                        ' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeMainPage