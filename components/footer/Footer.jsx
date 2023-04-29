'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/img/logo.png'; 
import credit_1 from '../../public/img/Footer/1.png';
import credit_2 from '../../public/img/Footer/2.png';
import {IoIosArrowBack} from 'react-icons/io';
import {TbArrowBigUpFilled} from 'react-icons/tb';

const Footer = () => {

    const goTopCtrl = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
             });
          }; 

    return (
        <footer className="flex flex-col px-10 mt-[7rem] gap-16 pb-5">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2 items-center w-[30%]">
                    <Image src={logo} alt={"logo"} className="w-[5rem]"/>
                    <p className="text-center text-[0.9rem]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله</p>
                </div>
                <div className="flex gap-10">
                    <div>
                        <h2  className="font-bold text-lg mb-3">دسترسی سریع</h2>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>درباره ما</li></Link>
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>وبلاگ</li></Link>
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>حریم خصوصی</li></Link>
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>تماس با ما</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">راهنمای خرید</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>سوالات متداول</li></Link>  
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>چگونه خرید کنم؟</li></Link>
                            <Link href={'/'} className="flex transition-all duration-500 hover:text-blue-700"><IoIosArrowBack/><li>قوانین استفاده از محصولات</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row gap-3 ">
                    <Image src={credit_1} alt={'img'} className="h-[7rem] w-[6rem]"/>
                    <Image src={credit_2} alt={'img'} className="h-[7rem] w-[6rem]"/>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <span className="text-sm font-bold">تمامی حقوق مادی و معنوی این وب سایت مطعلق به مرن فا می باشد</span>
                <button type="button" className="p-2 rounded-md transition-all duration-500  hover:bg-yellow-400  bg-yellow-500 text-gray-900" onClick={()=> goTopCtrl()}><TbArrowBigUpFilled/></button>
            </div>
        </footer>
    );
}

export default Footer;