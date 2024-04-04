import React from "react";


function Footer() {
	return (
		<>
			<div className="bg-black border-t-[.5px] border-white h-1/2 w-full flex  
			xs:flex-col  xs:mx-0 xs:items-center
			lg:flex-row lg:justify-around lg:items-start lg:p-20 lg:mx-0">
				<div className="  xs:flex-col
				xs:mx-16
				lg:mr-48 lg:my-10 lg:space-y-2">
					<ul>
						<p className="text-white 
						
						flex-col">
							<span className="text-sm">Sign up for email updates today.</span>
                            <span className="text-sm">Email Address*</span>
						</p>
                        </ul>
						<div className="flex gap-6 pb-5 xs:flex-col lg:flex-row">
                        <input
              className="form-control rounded-0 border-b-2 w-64 bg-transparent text-white focus:outline-none "
              id="Email"
              name="Email"
              placeholder="Email"
              type=""
              required
            />
			 <button
            className=" 
          bg-black border-white border-[1px]  text-white font-xs xs:py-0 xs:px-0  lg:py-[2px] lg:px-4   hover:text-black hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow] "
            type="button"
          >
            Sign up
          </button>

						</div>
                        <p className="text-white  text-sm">
							By providing your email, you agree to the Terms and Conditions.
						</p>
					
				</div>
				<div className=" my-10">
					<ul>
						<p className="text-white  text-base font-medium font-['Lato'] pb-4">CATEGORIES</p>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato'] hover:text-white cursor-pointer">
							Jeans
						</li>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato'] hover:text-white cursor-pointer">
							Sneakers
						</li>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato'] hover:text-white cursor-pointer">
						    T-shirts
						</li>
						
					</ul>
				</div>
				<div className="my-10">
					<ul>
						<p className="text-white  text-base font-medium font-['Lato'] pb-4">COMPANY</p>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato'] hover:text-white cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato']  hover:text-white cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato'] hover:text-white cursor-pointer">
							Guarantee
						</li>
						
					</ul>
				</div>
				<div className="my-10">
					<ul>
						<p className="text-white  text-base font-medium font-['Lato'] pb-4">SUPPORT</p>
						<li className="text-gray-500 text-md pb-2 text-base font-medium font-['Lato']  hover:text-white cursor-pointer">
							Lisencing
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  lg:p-5 bg-black space-y-4">
            <div className=" w-[90%] h-[0px] border border-zinc-500 "></div>
			<div className="flex flex-row lg:space-x-96 xs:mx-16">
			<p className=" text-gray-500 text-sm font-semibold xs:invisible lg:visible">
				  DESIGNED BY ROHIT
					
				</p>
				<p className=" text-gray-500 text-sm font-semibold">
				  URBAN THREADS © 2023
					
				</p>
				<div className="flex flex-row xs:invisible lg:visible xs:space-x-0  md:space-x-10 lg:space-x-10">
				<img
            className="relative xs:w-[50px]  xs:h-[45px] lg:w-10 lg:h-10 "
            src="./Bwhite.png"
            alt="Behance"
          />
          <img
            className="relative xs:w-[50px]  xs:h-[45px] lg:w-10 lg:h-10 "
            src="./Iwhite.png"
            alt="instagram"
          />
          <img
            className="relative xs:w-0 xs:h-[45px] lg:w-10 lg:h-10 "
            src="./Lwhite.png"
            alt="linkdin"
          />
				</div>
				</div>
			</div>
		</>
	);
}

export default Footer;