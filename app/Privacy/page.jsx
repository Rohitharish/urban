"use client"
import React from "react";
import { motion } from "framer-motion";
import Layout from "../Navlayout";
function Privacy() {
  return (
    <Layout>
    <main className="flex items-center justify-center flex-col  gap-10 xs:p-4  px-6 py-12   ">
      <section className="xs:my-12 md:my-26 lg:m-56 flex  justify-center flex-col  gap-10 ">
        <h1 className="xs:text-6xl md:text-6xl lg:text-8xl text-4xl relative  font-bold text-black ">
          PRIVACY
          <br />
          POLICY.
        </h1>
      </section>
      <img
        className="relative  xs:w-[400px] md:w-[800px]  lg:w-[1300px] "
        src="./Policy.jpg"
        alt="Policy"
      />
      <section className="xs:my-12 md:my-26 lg:m-56 lg:my-52 flex items-start justify-center flex-col gap-10">
        <h2 className="text-2xl  font-normal font-['Lato'] tracking-[5.40px]">
          GAURANTEE POLICY
        </h2>
        <p className="text-lg sm:text-1xl md:text-3xl leading-[36px] sm:leading-[48px] md:leading-[60px]">
          We stand behind all our products and are confident that they
          <br /> will perform as designed. If you are not 100% satisfied with
          one
          <br /> of our products, you may return it within one year of purchase
          <br /> for a refund. After one year, we will consider any items for
          <br /> return that are defective due to materials or craftsmanship.
          <br />
          For details, please refer to our Return Policy.
        </p>
      </section>
      <section className=" xs:my-12 md:my-26 lg:m-56 lg:my-52 flex items-start justify-center flex-col gap-10">
        <h2 className="text-black text-3xl font-normal font-['Lato'] tracking-[5.40px]">
          RETURN POLICY
        </h2>
        <p className="text-lg sm:text-1xl md:text-3xl leading-[36px] sm:leading-[48px] md:leading-[60px]">
          We stand behind all our products and are confident that they
          <br /> will perform as designed. If you are not 100% satisfied with
          one
          <br /> of our products, you may return it within one year of purchase
          <br /> for a refund. After one year, we will consider any items for
          <br /> return that are defective due to materials or craftsmanship.
          <br />
          For details, please refer to our Return Policy.
        </p>
      </section>
    </main>
    </Layout>
  );
}

export default Privacy;
