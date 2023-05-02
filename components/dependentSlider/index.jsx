'use client'
import ImgSrc from '../../public/img/Articles/WordPress Hackers Are Using Vulnerable Plugins to Gain Access to Sites.jpg';
import Article from './article';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import { useRef } from 'react';

const DependentSlider = ({ title }) => {

    
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
        <section className="flex flex-col gap-5 max-w-full overflow-x-hidden pt-3 pb-5 px-5 my-10">
        {/* head slide */}
        <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
                <h1 className="text-gray-500 font-bold text-lg">{title}</h1>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <button onClick={() => carouselSwitcher(1)} type="button" className="px-2 py-1 rounded-sm bg-gray-300 hover:bg-blue-500 transition-all duration-500 hover:text-white"><IoIosArrowForward/></button>
                    <button onClick={() => carouselSwitcher(-1)} type="button" className="px-2 py-1 rounded-sm bg-gray-300 hover:bg-blue-500 transition-all duration-500 hover:text-white"><IoIosArrowBack/></button>
                </div>
            </div>
        </div>
        {/* Dependentblogs */}
        <div ref={carouselRef} className="w-full overflow-x-scroll scroll-None sliderContainer_1 transition-all duration-500">
         <div className="flex gap-5 w-fit p-1">
            <Article Img={ImgSrc}/>
            <Article Img={ImgSrc}/>
            <Article Img={ImgSrc}/>
            <Article Img={ImgSrc}/>
            <Article Img={ImgSrc}/>
            <Article Img={ImgSrc}/>
         </div>
        </div>
    </section>
    );
}

export default DependentSlider;