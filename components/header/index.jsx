'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {BsTelegram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';


const Header = () => {
    const [logoHover,setLogoHover] = useState(false);

    return (
        <header className="container px-5 py-2">
            <div>
             <div className="flex justify-between items-center">
              <div className="flex flex-col relative">
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
                <h5>mern fa</h5>
             </div>
            </div>
        </header>
    );
}

export default Header;