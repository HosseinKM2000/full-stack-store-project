'use client'
import { useState , useEffect } from "react";
import axios from "axios";
import BoxBanner from "./box";
import Image from "next/image";

const AllMidBanners = () => {
    const [banners,setBanners] = useState([]);
    const [middleBannersNum,setMiddleBannersNum] = useState(1);
    const [pageNumber,setPageNumber] = useState(1);
    const [numberOfBtn,setNumberOfBtn] = useState([1]);

    useEffect(()=>{
        axios.get(`https://shoping-file.iran.liara.run/api/middle-banners?pn=${pageNumber}`)
        .then(res => {
            setBanners(res.data.GoalMidBans)
            setMiddleBannersNum(res.data.AllMidBansNum)
            setNumberOfBtn(Array.from(Array(res.data.AllMidBansNum).keys()))
        })
        .catch(err => console.error('this is error in get all banners =>',err))
    },[pageNumber])


    return (
        <section className="w-full flex flex-col items-start">
          <h1 className="text-xl text-blue-500">بنر های تبلیغاتی</h1>
          <div className="w-full flex flex-col items-center gap-5  py-3">
            {
                banners.length < 1
                ? <div className="flex justify-center items-center w-full min-h-screen">
                    <Image alt="loading" width={120} height={120} src={'/img/loading.svg'}/>
                 </div>
                : banners.map((banner,index) => (
                    <BoxBanner data={banner} key={index}/>
                ))
            }
          </div>
        </section>
    );
}

export default AllMidBanners;