
"use client"
import Navbar from '../app/components/Navbar';
import Product from '@/app/components/Product';
import data from "../../data.json";
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
    <div >
    <Navbar/>
    <section className='container mx-auto'>

     <h1 className='text-4xl mt-4 text-center'>Our Products</h1> 
    
    <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {data.map(product => <Product product={product}/>)}

    </div>
    
    </section>
    </div>
    </RecoilRoot>
  );
}
