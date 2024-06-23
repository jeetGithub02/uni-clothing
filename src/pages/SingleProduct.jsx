import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const[item,setItem]=useState({});
    const params =useParams()

    const loadProduct =(url)=>{
        axios.get(url)
        .then(res=> {
            setItem(res.data)
        })
    }

    useEffect(()=>{
        loadProduct(`https://fakestoreapi.com/products/${params.productId}`)
    },[])
  return (
    <div className="bg-slate-200" style={{minHeight:"calc(100vh - 60px)"}}>
        <div className="px-[10px] pt-4">
            {/* <Product product={item}/> */}
            <div className="grid grid-cols-12">
                <div className="md:col-span-5 flex gap-1 col-span-12 border ">
                   <div className="rounded">
                        <img src={item.image} alt="" height={60} width={60} className='border rounded border-slate-400' />
                   </div>
                   <div className='bg-white w-full rounded overflow-hidden border border-slate-400'>
                        <div className='py-3'><img src={item.image} alt="product Image" className='h-[300px] mx-auto  ' /></div>
                        <div><button className="bg-slate-400 text-white text-xl w-full p-1 mt-2">Add to cart</button></div>
                   </div>
                </div>
                <div className="md:col-span-7 px-3 col-span-12 ">
                    <h2 className='text-2xl font-medium my-2'>{item.title}</h2>
                    <p className="overflow-y-auto max-h-[120px]">{item.description}</p>
                    <h2 className="text-2xl font-bold">${item.price}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct