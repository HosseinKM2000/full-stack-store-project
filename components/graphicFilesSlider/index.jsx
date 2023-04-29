'use client'
import { useRef } from 'react';
import ImgSrc from '../../public/img/GraphicFile/8741097.jpg';
import GraphicFile from './graphicFile';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

const GraphicFilesSlider = () => {


        const GraphicRef = useRef()

        const SliderSwitcher = (data) => {
            if(GraphicRef.current)
            {
                const width = GraphicRef.current.offsetWidth;
                GraphicRef.current.scrollTo(
                    GraphicRef.current.scrollLeft + width * data,0
                )
            }
        }

    return (
        <section className="flex relative flex-col gap-5 max-w-full overflow-x-hidden bg-[#FACC15] pt-3 pb-5 px-10 my-10">
            {/* head slide */}
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-full w-[2px] bg-gray-500"></div>
                    <h1 className="text-gray-700 font-bold text-lg">فایل های گرافیکی</h1>
                </div>
                <div className="flex">
                    <button type="button" className="py-1 px-2 border-2 border-white bg-[#6366F1] text-white transition-all duration-500 hover:bg-[#8789ef] rounded-md">دیدن همه</button>
                </div>
            </div>
            {/* products */}
            <div ref={GraphicRef} className="w-full overflow-x-scroll scroll-smooth scroll-None transition-all duration-500">
             <div className="flex gap-3 w-fit py-3">
                <GraphicFile Img={ImgSrc}/>
                <GraphicFile Img={ImgSrc}/>
                <GraphicFile Img={ImgSrc}/>
                <GraphicFile Img={ImgSrc}/>
                <GraphicFile Img={ImgSrc}/>
                <GraphicFile Img={ImgSrc}/>
             </div>
            </div>
            <button type='button' onClick={() => SliderSwitcher(1)} className='text-2xl absolute right-1  top-60 shadow-[0px_0px_5px_rgba(0,0,0,0.5)] font-extrabold rounded-r-lg py-8 px-2 bg-white w-fit hover:bg-gray-200 transition-all duration-500'><IoIosArrowForward/></button>
            <button type='button' onClick={() => SliderSwitcher(-1)} className='text-2xl absolute left-1 top-60 shadow-[0px_0px_5px_rgba(0,0,0,0.5)] font-extrabold rounded-l-lg py-8 px-2 bg-white w-fit hover:bg-gray-200 transition-all duration-500'><IoIosArrowBack/></button>
        </section>
    );
}

export default GraphicFilesSlider;