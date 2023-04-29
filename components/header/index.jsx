'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {BsTelegram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {SlMagnifier} from 'react-icons/sl';
import {FaUser} from 'react-icons/fa';
import {TiShoppingCart} from 'react-icons/ti';

const Header = () => {
    const [logoHover,setLogoHover] = useState(false);

    return (
        <header className="container px-5 pt-5">
            <div>
             <div className="flex justify-start items-center">
              {/* logo */}
              <div className="flex flex-col relative w-[15%]">
                <Link href={'/'} onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)} className="flex Logo z-20 w-full h-full bg-white flex-col justify-center items-center gap-2 logo p-4 cursor-default rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)]">
                    <Image src="/img/logo.png" alt="logo" width={100} height={100}/>
                    <span className="font-bold text-gray-600">فروشگاه مرن فا</span>
                </Link>
                <div
                onMouseEnter={() => setLogoHover(true)}
                onMouseLeave={() => setLogoHover(false)} 
                className=
                {
                    logoHover
                    ?"transition-all duration-700 flex absolute bottom-0 translate-y-10 z-10 right-0 left-0 justify-around items-center p-2 gap-5  text-indigo-600 rounded-br-md rounded-bl-md"
                    :"transition-all duration-700 flex absolute bottom-0 z-10 right-0 left-0 justify-around items-center p-2 gap-5  text-indigo-600 rounded-br-md rounded-bl-md"
                }>
                  <Link href={'/'} target={'_blank'} className="transition-all duration-300 text-[1.5rem] hover:text-orange-500"><BsTelegram/></Link>
                  <Link href={'/'} target={'_blank'} className="transition-all duration-300 text-[1.7rem] hover:text-orange-500"><AiFillYoutube/></Link>
                  <Link href={'/'} target={'_blank'} className="transition-all duration-300 text-[1.7rem] hover:text-orange-500"><AiFillTwitterCircle/></Link>
                </div>
              </div> 
              {/* leftSide header */}
              <div className="flex flex-col w-[85%] pr-5 gap-10">
                {/* top */}
                <div className="flex items-center w-full justify-between">
                  <nav>
                    <ul className="flex gap-1">
                      <li><Link href={'/'} className="w-28 h-10 bg-[#ededed] text-sm font-black  rounded-md flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">صفحه اصلی</Link></li>
                      <li><Link href={'/'} className="w-28 h-10 bg-[#ededed] text-sm font-black  rounded-md flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">اپلیکیشن ها</Link></li>
                      <li><Link href={'/'} className="w-28 h-10 bg-[#ededed] text-sm font-black  rounded-md flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">کتاب ها</Link></li>
                      <li><Link href={'/'} className="w-28 h-10 bg-[#ededed] text-sm font-black  rounded-md flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">فایل های گرافیکی</Link></li>
                      <li><Link href={'/'} className="w-28 h-10 bg-[#ededed] text-sm font-black  rounded-md flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">وبلاگ</Link></li>
                    </ul>
                  </nav>
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex flex-row-reverse items-center gap-3">
                      <Link href={'/'} className="bg-gray-300 p-2 rounded-sm rotate-12  transition-all duration-500 hover:bg-orange-500 hover:text-white">
                        <BsTelephoneFill className="rotate-[-12deg]"/>
                      </Link>
                      <Link href={'/'} className="hover:text-orange-900 transition-all duration-300">0912345678</Link>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-3">
                      <Link href={'/'} className="bg-gray-300 p-2 rounded-sm rotate-12 transition-all duration-500 hover:bg-orange-500 hover:text-white">
                        <MdEmail href={'/'} className="rotate-[-12deg]"/>
                      </Link>
                      <Link href={'/'} className="hover:text-orange-900 transition-all duration-300">hossein@gmail.com</Link>
                    </div>
                  </div>
                </div>
                {/* botton */}
                <div className="flex items-center w-full justify-between pr-2">
                  <div className="flex relative justify-start w-[70%] items-center gap-5 search-box-main">
                    <input className="w-full h-full outline-none border-none placeholder:text-sm shadow-[0px_0px_3px_rgba(0,0,0,0.25)] focus:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] px-3 py-4" type="text" name="search" placeholder="جستجو بین محصولات ..."/>
                    <SlMagnifier className="scale-2 left-4 absolute  text-gray-700 hover:text-orange-700"/>
                  </div>
                  <div className="flex gap-4">
                    <Link href={'/'} className="py-3 px-4 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-all duration-700 flex items-center">
                      <FaUser className="scale-[1.5]"/>
                    </Link>
                    <Link href={'/'} className="flex hover:bg-orange-500 transition-all duration-700  gap-2 text-white bg-orange-400 rounded-md items-center p-2">
                      <div className="bg-white w-7 h-7 text-orange-400 rounded-[50%] px-1 flex justify-center items-center ">0</div>
                      <span>سبد خرید</span>
                      <div className="bg-white p-2 text-orange-400 rounded-md hover:text-orange-900 transition-all duration-700">
                        <TiShoppingCart className="scale-125"/>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
             </div>
            </div>
        </header>
    );
}

export default Header;