import React from 'react';
import Image from 'next/image';
import IMG1 from "../../../public/Teamimage/1.png";
import IMG2 from "../../../public/Teamimage/2.png";
import IMG3 from "../../../public/Teamimage/3.png";
import IMG4 from "../../../public/Teamimage/4.png";
import IMG5 from "../../../public/Teamimage/5.png";
import IMG6 from "../../../public/Teamimage/6.png";
// import IMG7 from "../../../public/Teamimage/7.png";
// import IMG8 from "../../../public/Teamimage/8.png";
// import IMG9 from "../../../public/Teamimage/9.png";
// import IMG10 from "../../../public/Teamimage/10.png";


const Team = () => {
  return (

    <div className='container h-max flex items-center flex-col mt-20 mb-5'>
     <div className='flex  justify-center font-semibold text-lg pt-6 h-1/6 my-5 text-neutral-600 '>Meet Our Team</div>
    <div className='w-4/5 h-3/4 grid grid-cols-2 gap-1'>

  


   <div className='relative flex'>
   
   
   
   <Image src={IMG1} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-yellow-500 w-4/5  mb text-md text-center">
             Mainak Dey
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
             Founder & Partner
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG2} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-yellow-500 w-4/5  mb text-md text-center">
             Rakesh Sarkar
            </p>
            <p className=" text-gray-700 w-4/5  mb-3 text-xs text-center">
              Partner
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG3} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
             Sujit Ghosh
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
             Partner
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG4} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
             Payel Samanta
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
           Designer
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG5} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
           Name
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
           Junior Designer
            </p>
         
          </div>
   
   
   </div> 

   <div className='relative flex'>
   
   
   
   <Image src={IMG6} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
           Name
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
           Junior Designer
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG1} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
             Koushik
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
           Site Engineer
            </p>
         
          </div>
   
   
   </div> 
   <div className='relative flex'>
   
   
   
   <Image src={IMG2} alt="Team member" />

   <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-end ">
            <p className=" text-white w-4/5  mb text-md text-center">
             Toton
            </p>
            <p className=" text-gray-200 w-4/5  mb-3 text-xs text-center">
           Junior Site Engineer
            </p>
         
          </div>
   
   
   </div> 
   
   
    

    
    </div>
    </div>


   
  )
}

export default Team