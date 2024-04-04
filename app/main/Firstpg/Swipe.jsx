
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import Image from 'next/image';
function Swipe() {
 
  return (
    <main className="flex relative items-center flex-col  justify-center w-full h-full ">
      <div className="relative xs:my-16
      lg:my-16 text-center"
      >
    <h2 className=" text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold">
        NEW TREND
    </h2>
    <p className="   text-neutral-400 text-base font-normal font-['Lato'] leading-[23.04px]">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
</div>
       <div className='flex
       xs:flex-col xs:space-x-0
       lg:flex-row lg:space-x-5'>
        <div className='flex flex-col items-center space-y-5'>
        <div className="relative 
     
     xs:h-[493px] xs:w-[100vw]
      lg:w-[419px]
     overflow-hidden">
    <Image
    
      src="/Cardjean.jpg"
      fill={true}
      className="object-contain"
    />
    </div>
    <span className=" text-base font-normal font-['Lato'] leading-[23.04px]">JEANS</span>
    </div>
    <div className='flex flex-col items-center space-y-5'>
    <div className="relative 
     
     xs:h-[493px] xs:w-[100vw]
      lg:w-[419px]
     overflow-hidden">
    <Image
    
      src="/Cardshirt.jpg"
      fill={true}
      className="object-contain"
    />
    </div>
    <span className="text-base font-normal font-['Lato'] leading-[23.04px]">SHIRTS</span>
    </div>
    <div className='flex flex-col items-center space-y-5'>
    <div className="relative 
     
     xs:h-[493px] xs:w-[100vw]
      lg:w-[419px]
     overflow-hidden">
    <Image
    
      src="/Cardsneakers.jpg"
      fill={true}
      className="object-contain"
    />
    </div>
    <span className=" text-base font-normal font-['Lato'] leading-[23.04px]">SNEAKERS</span>
    </div>
   </div>
  
        
        </main>
  )
};

export default Swipe