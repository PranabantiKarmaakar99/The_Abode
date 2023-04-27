import Link from "next/link";

import Image from "next/image";
import IMG1 from "./images_home/image9.png";

const Home = () => {
  return (
    <div id="introduction">
      <div className="container h-screen bg-pink-300">
        <div className=" h-2/3 bg-green-400 relative" >
        
          <Image
            className="h-full object-cover "
            src={IMG1}
            alt="background_image"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent "></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <p className="text-xl text-white w-4/5  mt-7 text-center font-semibold" >We are your <span className="text-red-500">interior design partner</span> who helps to turn your <span className="text-red-500">idea into reality.</span></p>
            <div className='mb-4 mt-auto flex items-center w-full justify-center'><button className = " w-4/5 rounded-full bg-yellow-400 px-5 py-3 text-white align-middle text-xs" >GET FREE CONSULTATION</button></div>
          </div>
        </div>

        {/* why abode  */}
        <div className=" h-1/3 "> 
        
        <div className=" h-2/3 w-4/5 bg-gray-400 items-center justify-center"> </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Home;
