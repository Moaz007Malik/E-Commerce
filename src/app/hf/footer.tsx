"use client"

import { Button } from '@/components/ui/ui/button'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import google from 'public/google.png'
import linkedin from 'public/linkedin.png'
import twitter from 'public/twitter.webp'
import youtube from 'public/youtube.png'
import facebook from 'public/facebook.webp'

const Footer = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div className="bg-gradient-to-br from-blue-950 from-50% to-purple-800"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center bg-gradient-to-br from-blue-950 from-50% to-purple-800 font-display tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <div>
      <div className="px-16 bg-gradient-to-br from-blue-950 from-50% to-purple-800">
        <div className=" text-white py-12">
            <h2 className="flex justify-center text-4xl font-bold">Best Look</h2>
            <p className="flex justify-center text-center mx-18 sm:mx-18 md:mx-36 lg:mx-64 tracking-wide leading-7">Discover Best Look, your ultimate online destination for all your daily drive essentials. With a curated selection of top-notch products, we offer the best quality items that elevate your experience. Shop now and experience the perfect blend of style, functionality, and durability.</p>
            <div className="flex justify-center pt-8 gap-x-8">
            <Button className="rounded-full px-0 bg-transparent hover:bg-transparent"><Image src={facebook} alt="facebook" width={40}/></Button>
            <Button className="rounded-full px-0 bg-transparent hover:bg-transparent"><Image src={twitter} alt="twitter" width={40}/></Button>
            <Button className="rounded-full px-0 bg-transparent hover:bg-transparent"><Image src={google} alt="google" width={40}/></Button>
            <Button className="rounded-full px-0 bg-transparent hover:bg-transparent"><Image src={youtube} alt="youtube" width={40}/></Button>
            <Button className="rounded-full px-0 bg-transparent hover:bg-transparent"><Image src={linkedin} alt="linkedin" width={40}/></Button>
            </div>
        </div>
      </div>
      <div className="px-2 sm:px-16 text-lg bg-slate-950 py-4">
        <div className=" lg:flex justify-between">
          <span className="flex text-white">Copyright &copy; 2023 Best Look</span>
          <span className="flex text-white">Design By: <p className="font-bold">Moaz Malik</p></span>
          <span className="flex text-white">Code By: <p className="font-bold">Moaz007Malik on Github</p></span>
          </div>
        </div>
    </div>
      </motion.h1>
    </motion.div>
  )
}

export default Footer