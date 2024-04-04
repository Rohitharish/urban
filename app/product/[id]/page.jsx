"use client";
import AddToCart from "@/app/comp/Addtocart";
import { data } from "@/app/data";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailPage({ params: { id } }) {
  const product = data.products.find((x) => x.id === id);


  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="h-screen">
      <div className="py-2 mx-5 relative ">
        <Link href="/">/ back to products</Link>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col relative h-full">
        <div className="w-full h-full md:w-1/2 full">
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
            className=" object-cover"
          />
        </div>
        <section className="flex flex-col h-full  pl-10  w-1/2">
          <div className=" relative m-10">
            <h1 className="text-4xl   font-bold text-black">{product.title}</h1>
          </div>
          <p className="text-base  w-3/4 m-10">{product.description}</p>
          <div className="mx-10 h-[.5px] bg-gray-300 w-[90%]"></div>
          <span className=" text-base font-normal mx-10 my-10">
            colour : {product.color}
          </span>
          <div className="mx-10 h-[1px]  bg-gray-300 w-[90%]"></div>
          <div className="mx-10 ">
            <AddToCart product={product} redirect={true} />
            
          </div>
        </section>
      </div>
    </div>
  );
}
