"use client"
import Layout from "../Navlayout"
import { data } from "../data"
import ProductItem from "./Productitems"


export default function ProductMain() {
    const { products } = data
    
    return (
  
        <Layout>
        <main className=" relative w-full h-full py-24 ">
    
       
    
    <h2 className=" flex  items-center justify-center text-4xl md:text-6xl lg:text-6xl my-10 uppercase font-bold">Collections</h2>
    <span className="mx-2 block w-full md:w-1/2 lg:w-1/2">Unleash your urban flair with our Signature Streetwear line. Discover bold patterns,
      striking graphics, and unique designs that make a statement and set you apart from the crowd.</span>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      
      </div>
      </main>
      </Layout>
      
    )
  }