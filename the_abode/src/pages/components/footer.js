import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="container h-[300px] bg-yellow-200">
        <div className="flex flex-col items-center justify-center my-5">
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
          </div>
          </div>
  )

}

export default footer