import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="p-3 rounded-md border bg-white">
       <Link to={`/products/${product.id}`}>
           <div className="p-2"><img src={product.image} className='product-img object-contain h-[200px] mx-auto ' alt="product image" title={product.title} /></div>
       </Link>
        <div>
            <div>
                <h3 
                title={product.title} 
                className="text-xl font-medium leading-5 title">
                    {product.title}
                </h3>
                <h5 
                title={product.description}
                className="mt-1 leading-5 description"
                >{product.description}</h5>
            </div>
            <div className="flex items-center justify-between mt-3">
                <button className='md:hover:scale-105 duration-300 bg-slate-400 text-white px-2 py-[5px] rounded-md fw-medium'>Add ro cart</button>
                <p className='font-medium text-lg'>${product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product