'use client'
import Link from "next/link";
import Image from "next/image";
import {RxMagnifyingGlass} from 'react-icons/rx';
import {RiBookmarkLine} from 'react-icons/ri';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {TbBrush} from 'react-icons/tb';
import {IoMdResize} from 'react-icons/io';
import {AiFillFile} from 'react-icons/ai';

const GraphicFile = ({Img}) => {
    return (
        <article className="flex flex-col slider_item transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] w-[14rem] bg-white rounded-lg px-3 py-4 overflow-hidden hover:translate-y-[-0.2rem]">
         <Link href={'/'}><Image src={Img} alt="product" className="rounded-md w-full h-36 transition-all duration-300 hover:brightness-110"/></Link>
          <Link href={'/'} className="font-bold my-5 hover:text-gray-400 transition-all duration-500 line-clamp-2">صفحه ساز المنتور ورد پرس بهتر از کامپوزر</Link>
          <div className="flex flex-col w-full text-[#48509b]">
            <div className="w-full flex justify-between text-sm">
                <div className="flex gap-1">
                    <TbBrush/>
                    <span>فرمت</span>
                </div>
                <div>PSD</div>
            </div>
            <div className="w-full flex justify-between text-sm">
                <div className="flex gap-1">
                    <IoMdResize/>
                    <span>ابعاد</span>
                </div>
                <div className="flex gap-1">
                    <span>720X1080</span>
                    <span>پیکسل</span>
                </div>
            </div>
            <div className="w-full flex justify-between text-sm">
                <div className="flex gap-1">
                    <AiFillFile/>
                    <span>حجم</span>
                </div>
                <div className="w-full flex justify-between">
                    <span>10</span>
                    <span>مگ</span>
                </div>
            </div>
         </div>
         <div className="flex flex-wrap gap-2 text-sm mb-2 mt-5">
            <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 bg-gray-200 my-1 p-1 rounded-sm">فتوشاپ</Link>
            <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 bg-gray-200 my-1 p-1 rounded-sm">ایلوستریتور</Link>
          </div>
         <div className="flex w-full flex-col items-end gap-3">
            <div className="flex w-full justify-between">
             <div className="flex gap-1">
              <Link href={'/'} className="bg-gray-300 rounded-md p-2 transition-all duration-500 hover:bg-gray-400 hover:text-white">
                <RxMagnifyingGlass/>
              </Link>
              <Link href={'/'} className="bg-gray-300 rounded-md p-2 transition-all duration-500 hover:bg-gray-400 hover:text-white">
                <RiBookmarkLine/>
              </Link>
             </div>
             <Link href={'/'} className="bg-[#5c6bff] rounded-md p-2  transition-all duration-500 text-white hover:bg-[#a2a3fd]">
                <HiOutlineShoppingCart/>
             </Link>
            </div>
            <Link href={'/'} className="flex w-fit gap-1 items-center bg-gray-400 text-white rounded-md transition-all duration-500 hover:bg-gray-300 py-1 px-3">
                <span>2,000</span>
                <span>تومان</span>
            </Link>
         </div>
        </article>
    );
}

export default GraphicFile;