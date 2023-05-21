import React from 'react'

const Payment_Process = () => {

    const IMAGE = [
        { key:1, title:"A", content: "Meet the Designer" },
        { key:2, title:"B", content: "(5% Payment) Renovation Plan" },
        { key:3, title:"C", content: "(50% Payment) Execution Begins" },
        { key:4, title:"D", content: "(100% Payment) Final Installations" },
        { key:5, title:"E", content: "Move in and Enjoy" },
        { key:6, title:"F", content: "Also enjoy After sales service" },
        
      ];
  return (
    
       <div className="container h-max flex flex-col items-center justify-center mt-20">
     <div className="mb-5 w-full">
          
          <div className="flex items-center justify-center mt-5 px-2 py-5 font-semibold text-lg  ">
           How it Works
  </div>
  
  
          </div>


    <div className="w-3/4 grid grid-cols-3 gap-5 text-black text-xs">
   { IMAGE.map((el,index) => (
    <div className='flex flex-col items-center  w-[100px]' key={index}>
   
    <div className="bg-yellow-100 border-gray-500 border rounded-full shadow flex items-center justify-center w-[50px] h-[50px]" >
        <div className="text-center  flex flex-col items-center ">
       <div className="font-bold text-lg text-gray-500" > {el.title}</div>  
    
      
        
        
        </div>
    </div>
    <div className="w-[75px] text-center py-4">{el.content}</div> 

    </div>))}


   
    

    








   

    
    
    </div>

    <div className=" mt-2 flex items-center w-full justify-center">
              <button className=" w-2/3 rounded-full bg-red-400 px-5 py-5 text-white align-middle text-sm shadow-md">
                BOOK FREE CONSULTATION
              </button>
            </div>





    </div>
  )
}

export default Payment_Process