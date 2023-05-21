import Link from "next/link";

import Image from "next/image";
import IMG1 from "./images_home/image9.png";

const Home = () => {
  return (
    <div id="introduction">
      <div className="container h-calc[screen-56px] mt-14 mb-5">
        <div className=" h-1/2 bg-green-400 relative">
          <Image
            className="h-full object-cover "
            src={IMG1}
            alt="background_image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent "></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <p className="text-base text-white w-4/5  mt-7 text-center ">
              We are your{" "}
              <span className="text-red-500">interior design partner</span> who
              helps to turn your{" "}
              <span className="text-red-500">ideas into reality.</span>
            </p>
            <div className="mb-4 mt-auto flex items-center w-full justify-center">
              <button className=" w-1/2 rounded-full bg-yellow-400  py-3 text-white align-middle text-sm">
                START YOUR DESIGN
              </button>
            </div>
          </div>
        </div>

        {/* why abode  */}
        <div className=" h-1/2 flex flex-col items-center justify-center ">
        <div className=" my-5 flex items-center justify-center">
            <h2 className=" flex items-center justify-center  font-semibold text-center">
             Why Us?
            </h2>

            </div>
          <div className=" h-3/4 mx-6 bg-stone-100 rounded-lg my-auto grid grid-cols-3 text-sm   drop-shadow">
            <div className=" p-1 text-center flex items-center justify-center  bg-stone-100 text-stone-400 ">100+ <br></br> Happy Homes</div>
            <div className=" p-1 text-center flex items-center justify-center    bg-stone-300 text-stone-600 ">Best in Class Design</div>
            <div className=" p-1 text-center flex items-center justify-center  bg-stone-100 text-black-400">Best Quality Assured</div>
            <div className=" p-2 text-center flex items-center justify-center  bg-stone-300 text-black-400">Fastest Delivery</div>
            <div className=" p-2 text-center flex items-center justify-center  bg-stone-100  text-stone-500 ">Budget Friendly</div>
            <div className=" p-2 text-center flex items-center justify-center   bg-stone-300  text-black-400">Best in Class Design</div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
