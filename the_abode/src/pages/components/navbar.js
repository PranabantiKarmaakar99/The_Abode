import React from "react";
import Image from "next/image";
import Logo from "./images_home/logo/LOGO - PNG-THE ABODE.png";

const navbar = () => {
  return (
    <div className=" h-14 shadow-md flex fixed w-full top-0 left-0 z-10 bg-white ">
      <div className=" text-gray-800 mr-auto ml-4 flex items-center">
        <div className="flex">
          <Image
            className="object-cover overflow-hidden w-8"
            src={Logo}
            alt=""
          />
          <div className=" flex items-center">
            <p className=" px-1 items-center text-gray-600">The <span className="font-semibold ">ABODE</span></p>
          </div>
        </div>
      </div>
      <div className="ml-auto mr-4 flex items-center">
        <button className="rounded-full bg-yellow-400 px-5 py-3 text-white align-middle text-xs ">
          GET FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default navbar;
