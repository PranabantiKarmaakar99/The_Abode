import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";


const footer = () => {
  const year = new Date().getFullYear();
  const LinkTags=["Interior design in kolkata",
    "Interior décor in kolkata",
    "Home décor in kolkata",
    "Space planning in kolkata",
    "Color schemes design in kolkata",
    "Furniture design in kolkata",
    "Lighting design in kolkata",
    "Flooring design in kolkata",
    "Window treatments in kolkata",
    "wall panelling in kolkata",
    "Room layout design in kolkata",
    "Texture design in kolkata",
    "Interior Styling in kolkata",
    "Mood board design in kolkata",
    "Fabric work in kolkata",
    "Paint design in kolkata",
    "Upholstery design in kolkata",
    "Interior Budgetting in kolkata",
    "Sustainable Home design in kolkata",
    "Interior Customization in kolkata",
    "Home Renovation in kolkata",
    "Home Remodeling in kolkata",
    "3D visualization in kolkata",
    "Design Concept development in kolkata",
    "Spatial  design in kolkata",
    "Room design in kolkata",
    "Kitchen design in kolkata",
    "Bathroom design in kolkata",
    "Living room design in kolkata",
    "Dining room design in kolkata",
    "Home office design in kolkata",
    "Children's room design in kolkata",
    "Outdoor space design in kolkata",
    "Furniture arrangement in kolkata",
    "Architectural design  in kolkata",
    "Minimalist design in kolkata",
    "Scandinavian design in kolkata",
    "Modern design in kolkata",
    "Bohemian design in kolkata",
    "Traditional design in kolkata",
    "Contemporary design in kolkata",
    "Vintage design in kolkata",
    "Art and décor in kolkata",
    "Home staging in kolkata",
    "Vastu design in kolkata",
    "Small space design in kolkata",
    "Outdoor living design in kolkata",
    "Retail design in kolkata",
    "Office design in kolkata",
    "Restaurant design in kolkata"]
  return (
    <div id="footer">
      <div className="container h-full">
        <div className="flex flex-col items-center justify-center   bg-yellow-200 pb-5">
          <h2 className="my-5"> THE ABODE </h2>
          <div >
          <ul className='flex items-center justify-center list-none '>
                <li className='px-2 '>
                  <a href="https://linkedin.com" target="_blank">
                    {" "}
                    <AiOutlineLinkedin />
                  </a>
                </li>
                <li className='px-2 '>
                  <a href="https://facebbok.com" target="_blank">
                    <AiFillFacebook />
                  </a>
                </li>
                <li className='px-2 '>
                  <a href="https://instagram.com" target="_blank">
                    <AiOutlineInstagram />
                  </a>
                </li>
                </ul>
              </div>
          </div>

          <div  className='bg-gray-400'>
           <div className='grid grid-cols-3 gap-1 mx-5 py-5'>

           {LinkTags.map((el,index)=>{ return <Link href="#introduction" key={index}
           className =" text-xs text-white px-2"
           >

           <ul> <li className='list-disc'>{el}</li> </ul>



</Link>})}

          



           </div>

          </div>
          </div>
          </div>
  )

}

export default footer