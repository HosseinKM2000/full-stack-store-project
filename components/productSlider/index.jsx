'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ImgPro from '../../public/img/productSlider/ganj.jpg'
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import ArticleSection from "../articleSection/index";


const ProductSlider = () => {

    const carouselRef = useRef()
    const carouselSwitcher = (data) => {
        if(carouselRef.current)
        {
            const width = carouselRef.current.offsetWidth;
            carouselRef.current.scrollTo(
                carouselRef.current.scrollLeft + width * data,0
            )
        }
    }

    return (
        <section className="flex flex-col gap-5 max-w-full overflow-x-hidden bg-[#818CF8] pt-3 pb-5 px-5 my-10">
            {/* head slide */}
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-full w-[2px] bg-orange-300"></div>
                    <h1 className="text-white text-lg">اپلیکیشن ها</h1>
                </div>
                <div className="flex gap-4">
                    <div className="flex gap-2">
                        <button onClick={() => carouselSwitcher(1)} type="button" className="px-2 py-1 rounded-sm bg-white hover:bg-orange-500 transition-all duration-500 hover:text-white"><IoIosArrowForward/></button>
                        <button onClick={() => carouselSwitcher(-1)} type="button" className="px-2 py-1 rounded-sm bg-white hover:bg-orange-500 transition-all duration-500 hover:text-white"><IoIosArrowBack/></button>
                    </div>
                    <button type="button" className="py-1 px-2 border-2 border-white bg-orange-500 text-white transition-all duration-500 hover:bg-[#d95900] rounded-md">دیدن همه</button>
                </div>
            </div>
            <div ref={carouselRef} className="w-full overflow-x-scroll scroll-None sliderContainer_1 transition-all duration-500">
             <div className="flex gap-5 w-fit">
                <ArticleSection Img={ImgPro}/>
                <ArticleSection Img={ImgPro}/>
                <ArticleSection Img={ImgPro}/>
                <ArticleSection Img={ImgPro}/>
                <ArticleSection Img={ImgPro}/>
                <ArticleSection Img={ImgPro}/>
             </div>
            </div>
        </section>
    );
}

export default ProductSlider;