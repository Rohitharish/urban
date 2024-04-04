

import Link from 'next/link';
import Home from './Header';
import { useSelector } from 'react-redux';
import {  useScroll } from './usescroll';
import { styles } from './styles';





function Navbar() {
  const {loading, cartItems } = useSelector((state) => state.cart)
  const { y, x, scrollDirection } = useScroll();  
  return ( 
    <header className=''>
      <nav className=' 
      xs:w-screen
      lg:w-full  bg-white rounded-[2px] z-10 fixed   flex  items-center justify-between' style={scrollDirection === "down" ? styles.active: styles.hidden} >
      <Link
      className="border-b-2 ml-5"
      href='/contact'>
        
        contact
        
        </Link>
        <div className="flex xs:invisible lg:visible items-center  justify-center ">
         
          
          <Link href='/'>
            <img
              src="./UR.png"
              alt="Hero Image"
              className="text-black text-[32px] font-normal font-['Nasalization'] tracking-[4.80px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 xs:invisible lg:visible mr-5">
     
          
          <Link href='/Know'>
            <img
              src="./User.png"
              alt="Hero Image"
              className="text-black text-[32px] font-normal font-['Nasalization'] tracking-[4.80px] w-5 h-5 "
            />
          </Link>
          <Link href="/Cartpage">
          <span className="cart-badge">
            {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
            <img
              src="./Shopping.png"
              alt="Hero Image"
              className="text-black text-[32px] font-normal font-['Nasalization'] tracking-[4.80px] w-5 h-5"
            />
          </Link>
          <div className="z-10 xs:visible"> 
            <Home/>
          </div>
</div>
        
      </nav>
    
    </header>
  )
}

export default Navbar