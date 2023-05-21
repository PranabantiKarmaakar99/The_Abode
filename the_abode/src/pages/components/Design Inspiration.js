import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import IMG2 from "./images_home/image1.png";
import IMG3 from "./images_home/image2.png";
import IMG4 from "./images_home/image3.png";
import IMG5 from "./images_home/image4.png";
import IMG6 from "./images_home/image5.png";
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
      slidesToShow: 1,
      slidesToScroll: 1,
    };


    const IMAGE = [
      { key:1,image: IMG2, title: "Mr. Anindya Dey", content: "The team at the ABODE were extremely professional and attentive to our needs and preferences. They took the time to listen to my ideas and provide suggestions that would enhance the overall look and feel of my home. They also provided me with detailed 3D renderings of the design, which helped me to visualize the final outcome.." },
      { key:2,image: IMG3, title: "Ms Riteema Roy and Family", content: "The execution of the project was flawless. The team worked tirelessly to ensure that every detail was perfect, from the color schemes and furniture selection to the lighting and decor. They were also very respectful of my time and completed the project within the agreed timeline." },
      { key:3,image: IMG4, title: "Abhisekh and Priyanka", content: "We are absolutely thrilled with the end result. The interior of my flat is stunning, and I receive compliments on it from everyone who visits. I would highly recommend this interior designing company to anyone looking for a professional and reliable team to design and execute their home interiors. Thank you for making my dream home a reality!" },
      { key:4,image: IMG5, title: "The RoyChowdhury's", content: "We recently had the pleasure of working with The ABODE in Kolkata to design and execute the interior of my 3BHK flat. I can honestly say that the experience was exceptional from start to finish." },
      { key:5,image: IMG6, title: " Ms. Ananya Boral", content: "The team was incredibly talented and dedicated, and they truly went above and beyond to ensure that every detail was perfect. From the furniture and decor to the lighting and color schemes, they thought of everything and created a space that is both beautiful and functional. I would highly recommend this company to anyone looking for exceptional interior design services." },
      { key:6,image: IMG2, title: "Mr Abhinandan Kar", content: "The finished product is absolutely stunning, and we would highly recommend this company to anyone looking for top-notch interior design services." },
      { key:7,image: IMG3, title: "Mr Anubhav Mishra", content: "From the furniture and decor to the lighting and color schemes, they thought of everything and created a space that is both beautiful and functional." },
    ];
    return (
      <div className="h-max relative flex flex-col mt-20 ">
      <div className="h-4/5 ">
        <div className=" mt-1 mb-4">
          <h2 className="flex items-center justify-center text-lg font-semibold">
            Design Inspiration
          </h2>
        </div>

        <div>
       <Slider
            className=" bg-yellow-400 "
            ref={(c) => (this.slider = c)}
            {...settings}
        >
          {IMAGE.map((el,index) => (
         <div key={index} className="w-4/5 flex items-center justify-center ">
              <Image
                src={el.image}
                alt="image"
                className=" flex items-center justify-center "
              />
            </div> ))}
           

          </Slider>
        </div>
        <div className="flex items-center justify-center absolute z-10 top-48">
          <button
            className="button mt-5 flex p-3 mr-auto ml-2 rounded-full opacity-50"
            onClick={this.previous}
          >
            <IoIosArrowBack className="text-white font-bold text-2xl" />
          </button>
          <button
            className="button mt-5   p-3 flex ml-72 rounded-full opacity-50"
            onClick={this.next}
          >
             <IoIosArrowForward className="text-white font-bold text-2xl"/>
          </button>
        </div>

        </div>

       
      </div>
    );
  }
}
