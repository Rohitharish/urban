'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '../redux/slices/cartslice'

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    let newQty = qty
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id)
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1
        } else {
          return alert('No more product exist')
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }))

    if (redirect) router.push('/cart')
  }

  return (
    <>
      {product.countInStock > 0 && showQty && (
        <div className="my-10 flex space-x-2 ">
          <div>Size</div>
          <div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>{' '}
          </div>
        </div>
      )}
      <div>
      
        {product.countInStock > 0 ? (
          
          <button className=" xs:mx-auto   lg:my-5 lg:ml-0
          bg-black border-black border-2 text-white font-xl py-2 px-6   hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow] " onClick={addToCartHandler}>
            Add to cart
          </button>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </>
  )
}