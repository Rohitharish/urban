'use client'

import { addToCart,removeFromCart } from '../redux/slices/cartslice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Navlayout'

export default function CartPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  return (
    <Layout>
    <div className="flex items-center flex-col mx-12 ">
      <h1 className=" mb-4 text-4xl font-black "> Cart</h1>
      {loading ? (
        <div>loading</div>
      ) : cartItems.length === 0 ? (
        <div className="flex h-[80vh] items-center justify-center">
          Cart is empty.  <Link 
          className="border-b-2"
          href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Product</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link
                        href={`/product/${item.id}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={300}
                          height={300}
                          className="p-1"
                        ></Image>
                        {item.title}
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="w-[40px]"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        <img
                        src='./B.png'
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card p-5 border-black border h-full">
              <ul>
                <li>
                  <div className=''>
                    
                  </div>
                  <div className="pb-3 text-xl">
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : $
                    {itemsPrice}
                  </div>
                </li>
                <li>
                  <button
                    onClick={() => router.push('/shipping')}
                    className=" bg-black border-black border-2 text-white font-xl py-1 px-12 rounded  hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]
                    xs:focus:text-black xs:focus:shadow-[inset_13rem_0_0_0] xs:focus:bg-white "
                  >
                    Proceed to checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  )
}
