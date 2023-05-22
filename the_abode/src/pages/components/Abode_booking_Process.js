import React from 'react';
import Link from "next/link";


const Abode_booking_Process = () => {

  const PROCESS = [
    { key:1, title: "SCHEDULE FREE DESIGN SESSION"},
    { key:2, title: "GET A TRANSPARENT QUOTE" },
    { key:3, title: "MAKE A BOOKING WITH US", },
    { key:4, title: "GET PERSONALIZED DESIGN"  },
    { key:5, title: "GET YOUR DREAM HOME IN 45 DAYS"  },
    { key:6, title: "RELAX AND ENJOY" },
   
    
  ];



  return (

    <div className=" h-max flex flex-col items-center justify-center mt-5 ">
     <div className=" w-full">
          
          <div className="flex flex-col md:flex-row items-center justify-center  px-2 py-1 font-semibold md:text-xl text-lg mb-6 md:my-14 ">
   
   <div className='flex'>  Your {" "} &nbsp; 
    <span className="text-red-500">
      Dream Home   
    </span>
    </div>
  
    <div className='flex'> &nbsp;
    is &nbsp; </div>

    <div className='flex'>  just a{" "} &nbsp; 
    <span className="text-red-500">
      Call
    </span>&nbsp;
    away
  </div> </div>
  
  
  
          </div>


    <div className="w-3/4  grid grid-cols-2 gap-6 place-items-center md:grid-cols-3 lg:grid-cols-6 md:gap-10 text-black text-xs pb-4">
   
   {PROCESS.map((el,index)=>{return  <div className="bg-gray-300 rounded-full shadow flex items-center justify-center  border-red-400 border-2 w-[130px] h-[130px] md:w-[150px] md:h-[150px]" key={index} >
        <div className="text-center  flex flex-col ">
       <div className="font-semibold text-3xl text-white pb-2" > {el.key} </div>  
    
       <div className="w-[100px] text-center font-bold">{el.title}</div> 
        
       </div>
        </div>})}

    
   
    {/* <div className="bg-gray-300 rounded-full shadow flex items-center justify-center w-[140px] h-[140px]" >
        <div className="text-center  flex flex-col ">
       <div className="font-semibold text-lg" > 3 </div>  
    
       <div className="w-[75px]">Make a booking with us</div> 
        
        
        </div>
    </div>
    <div className="bg-gray-300 rounded-full shadow flex items-center justify-center w-[140px] h-[140px]" >
        <div className="text-center  flex flex-col ">
       <div className="font-semibold text-lg" > 4 </div>  
    
       <div className="w-[75px]">Get personalized Design</div> 
        
        
        </div>
    </div>
    <div className="bg-gray-300 rounded-full shadow flex items-center justify-center w-[125px] h-[125px]" >
        <div className="text-center  flex flex-col ">
       <div className="font-semibold text-lg" > 5 </div>  
    
       <div className="w-[75px]">Get your dream in 45 days</div> 
        
        
        </div>
    </div>
    <div className="bg-gray-300 rounded-full shadow flex items-center justify-center w-[125px] h-[125px]" >
        <div className="text-center  flex flex-col ">
       <div className="font-semibold text-lg" > 6 </div>  
    
       <div className="w-[75px]">Relax and Enjoy</div> 
        
        
        </div>
    </div> */}
   
    

    








    {/* <div className=" text-[10px] text-center  text-neutral-500 bg-yellow-200 rounded-full py-1">Schedule free design Session</div>
    <div className="h-5 w-6"> → </div>
    <div className="font-semibold text-[10px] text-center px-1  bg-yellow-200 rounded-md py-1"> Get a transparent Quote</div>
    <div className="h-5 w-6"> → </div>
    <div className="font-semibold text-[10px] text-center px-1  text-neutral-500  bg-yellow-200 rounded-md py-1">Make a booking with us</div>
    <div className="h-5 w-6"> → </div>
    <div className="font-semibold text-[10px] text-center px-1  bg-yellow-200 rounded-md py-1">Get personalized Design</div>
    <div className="h-5 w-6"> → </div>
    <div className="font-semibold text-[10px] text-center px-1  text-neutral-500  bg-yellow-200 rounded-md py-1 ">Get your dream in 45 days</div> */}
    </div>

    <div className=" mt-10 flex items-center w-full justify-center">
              <button className=" w-2/3 rounded-full bg-red-400 px-5 py-3 md:w-1/3 md:text-lg md:py-4 text-white align-middle text-sm shadow-md">
               <Link href="/components/red" target="_blank">BOOK FREE CONSULTATION</Link> 
              </button>
            </div>
    
    </div>
  )
}

export default Abode_booking_Process