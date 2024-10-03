import React from 'react'
 
const CartList=({data})=>{
    const{
        name,image,quantity,price}=data
        return(
            <div>
<div className='bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-canter justify-between'>
<img className='h-[100px]' scr={image} alt =""/>
<div>
    <div className='font-bold text-2xl'>{name}</div>
    <div> Qty: {quantity}
    </div>
</div>

<div className='text-3xl font-bold'>${price*quantity}</div>
</div>
</div>
        )
}
export default CartList