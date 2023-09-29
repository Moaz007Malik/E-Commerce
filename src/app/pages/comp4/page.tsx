"use client"

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Samsung from 'public/samsung.png';
import Adidas from 'public/adidas.png';
import Apple from 'public/apple.png';
import Xiaomi from 'public/xiaomi.png';

const Comp4 = () => {
  const images = [Samsung, Adidas, Apple, Xiaomi];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-16 pt-8 bg-blue-950">
      <div className="mb-4 text-4xl font-bold text-center text-cyan-100">Our Trusted Partners</div>
      <div className="flex flex-wrap justify-center">
        <AnimatePresence custom={index} exitBeforeEnter={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 mx-4 mb-4 lg:w-1/6"
          >
            <Image src={images[index]} alt="Partner logo"  className="rounded-full" width={500} height={500} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Comp4;
