import { useDispatch, useSelector } from 'react-redux'; // Add this import statement

import Link from 'next/link';
import Image from 'next/image';
import AddToCart from './Addtocart';
import { removeFromCart } from '../redux/slices/cartslice';
import Layout from '../Navlayout';

export default function ProductItem({ product }) {


  
  return (
    
    <div className=" mx-1">
    
      <Link href={`/product/${product.id}`}>
        <Image
          src={`${product.img}`}
          width={600}
          height={400}
          alt={product.name}
          className=" shadow object-contain"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <p className="text-2xl uppercase font-bold">{product.title}</p>
        </Link>

        <p className="mb-2 text-lg">{product.company}</p>
        <p className="text-base">${product.price}</p>
        <AddToCart
         
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
        <Link href={`/product/${product.id}`}>
        <button>shop now</button>
      </Link>
      </div>
    </div>
    
  );
}
