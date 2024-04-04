import React from "react";
import Swipe from "./Firstpg/Swipe";

const About = () => {
  return (
    <main className="relative flex flex-col items-center justify-center -z-10">
      <div className="font-bold font-[lato] text-[2rem] md:text-[6rem] lg:text-[10rem]">
        URBAN THREADS
      </div>
      <div className="">
        <video
          className="relative xs:w-full xs:h-[400px] xs:object-cover lg:w-full lg:h-full"
          muted
          autoPlay
          controls
          src={"/Vedio1.mp4"}
        />
      </div>

      <section className="h-full w-full my-5">
        <div className="flex flex-col space-y-2">
          <div className="flex xs:flex-col lg:flex-row lg:space-x-5">
            <img
              className="w-full md:w-1/2 lg:w-1/2 lg:h-full"
              src="/NK2.jpg"
              alt="NK2"
            />
            <div className="flex flex-col xs:w-screen lg:items-start lg:justify-end lg:w-full space-y-5 mb-5">
              <h1 className="xs:text-2xl md:text-3xl lg:text-4xl font-bold uppercase relative xs:w-screen xs:px-4 lg:w-[700px] text-black">
                Step into with our FlexFit Running Shoes Bring it on
              </h1>
              <span className="text-base xs:w-screen xs:px-4 lg:w-[500px] text-neutral-400 font-normal">
                Precisely crafted for comfort and style, these shoes
                effortlessly blend fashion and function, making every step a
                statement of elegance.
              </span>
            </div>
          </div>

          <div className="flex xs:flex-col lg:flex-col lg:space-x-5 relative">
            <img
              className="xs:w-screen lg:w-full lg:h-full"
              src="/NK!.jpg"
              alt="NK!"
            />
            <div className="absolute bottom-10 right-10">
              <button className="bg-black text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full w-full">
        <Swipe />
      </section>

      <section className="py-8 md:py-12 lg:py-16 flex w-full xs:flex-col xs:space-y-4 xs:my-5 lg:flex-row lg:my-20">
        <div className="flex flex-col items-start justify-start w-1/2 lg:space-y-5 xs:space-y-2">
          <h1 className="xs:text-2xl md:text-3xl lg:text-4xl font-bold uppercase relative xs:w-screen xs:px-4 lg:w-[594px] text-black leading-[33.30px]">
            A fusion of innovation WITH modern fashion.
          </h1>
          <span className="text-base xs:w-screen xs:px-4 lg:w-[449px] text-neutral-400 font-normal font-['lato']">
            Our designers bring the best of fashion from the newest trends with
            high quality and commitment to delivering the highest standards of
            craftsmanship.
          </span>
          <button>Know more</button>
        </div>

        <img
          className="w-full md:w-1/2 lg:w-1/2"
          src="/F1.jpg"
          alt="F1"
        />
      </section>

      <section className="h-full w-full py-8 md:py-12 lg:py-16">
        <div className="relative xs:flex-col w-full flex lg:flex-col xs:my-10 lg:my-10 space-y-5 text-center">
          <h2 className="xs:text-xl md:text-2xl lg:text-3xl font-bold uppercase lg:w-1/2 text-left">
            featuring the contemporary
            <br /> edge of aesthetic streetwear
          </h2>
          <div className="xs:w-screen lg:w-[500px] text-left text-neutral-400 text-base font-normal">
            Quality is our cornerstone. From the choice of fabrics to the
            precision in stitching, each garment is a testament to our
            commitment to providing you with not just fashion, but an
            experience.
          </div>
        </div>
      </section>

      <section className="h-full w-full">
        <div className="flex flex-col space-y-1">
          <div className="relative w-full xs:flex xs:flex-col xs:space-y-1 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
            <img
              className="lg:w-1/2 w-screen"
              src="./D3.jpg"
              alt="D3"
            />
            <img
              className="lg:w-1/2 w-screen"
              src="./D2.jpg"
              alt="D2"
            />
          </div>
          <img className="w-full" src="./D1.jpg" alt="D1" />
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 flex flex-col xs:w-screen xs:my-5 h-full lg:w-full lg:my-10">
        <h2 className="xs:text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center lg:w-full">
          timeless texture
        </h2>
        <span className="text-base text-center xs:w-screen xs:px-4 lg:w-full font-['Lato'] text-neutral-400 font-normal">
          Experience the timeless streetwear
          <br /> defined by the rich texture
        </span>

        <img className="w-full mt-10" src="./TT.jpg" alt="Texture" />
      </section>
    </main>
  );
};

export default About;