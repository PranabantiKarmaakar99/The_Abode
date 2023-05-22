import React from 'react';
import Image from 'next/image';
import IMG1 from "../../../public/Teamimage/1.jpeg";
import IMG2 from "../../../public/Teamimage/2.jpeg";
import IMG3 from "../../../public/Teamimage/3.jpeg";
import IMG4 from "../../../public/Teamimage/4.jpeg";
import IMG5 from "../../../public/Teamimage/5.jpeg";
import IMG6 from "../../../public/Teamimage/6.png";
import IMG7 from "../../../public/Teamimage/7.jpeg";
import IMG8 from "../../../public/Teamimage/8.jpeg";
// import IMG9 from "../../../public/Teamimage/9.png";
// import IMG10 from "../../../public/Teamimage/10.png";


const Team = () => {
  const IMAGE = [
    { key:1,image: IMG1, title: "Ar. Mainak Dey", role: "Founder & Partner" },
    { key:2,image: IMG2, title: "Ar. Rakesh Sarkar", role: "Partner" },
    { key:3,image: IMG3, title: "Sujit Ghosh", role: "Partner" },
    { key:4,image: IMG4, title: "Payel Samanta", role: "Interior Designer" },
    { key:5,image: IMG5, title: "Moutuli Bhattacharjee", role: "Interior Designer" },
    { key:6,image: IMG6, title: "Koushik Jana", role: "Site Supervisor" },
    { key:7,image: IMG7, title: "Toton Das", role: "Site Supervisor" },
    { key:8,image: IMG8, title: "Adrija Lahiri", role: "Trainee Architect" },
    
  ];
  return (

    <div className=' h-max flex items-center flex-col  '>
     <div className='flex  justify-center font-semibold text-lg pt-6 h-1/6 my-5 text-black-600 md:text-xl md:mb-10 '>Meet Our Team</div>
    <div className='w-4/5 h-3/4 grid grid-cols-2 md:grid-cols-4 gap-5'>

  

{IMAGE.map((el,index)=>{  
  return  <div className=' flex flex-col items-center  text-center' key={index}>
   
   
   
   <Image src={el.image} alt="Team member" className='rounded-full object-cover p-2 h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]'/>

  
            <p className=" text-gray-700 w-4/5  mb text-md text-center">
             {el.title}
            </p>
            <p className=" text-gray-500 w-4/5  mb-3 text-xs text-center">
          {el.role}
            </p>
         
         
   
   
   </div> })}
   {/* <div className='relative flex'>
   
   
   
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
   
   
   </div>  */}
   
   
    

    
    </div>
    </div>


   
  )
}

export default Team