"use client"
import React from 'react'
import {useRecoilState} from "recoil"
import { cartState } from '../atom/cartState'


const Product = ({product}) => {

const[cartItem,setCartItem]=useRecoilState(cartState)
const addItemToCart=()=>{

  setCartItem(prevState=>[...prevState,product])
}



  return (
    <div className='bg-white pt-6 pb-4 shadow-2xl'>

<img className='mx-auto w-[350px] h-[200px] object-contain' src={product.image} alt=""/>
<div className='mt-4 px-6'>

<div className='flex items-center justify-between text-[26px]'>
<h1>{product.name}</h1>
<h3>${product.price}</h3>
</div>
<button className='bg-red-600 text-white-py-4 px-12 mt-4 block mx-auto hover:bg-red-800' onClick={addItemToCart}>Add to Cart</button>


</div>
    </div>
  )
}

export default Product