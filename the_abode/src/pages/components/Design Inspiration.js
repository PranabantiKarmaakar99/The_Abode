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
    return (
      <div className="h-max relative flex flex-col ">
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
            <div key={1} className="w-4/5 flex items-center justify-center ">
              <Image
                src={IMG2}
                alt="image"
                className=" flex items-center justify-center "
              />
            </div>
            <div key={2} className="w-4/5 flex items-center justify-center ">
              <Image
                src={IMG3}
                alt="image"
                className=" flex items-center justify-center"
              />
            </div>
            <div key={3} className="w-4/5 flex items-center justify-center ">
              <Image
                src={IMG4}
                alt="image"
                className=" flex items-center justify-center"
              />
            </div>
            <div key={4} className="w-4/5 flex items-center justify-center ">
              <h3>4</h3>
            </div>
            <div key={5}>
              <h3>5</h3>
            </div>
            <div key={6}>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
        <div className="flex items-center justify-center absolute z-10 top-48">
          <button
            className="button mt-5 bg-yellow-100 flex p-3 mr-auto ml-2 rounded-full opacity-50"
            onClick={this.previous}
          >
            Previous
          </button>
          <button
            className="button mt-5  bg-yellow-100 p-3 flex ml-52 rounded-full opacity-50"
            onClick={this.next}
          >
            Next
          </button>
        </div>

        </div>

       
      </div>
    );
  }
}
