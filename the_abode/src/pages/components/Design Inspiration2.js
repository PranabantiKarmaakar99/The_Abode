import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import IMG1 from "../../../public/DesignInspirations/1.png";
import IMG2 from "../../../public/DesignInspirations/2.png";
import IMG3 from "../../../public/DesignInspirations/3.png";
import IMG4 from "../../../public/DesignInspirations/4.png";
import IMG5 from "../../../public/DesignInspirations/5.png";
import IMG6 from "../../../public/DesignInspirations/6.png";
import IMG7 from "../../../public/DesignInspirations/7.png";
import IMG8 from "../../../public/DesignInspirations/8.png";
import IMG9 from "../../../public/DesignInspirations/9.png";
import IMG10 from "../../../public/DesignInspirations/10.png";
import IMG11 from "../../../public/DesignInspirations/11.png";

// import IMG2 from "./images_home/image1.png";
// import IMG3 from "./images_home/image2.png";
// import IMG4 from "./images_home/image3.png";
// import IMG5 from "./images_home/image4.png";
// import IMG6 from "./images_home/image5.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward} from "react-icons/io";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow:3 ,
      slidesToScroll: 1,
    };


    const IMAGE = [
      IMG1,
      IMG2,
      IMG3,
      IMG4,
      IMG5,
      IMG6,
      IMG7,
      IMG8,
      IMG9,
      IMG10,
      IMG11,
    
    ];
    return (
      <div className="h-max relative flex flex-col mt-20 ">
      <div className="h-4/5 ">
        <div className=" mt-1 mb-4">
          <h2 className="flex items-center justify-center text-xl mb-10 mt-14 font-semibold">
            Design Inspiration
          </h2>
        </div>

        <div className="flex items-center justify-center">
       <Slider
            className="w-4/5 flex items-center justify-center "
            ref={(c) => (this.slider = c)}
            {...settings}
        >
          {IMAGE.map((el,index) => (
            <div className="w-full flex items-center justify-center" key={index}>
         <div  className="w-full flex items-center justify-center ">
              <Image
                src={el}
                alt="image"
                className=" flex items-center justify-center w-[300px] rounded-md "
              />
            </div>
            
            </div> ))}
           

          </Slider>
        </div>
        <div className="flex justify-center items-center ">
        <div className="flex items-center justify-center  ">
          <button
            className="button mt-5 flex p-1  rounded-full opacity-50"
            onClick={this.previous}
          >
            <IoIosArrowBack className="text-gray-500 font-bold text-2xl " />
          </button>
          <button
            className="button mt-5   p-1 flex rounded-full opacity-50 "
            onClick={this.next}
          >
             <IoIosArrowForward className="text-gray-500 font-bold text-2xl"/>
          </button>
        </div>

        </div>


        </div>

       
      </div>
    );
  }
}
