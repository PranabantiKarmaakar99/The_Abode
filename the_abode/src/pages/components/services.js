import React from 'react'

const services = () => {
  return (
    <div className=' h-max mt-20 '>
      <div className=" my-10">
          <h2 className="flex items-center justify-center text-lg font-semibold md:text-xl">
            What We Offer
          </h2>
        </div>
        <div className='h-full flex items-center justify-center'>
    <div className=' w-4/5 grid grid-cols-2 md:w-1/2 shadow-md text-sm '>
    <div  className='h-[360px]  bg-gray-100 text-left gap-2   '>
    
      <ul className='my-10 pl-10 pr-5 list-disc gap-2 md:text-base'>
      <li className='font-semibold mb-5  text-base list-none md:text-lg'>  Our Services</li>
      <li>Modular Kitchens</li>
      <li>Modular Wardrobes</li>
      <li>Lightings</li>
      <li> Flooring</li>
      <li> Electric Floors</li>
      <li> Civil Works</li>
      <li> False Ceiling</li>
      <li> Wall Deisgn and Painting</li>



      </ul>
      
    </div>
    <div  className='h-[360px]  bg-gray-100 text-left  '>
    
    <ul className=' my-10  pl-10 pr-5  list-disc gap-2 md:text-base'>
    <li className='font-semibold mb-5 text-base list-none md:text-lg'>  Our Warranty</li>
    <li>Flat 10 years Warranty</li>
    <li>Upto 1year on-site service warranty</li>
   



    </ul>
    
  </div>
  {/* <div  className='h-[360px] shadow-lg bg-gray-100 text-left  '>
    
    <ul className='my-14  pl-10 pr-5   list-disc'>
    <li className='font-semibold my-2 text-lg list-none'> Price Benifits</li>
    <li className='my-3'>Price Match Guaruntee-Price match to a valid quote in comparison with a branded player and for exact scope</li>
    <li className='my-3'> Flexible Payment Options</li>
    <li className='my-3'>No Hidden Cost-Transparent Quoting, no last minute additions</li>
    



    </ul>
    
  </div> */}


    </div>
    <div >



    </div>



    </div>




    </div>
  )
}

export default services