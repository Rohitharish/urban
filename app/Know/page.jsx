"use client";
import React, { useRef } from "react";
import { inView, motion, useInView } from "framer-motion";

import Layout from "../Navlayout";
import Image from "next/image";
import { fadeIn } from "@/components/Animation";
function Genz() {
  const uref = useRef(null);
  const view = useInView(uref, { amount: 0.5, once: true });
  const leviref = useRef(null);
  const Inview = useInView(leviref, { amount: 0.5, once: true });
  const para = useRef(null);
 
  return (
    <Layout>
      <main
        className=" flex  items-center  bg-white  
       
      flex-col "
      >
        <section className=" w-full   my-20 
        sm:my-20 sm:space-y-5 
        md:my-20 md:space-y-10
        lg:my-20 lg:space-y-10 ">
        
            
            
            <motion.p
              variants={slideIn("up", "tween", 0.2, 1)}
              ref={uref}
              initial="hidden"
              animate={view ? "show" : "hidden"}
              className="relative 
              w-full
                  text-black text-6xl font-black flex items-center justify-center"
            >
            THE BRAND
            </motion.p>
          
          
           

            <Image
              className="relative flex h-screen w-screen object-cover"
              src="/Genz.jpg"
              alt="Genz"
              width={2000}
              height={2000}
            />
          </section>
          <section className="mx-60 flex flex-col space-y-2">
          <div className="flex  items-center justify-center text-center font-light ">
            <p className=" text-xl">Urban embraces the latest fashion trends while adding a unique twist, making their clothing stand out. They prioritize sustainability, using eco-friendly materials and ethical manufacturing processes. This commitment to the environment aligns with the brand's vision of a brighter, greener future.</p>
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row py-5">
          <Image
              className="relative flex h-screen w-1/2 object-cover"
              src="/levitate.jpg"
              alt="Genz"
              width={1000}
              height={1000}
            />
            <motion.p
              variants={fadeIn("left", "tween", 0.2, 1)}
              ref={leviref}
              initial="hidden"
              animate={Inview ? "show" : "hidden"}
              className="text-white absolute   z-20 xs:text-2xl xs:hidden
              lg:flex  lg:text-9xl lg:pl-20 lg:pt-[20rem]"
            >
              LEVI
            </motion.p>
            <motion.p
              variants={fadeIn("left", "tween", 0.6, 1)}
              ref={leviref}
              initial="hidden"
              animate={Inview ? "show" : "hidden"}
              className="text-white absolute z-20 
              xs:text-2xl xs:hidden
              lg:flex lg:text-9xl lg:pl-40  lg:pt-[26rem]"
            >
              TATE
            </motion.p>
            <span className="px-8 space-y-4">
              <h3 className=" text-4xl text-black font-bold">MATERIAL DESIGN</h3>
              <p className="w-full text-lg text-gray-500">
              Urban embraces the latest fashion trends while adding a unique twist, making their clothing stand out. They prioritize sustainability, using eco-friendly materials and ethical manufacturing processes. This commitment to the environment aligns with the brand's vision of a brighter, greener futureAt our sustainable men's clothing brand, we take pride in offering more than just stylish apparel; we provide a commitment to a greener and more responsible lifestyle. 
              </p>
            </span>
          </div>
          {/*vedio sec*/}
          <div>
          <video 
    className="relative
    xs:w-full xs:h-[400px]   xs:object-cover
    lg:w-full lg:h-full "  muted autoPlay 
    controls src={"/vd2.mp4"} />
          </div>
          {/*img sec*/}
          <div className="flex flex-col md:flex-col lg:flex-row space-x-2">
            <span>
            <h3 className=" text-4xl text-black font-bold my-4">MATERIAL DESIGN</h3>
              <p className="text-base w-full">Bershka shops are distinguished throughout the world by their strategic location and well-detailed architecture. The establishments are converted into spacious trend-setting showcases with a carefully thought through image extending from the windows to th arrangement of the goods inside. Bershka selects the best commercial sites in each city and positions itself in the most notable areas of the main shopping centres. Unique buildings are often chosen, which the Bershka architectural studio refurbish and adapt to its brand image and philosophy.</p>
            </span>
          <Image
              className="relative flex h-full w-[500px] object-cover "
              src="/levitate.jpg"
              alt="Genz"
              width={1000}
              height={1000}
            />
              
          </div>
        
          <div className="flex flex-col md:flex-col lg:flex-row pb-40">
          <Image
              className="relative flex h-[500px] w-[500px] object-contain"
              src="/main.jpg"
              alt="Genz"
              width={1000}
              height={500}
            />
            <span className="flex flex-col md:px-10 lg:px-20 justify-end space-y-4">
            <h3 className=" text-4xl text-black font-bold">MATERIAL DESIGN</h3>
              <p className="text-base w-full">Bershka shops are distinguished throughout the world by their strategic location and well-detailed architecture. The establishments are converted into spacious trend-setting showcases with a carefully thought through image extending from the windows to th arrangement of the goods inside.</p>
            </span>
           
          </div>
         </section>
      
      </main>
    </Layout>
  );
}

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
                              
const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AnimatedText = ({ text, el: Wrapper = "p", className }) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5, once: true });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {textArray.map((line) => (
          <span key={line} className="block">
            {line.split(" ").map((word) => (
              <span key={word} className="inline-block">
                {word.split("").map((char) => (
                  <motion.span
                    key={char}
                    className="inline-block"
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
        
      </motion.span>
    </Wrapper>
    
  );
};

export default Genz;
