import Image from 'next/image'
import React from 'react'
import SaleBanner from 'public/SaleBanner.png'
import Link from 'next/link'
import { Button } from '@/components/ui/ui/button'

const Comp2 = () => {
  return (
    <div className="bg-blue-950 px-16">
      <div>
        <Image src={SaleBanner} alt="SaleBanner" className="rounded-full hidden sm:flex md:flex lg:flex relative"/>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid grid-cols-2 gap-4 md:flex justify-center lg:flex gap-x-4 justify-center pt-8 ">
        <div>
        <Button className="px-8 md:px-16 lg:px-20 font-bold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-700 to-purple-700 hover:bg-gradient-to-l hover:from-purple-800 hover:to-indigo-800">Apparel</Button>
        </div>
        <div>
        <Button className="px-8 md:px-16 lg:px-20 font-bold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-700 to-purple-700 hover:bg-gradient-to-l hover:from-purple-800 hover:to-indigo-800">Electronics</Button>
        </div>
        <div>
        <Button className="px-8 md:px-16 lg:px-20 font-bold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-700 to-purple-700 hover:bg-gradient-to-l hover:from-purple-800 hover:to-indigo-800">Books</Button>
        </div>
        <div>
        <Button className="px-8 md:px-16 lg:px-20 font-bold text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-700 to-purple-700 hover:bg-gradient-to-l hover:from-purple-800 hover:to-indigo-800">Fashion</Button>
        </div>
      </div>
    </div>
  )
}

export default Comp2