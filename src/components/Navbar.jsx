import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaWallet, FaUserFriends } from "react-icons/fa"
import { ImPriceTag } from "react-icons/im"
import { useState } from "react";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false)
  const [isDelivery, setIsDelivery] = useState(true)
  
  
  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4 mx-auto">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={()=>setIsNavActive(true)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1 items-center text-[14px] gap-x-1">
          <p className={isDelivery ? "bg-black text-white rounded-full p-2" : "bg-gray-200 text-black rounded-full p-2"} onClick={()=>(setIsDelivery(true))}>Delivery</p>
          <p className={!isDelivery ? "bg-black text-white rounded-full p-2" : "bg-gray-200 text-black rounded-full p-2"} onClick={()=>(setIsDelivery(false))}>Pickup</p>
        </div>
      </div>

      {/* Search field */}
      <div className="flex bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]  items-center pl-3">
        <AiOutlineSearch size={25} />
        <input type="text" className="bg-gray-200 pl-2 w-full p-2 rounded-full focus:outline-none" placeholder="Search foods..." />
      </div>

      {/* Cart button */}
      <div>
        <button className="rounded-full bg-black text-white hidden md:flex items-center py-2"><BsFillCartFill size={20} className="mr-2" />Cart</button>
      </div>

      {/* Menu background overlay */}
      {isNavActive && <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>}

      {/* Side Drawer menu */}
      {/* To apply transitions we will use ternary operator in className to define two classes. One class will be the how we want the menu to be displayed and the second class will be the same except it will be pushed off the screen. Doing this instead of conditionally rendering elements allows us to use transition effects */}
      <div className={isNavActive ? "bg-white fixed top-0 left-0 h-screen w-[300px] duration-300 z-10" : "bg-white fixed top-0 left-[-100%] h-screen w-[300px] duration-300 z-10"}>
        <div className="flex items-center justify-between p-4 ">
          <p className="text-2xl">Best <span className="font-bold">Eats</span></p>
          <RxCross1 size={30} className="cursor-pointer" onClick={()=>(setIsNavActive(false))} />
        </div>
        <nav className="p-4 pt-7 pr-0">
          <ul className="text-xl flex flex-col gap-y-8">
            <li className="flex items-center gap-x-4 cursor-pointer"><TbTruckDelivery size={25} /> Orders</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><MdFavorite size={25} /> Favorites</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><FaWallet size={25} /> Wallet</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><MdHelp size={25} /> Help</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><ImPriceTag size={25} /> Promotions</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><BsFillSaveFill size={25} /> Best Ones</li>
            <li className="flex items-center gap-x-4 cursor-pointer"><FaUserFriends size={25} /> Invite Friends</li>
          </ul>
        </nav>
      </div>




    </div>
  );
}

