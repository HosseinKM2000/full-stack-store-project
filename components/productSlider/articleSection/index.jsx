import Link from "next/link";
import Image from "next/image";
import {RxMagnifyingGlass} from 'react-icons/rx';
import {RiBookmarkLine} from 'react-icons/ri';
import {HiOutlineShoppingCart} from 'react-icons/hi';

const ArticleSection = ({Img}) => {

    return (
        <article className="flex flex-col slider_item transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] w-[14rem] bg-white rounded-lg px-3 py-4 overflow-hidden">
        <Link href={'/'}><Image src={Img} alt="product" className="rounded-md w-full h-36 transition-all duration-300 hover:brightness-110"/></Link>
        <div className="flex flex-col my-8 gap-3">
          <Link href={'/'} className="font-bold hover:text-gray-400 transition-all duration-500 line-clamp-2">کتاب گنج-نوشته جلال آل احمد</Link>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 my-1 bg-gray-200 p-1 rounded-sm">رمان</Link>
            <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 my-1 bg-gray-200 p-1 rounded-sm">داستانی</Link>
            <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 my-1 bg-gray-200 p-1 rounded-sm">آل احمد</Link>
          </div>
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
             <Link href={'/'} className="bg-orange-500 rounded-md p-2  transition-all duration-500 text-white hover:bg-orange-600">
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

export default ArticleSection;