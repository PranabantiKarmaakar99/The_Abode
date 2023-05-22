import Link from "next/link";

import Image from "next/image";
import IMG1 from "./images_home/image9.png"
import Form from "./form2";

const Home = () => {
  return (
    <div id="introduction" >
      <div className=" h-max  mb-14 w-full">
      <div className="h-14 md:h-20">

      </div>
        <div className=" h-[450px] md:h-[550px] w-full relative">
          <Image
            className="h-full object-cover w-full "
            src={IMG1}
            alt="background_image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent "></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mx-10 lg:gap-[360px] ">
            <p className="text-base text-white w-4/5 md:w-[420px]  mt-7 md:mt-14 md:text-lg lg:text-2xl lg:font-semibold text-center ">
              We are your{" "}
              <span className="text-red-500">interior design partner</span> who
              helps to turn your{" "}
              <span className="text-red-500">ideas into reality.</span>
            </p>
            <div className=" hidden md:flex md:w-[360px]">
            <Form  />
            </div>
            </div>
            <div className="mb-4 mt-auto flex items-center w-full justify-center md:hidden">
              <button className=" w-1/2 rounded-full bg-yellow-400  py-3 text-white align-middle text-sm">
              <Link href="#form"> START YOUR DESIGN </Link>
              </button>
            </div>
          </div>
        </div>

        {/* why abode  */}
        <div className=" flex flex-col items-center justify-center md:h-full md:w-full md:pb-14  ">
        <div className=" my-5 flex items-center justify-center">
            <h2 className=" flex items-center justify-center  font-semibold text-center md:text-xl  ">
             Why Us?
            </h2>

            </div>
          <div className=" mx-6 h-[200px] md:h-[70px] lg:h-[100px] md:w-full  rounded-lg my-auto grid grid-cols-3 text-sm  lg:text-lg  lg:rounded-md gap-1 md:grid-cols-6 shadow-md md:shadow-none">
            <div className=" p-1 text-center flex items-center justify-center   lg:px-10  bg-stone-200 text-black-600 ">60+ <br></br> Happy Homes</div>
            <div className=" p-1 text-center flex items-center justify-center  lg:px-10   bg-stone-200 text-black-600 ">Best in Class Design</div>
            <div className=" p-1 text-center flex items-center justify-center   lg:px-10 bg-stone-200 text-black-600">Best Quality Assured</div>
            <div className=" p-2 text-center flex items-center justify-center   lg:px-10 bg-stone-200 text-black-600">Fastest Delivery</div>
            <div className=" p-2 text-center flex items-center justify-center   lg:px-10  bg-stone-200  text-black-600 ">Budget Friendly</div>
            <div className=" p-2 text-center flex items-center justify-center     lg:px-10 bg-stone-200  text-black-600">After Sales Service</div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
