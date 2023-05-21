import React from 'react';
import Link from "next/link";

const Connect = () => {
  return (
    <div className="container h-max flex flex-col items-center justify-center py-10 bg-gray-300">

    <div className=" w-full">
         
         <div className="flex flex-col items-center justify-center  px-2 py-1 font-semibold text-lg mb-2 ">
  
  <div className='flex'>  Your {" "} &nbsp; 
   <span className="text-red-500">
     Dream Home   
   </span>
   </div>
 
   <div className='flex'> &nbsp;
   is </div>

   <div className='flex'>  just a{" "} &nbsp; 
   <span className="text-red-500">
     Click
   </span>&nbsp;
   away
 </div> 
 </div>
 
 
 
         </div>

     

         <div className=" my-5 flex items-center justify-center">
        <button className="rounded-full bg-red-400 px-10 py-5 text-white align-middle text-sm font-semibold ">
         <Link href="#form">  CALL US </Link>
        </button>
      </div>

      <div className=" align-middle text-base font-semibold "> 9748523583 / 7980205826 </div>

      <div className="text-sm text-gray-500 mt-2">
            Book a free consultation with our Design Expert
         </div>

         </div>
  )
}

export default Connect