import React from 'react'
import Navbar from './components/Navbar'
import { useRecoilState } from 'recoil'
import { cartState } from './atom/cartState'
import CartList from './components/cartlist'


const Cart = () => {


    const[cartItem,setCartItem]=useRecoilState(cartState)

  return (
    <div>
    <Navbar/>
    <div className='container mx-auto'>
{cartItem.lenght<=0
?<h1 className='text-center text-4xl mt-32'>Your Cart is Empty</h1>
:cartItem.map(item=><CartList key={item.id} data={item}/>)}
    </div>
    
    
    </div>
  )
}

export default Cart
