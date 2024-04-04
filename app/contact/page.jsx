"use client"
import React from "react";
import Layout from "../Navlayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/components/Animation";
function contact() {
  
  return (
    <Layout>
    <main className="relative w-full flex flex-col items-center justify-center ">
      
        <section
          className="text-black flex items-center justify-center relative flex-col w-full lg:w-1/2 
                           
                           "
        >
           
         
        </section>

        <section
          className="flex  flex-col w-1/2
                           xs:mt-10  xs:mx-auto xs:py-10 xs:space-y-5 xs:items-center xs:justify-center 
                          lg:items-center lg:justify-center   lg:mx-24  lg:py-20   lg:space-y-10 "
        >
           <h1 className="xs:text-4xl lg:text-7xl my-10  font-bold text-black relative">
            Contact
             us
          </h1>
          
          <section className="  flex items-center justify-center relative flex-col">
            
            <motion.p 
            variants={fadeInUp(0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className=" text-2xl text-black  relative">
              "If you have any questions, need assistance, or
              <br /> simply want to get in touch, please feel free to
              <br /> contact us”
            </motion.p>
          </section>
          <div className="flex w-full xs:space-y-5 xs:flex-col  lg:flex-row  items-center justify-center  lg:space-x-10 lg:space-y-0 ">
            <input
              className="form-control rounded-0 border-b-2 focus:outline-none w-full"
              id="Name"
              name="Name"
              placeholder="Name"
              type=""
              required
            />

            <input
              className="form-control rounded-0 border-b-2 focus:outline-none w-full"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <input
            className="form-control rounded-0 w-full h-10 border-b-2 focus:outline-none"
            id="Message"
            name="Message"
            placeholder="Message"
            type="Message"
            required
          />
          <div className="flex justify-start mr-0 md:mr[500px] lg:mr-[500px]">
          <button
            className="     
          bg-black border-black border-2 text-white font-xl py-1 px-12 rounded  hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]
          xs:focus:text-black xs:focus:shadow-[inset_13rem_0_0_0] xs:focus:bg-white "
            type="button"
          >
            SUBMIT
          </button>
          </div>
        </section>
    

      <div className="flex items-center justify-center"></div>
      <section className="relative flex  items-center justify-center flex-col xs:my-24 xs:16 lg:mx-24 lg:my-72 space-y-20">
        <AnimatedText className="xs:text-sm lg:text-2xl" text={"check out our social media"}/>
        <section className="relative flex flex-row xs:space-x-5  lg:space-x-20">
          <img
            className="relative xs:w-[50px]  xs:h-[45px] lg:w-[80px] lg:h-[80px]  transform transition-transform hover:scale-110"
            src="./B.png"
            alt="Behance"
          />
          <img
            className="relative xs:w-[50px]  xs:h-[45px] lg:w-[80px] lg:h-[80px]  transform transition-transform hover:scale-110 "
            src="./I.png"
            alt="instagram"
          />
          <img
            className="relative xs:w-[50px]  xs:h-[45px] lg:w-[80px] lg:h-[80px]  transform transition-transform hover:scale-110"
            src="./L.png"
            alt="linkdin"
          />
        </section>
      </section>
    </main>
    </Layout>
  );
}
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
export default contact;
