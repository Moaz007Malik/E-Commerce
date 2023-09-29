"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider1 from 'public/Slider1.png'
import Slider2 from 'public/Slider2.png'
import Slider3 from 'public/Slider3.png'
import Slider4 from 'public/Slider4.png'
import Slider5 from 'public/Slider5.png'
import Slider6 from 'public/Slider6.png'
import Slider7 from 'public/Slider7.png'

const Comp1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
  ];

  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-blue-950 pt-32 sm:pt-32 md:pt-32 lg:pt-28 pb-10 px-0 sm:px-16 md:px-16 lg:px-16">
    <div id="default-carousel" className="relative w-full">
      <div className="relative h-32 overflow-hidden rounded-lg h-36 lg:h-96 md:h-72 sm:h-48">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out  absolute top-0 left-0 w-full h-full transform ${
              index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
            data-carousel-item
          >
            <Image src={imageUrl} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div className="absolute z-30  flex space-x-3 -translate-x-1/2 bottom-1 md:bottom-3 lg:bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-1 h-1 md:w-3 lg:w-3 lg:h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-1 md:px-3 lg:px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => handleClick((activeIndex - 1 + images.length) % images.length)}
      >
        <span className="inline-flex items-center justify-center w-3 h-3 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="h-2 w-2 md:h-3 md:w-3 lg:w-5 lg:h-5 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 md:px-3 lg:px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleClick((activeIndex + 1) % images.length)}
      >
        <span className="inline-flex items-center justify-center w-3 h-3 md:w-5 md:h-5 lg:w-8 lg:h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="h-2 w-2 md:h-3 md:w-3 lg:w-5 lg:h-5 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
    <div>
      <p className="font-bold text-base justify-center text-white flex">
        Note:
      </p>
      <p className="font-normal text-sm text-white flex justify-center">
        The prices listed are subject to change based on fluctuations in currency. For more information, please contact us.
        </p>
    </div>
    </div>
  );
};

export default Comp1;