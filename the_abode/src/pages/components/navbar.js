import React from "react";
import Image from "next/image";
import Logo from "./images_home/logo/LOGO - PNG-THE ABODE.png";
import Link from "next/link";

const navbar = () => {
  return (
    <div className=" h-14 md:h-20 shadow-md flex fixed w-full top-0 left-0 z-10 bg-white ">
      <div className=" text-gray-800 mr-auto ml-4 flex items-center">
       
        <Link href="/components/formPage" >   <div className="flex flex-row"> <Image
            className="object-cover overflow-hidden w-8 lg:w-12"
            src={Logo}
            alt=""
          />
          <div className=" flex items-center md:text-2xl">
            <p className=" px-1 items-center text-gray-600">The <span className="font-semibold ">ABODE</span></p>
          </div>
          </div>
          
          </Link>
       
       
      </div>
      <div className="ml-auto mr-4 flex items-center">
        <button className="rounded-full bg-yellow-400 px-5 py-3 lg:py-3 lg:text-base text-white align-middle text-xs ">
         <Link href="/components/red" target="_blank"> GET FREE ESTIMATE  </Link>
        </button>
      </div>
    </div>
  );
};

export default navbar;
