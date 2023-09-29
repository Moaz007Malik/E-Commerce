import React from 'react';
import Image from 'next/image';
import TShirts from 'public/T-Shirts-Cat.png';
import Pants from 'public/Pants-Cat.png';
import Coats from 'public/Coats-Cat.png';
import Jeans from 'public/Jeans-Cat.png';
import Shoes from 'public/Shoes-Cat.png';
import Mouse from 'public/Mouse-Cat.png';
import Keyboard from 'public/Keyboard-Cat.png';
import RAM from 'public/Ram-Cat.png';
import Drives from 'public/Drives-Cat.png';
import SmartPhones from 'public/Smart-Phones-Cat.png';
import Laptops from 'public/Laptop-Cat.png';
import Books from 'public/Books-Cat.png';
import Games from 'public/Games-Cat.png';
import Watches from 'public/Watches-Cat.png';

const Comp3 = () => {
  return (
    <div className="bg-blue-950 px-16 pt-8">
      <div className="text-cyan-100 text-4xl font-bold text-center mb-4">
        Categories
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 text-white gap-4">
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={TShirts} alt="TShirts" width={110} />
            <span className="mt-2">T-Shirts</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Pants} alt="Pants" width={100} />
            <span className="mt-2">Pants</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Coats} alt="Coats" width={100} />
            <span className="mt-2">Coats</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={Jeans} alt="Jeans" width={100} />
            <span className="mt-2">Jeans</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Shoes} alt="Shoes" width={160} />
            <span className="mt-2">Shoes</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={Mouse} alt="Mouse" width={110} />
            <span className="mt-2">Mouse</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={Keyboard} alt="Keyboard" width={110} />
            <span className="mt-2">Keyboard</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={RAM} alt="RAM" width={140} />
            <span className="mt-2">RAM</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Drives} alt="Drives" width={140} />
            <span className="mt-2">Drives</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={SmartPhones} alt="SmartPhones" width={110} />
            <span className="mt-2">Smart Phones</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Laptops} alt="Laptops" width={140} />
            <span className="mt-2">Laptops</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Books} alt="Books" width={110} />
            <span className="mt-2">Books</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700">
          <div className="flex flex-col items-center">
            <Image src={Games} alt="Games" width={110} />
            <span className="mt-2">Games</span>
          </div>
        </div>
        <div className="border-double border-4 border-cyan-500 hover:border-cyan-700 hidden sm:block">
          <div className="flex flex-col items-center">
            <Image src={Watches} alt="Watches" width={100} />
            <span className="mt-2">Watches</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
