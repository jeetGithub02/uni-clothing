import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Simmer from '../components/Simmer';
import { useParams } from 'react-router-dom';

const DiscoverProducts = () => {
    const[products,setProducts]=useState([]);
    const[sort,setSort]=useState(null);
    let params=useParams();
    
    function handlePriceSortChange(e){
        if(e.target.value==="asc"){
            setProducts(pre=> pre.sort((a,b)=> a.price - b.price))
            setSort("asc")
        }else if(e.target.value=="dsc"){
            setProducts(pre=> pre.sort((a,b)=> b.price - a.price))
            setSort('dsc')
        }else{
            setSort(null)
        }
    }

    useEffect(()=>{
        if(!params.categoryName){
            axios.get(`https://fakestoreapi.com./products`).then(res=>{
                const fashionProduct=res.data.filter(item => item.category=="men's clothing" || item.category=="women's clothing");
                setProducts(fashionProduct)
            })
        }
        else if(params){
            axios.get(`https://fakestoreapi.com./products/category/${params.categoryName=="men"?"men's clothing":"women's clothing"}`)
            .then(res=>{ 
                setProducts(res.data)
            })
        }
    },[params.categoryName])
  return (
    <main className='grid grid-cols-12 px-2 gap-2 bg-slate-200 relative'>
        <div className="md:col-span-2 col-span-12 flex justify-between items-start">
            <div>
                <div className='border-b py-1 border-slate-400'>Category</div>
                <div className="flex flex-col">
                    <label><input type="checkbox" /> Men</label>
                    <label><input type="checkbox" />Women</label>
                </div>
            </div>
            <div className="flex gap-1 mb-2 md:absolute right-10">
                <h5>Sort by:</h5>
                <select className="px-1 rounded outline-none text-[14px]" onChange={handlePriceSortChange}>
                    <option value="-1">Select an option</option>
                    <option value="asc">(Price) Lowest to Highest</option>
                    <option value="dsc">(Price) Highest to lowest</option>
                </select>
            </div>
           
        </div>  
        <div className="md:col-span-10 md:mt-8 pb-3 col-span-12 overflow-y-auto md:max-h-[84vh] min-h-[84vh]">
        
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                {
                    products.length ? products.map(product=>(
                        <Product product={product} key={product.id}/>
                    )):<Skeleton/>
                }
            </div>
        </div>
    </main>
  )
}

function Skeleton(){
    let a=[];
    for(let i =0; i<8; i++){
        a.push(<Simmer key={i}/>)
    }
    return a;
}

export default DiscoverProducts