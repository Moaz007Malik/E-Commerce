"use client"

import React from 'react'
import logo from '/public/logo.png' 
import Image from 'next/image'
import { Input } from '@/components/ui/ui/input'
import { ShoppingCartIcon, ChevronDown, } from "lucide-react";
import { DropdownMenu, DropdownMenuSub, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/ui/dropdown-menu"
import { Button } from '@/components/ui/ui/button'

const Header = () => {
  return (
    <div className="fixed z-50 px-16 bg-gradient-to-tr from-blue-950 from-50% to-purple-800 text-white w-full">
        <div className="flex items-center justify-between">
          <Image src={logo} width={180} height={120} className="rounded-full App-logo" alt="logo" />
          <div>
            <div className="flex gap-x-8">
              <div className="flex space-x-1 ">
                <Input
                    type="text"
                    className="block px-4 py-2 text-black bg-white border rounded-full w-96 focus:outline-none"
                    placeholder="Search..."
                />
                <Button className="px-4 text-white bg-purple-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </Button>
                </div>
                <ShoppingCartIcon size={40}/>
            </div>
        </div>
        </div>
        <div className="flex pt-4 gap-x-8">
          <div className="font-bold text-cyan-100">Home</div>
          <div className="z-10 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-bold text-cyan-100 focus:outline-none">Apparel <ChevronDown size={20}/></DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-slate-700 ">
              <DropdownMenuLabel>Make Your Attire Perfect</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Men</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
                <DropdownMenuItem>
                  <span>T-Shirts & Tanks</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Pants</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Jeans</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Coats</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shalwar Kameez</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shirts & Polo</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Innerwear</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shoes</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
              <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Women</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
                <DropdownMenuItem>
                  <span>Skirts</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Unstitched Fabrics</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Pants</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Jeans</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shrugs</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shawls</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Abayas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Dresses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Abayas</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Jackets</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shoes</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
              <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Kids</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
                <DropdownMenuItem>
                  <span>T-shirts</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Jeans</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Pants</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Shoes</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="z-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-bold text-cyan-100 focus:outline-none">Electronics<ChevronDown size={20}/></DropdownMenuTrigger>
              <DropdownMenuContent className="flex gap-x-12 bg-slate-700">
                <div className="text-white">
              <DropdownMenuLabel>Computers Accessories</DropdownMenuLabel>
                <DropdownMenuSeparator />
              <DropdownMenuItem>Mouse</DropdownMenuItem>
              <DropdownMenuItem>Keyboard</DropdownMenuItem>
              <DropdownMenuItem>PSU</DropdownMenuItem>
              <DropdownMenuItem>Graphics Card</DropdownMenuItem>
              <DropdownMenuItem>Processors</DropdownMenuItem>
              <DropdownMenuItem>Motherboards</DropdownMenuItem>
              <DropdownMenuItem>RAM</DropdownMenuItem>
              <DropdownMenuItem>SSD</DropdownMenuItem>
              <DropdownMenuItem>HDD</DropdownMenuItem>
              <DropdownMenuItem>Casing</DropdownMenuItem>
              </div>
                <div className="text-white">
              <DropdownMenuLabel>Smartphones</DropdownMenuLabel>
                <DropdownMenuSeparator />
              <DropdownMenuItem>Samsung</DropdownMenuItem>
              <DropdownMenuItem>Apple</DropdownMenuItem>
              <DropdownMenuItem>Redmi</DropdownMenuItem>
              <DropdownMenuItem>Oppo</DropdownMenuItem>
              <DropdownMenuItem>Vivo</DropdownMenuItem>
              <DropdownMenuItem>Nokia</DropdownMenuItem>
              <DropdownMenuItem>Oneplus</DropdownMenuItem>
              <DropdownMenuItem>HTC</DropdownMenuItem>
              <DropdownMenuItem>Infinix</DropdownMenuItem>
              <DropdownMenuItem>Tecno</DropdownMenuItem>
              <DropdownMenuItem>Motorola</DropdownMenuItem>
              <DropdownMenuItem>Lenovo</DropdownMenuItem>
              </div>
              <div className="text-white">
              <DropdownMenuLabel>Laptops</DropdownMenuLabel>
                <DropdownMenuSeparator />
              <DropdownMenuItem>HP</DropdownMenuItem>
              <DropdownMenuItem>Dell</DropdownMenuItem>
              <DropdownMenuItem>MSI</DropdownMenuItem>
              <DropdownMenuItem>Lenovo</DropdownMenuItem>
              <DropdownMenuItem>Asus</DropdownMenuItem>
              <DropdownMenuItem>Mircrosoft</DropdownMenuItem>
              <DropdownMenuItem>Samsung</DropdownMenuItem>
              <DropdownMenuItem>Apple</DropdownMenuItem>
              <DropdownMenuItem>Toshiba</DropdownMenuItem>
              <DropdownMenuItem>Alienware</DropdownMenuItem>
              <DropdownMenuItem>Razer</DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="z-10 ">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-bold text-cyan-100 focus:outline-none">Books<ChevronDown size={20}/></DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-slate-700">
              <DropdownMenuLabel>Books To Read</DropdownMenuLabel>
                <DropdownMenuSeparator />
              <DropdownMenuItem>E-Books</DropdownMenuItem>
              <DropdownMenuItem>Fiction</DropdownMenuItem>
              <DropdownMenuItem>Historical</DropdownMenuItem>
              <DropdownMenuItem>Novel</DropdownMenuItem>
              <DropdownMenuItem>Childrens literature</DropdownMenuItem>
              <DropdownMenuItem>Poetry</DropdownMenuItem>
              <DropdownMenuItem>Comics</DropdownMenuItem>
              <DropdownMenuItem>Adventurous</DropdownMenuItem>
              <DropdownMenuItem>Home Tips</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="z-10">
          <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center font-bold text-cyan-100 focus:outline-none"> Fashion <ChevronDown size={20}/> </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-white bg-slate-700">
        <DropdownMenuGroup>
        <DropdownMenuLabel>Get Yourself Some Glamour</DropdownMenuLabel>
         <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Men</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
                <DropdownMenuItem>
                  <span>Watches</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Wallet</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Belts</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Keychains</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Hats & Caps</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Perfumes</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sunglasses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Ties & Bows</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Innerwear</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Women</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
              <DropdownMenuItem>
                  <span>Watches</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Bags</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Belts</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Jackets & Coats</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Perfumes</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Hoodies</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Hats & Caps</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sunglasses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Innerwear</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Kids</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="text-white bg-slate-700">
                <DropdownMenuItem>
                  <span>Watches</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sunglasses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Toys</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Hats & Caps</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
          <div className="z-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-bold text-cyan-100 focus:outline-none">Exclusive Deals <ChevronDown size={20}/></DropdownMenuTrigger>
              <DropdownMenuContent className="text-white bg-slate-700">
              <DropdownMenuLabel>On Sale</DropdownMenuLabel>
                <DropdownMenuSeparator />
              <DropdownMenuItem>60% OFF!</DropdownMenuItem>
              <DropdownMenuItem>50% OFF!</DropdownMenuItem>
              <DropdownMenuItem>40% OFF!</DropdownMenuItem>
              <DropdownMenuItem>30% OFF!</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
    </div>
  )
}

export default Header