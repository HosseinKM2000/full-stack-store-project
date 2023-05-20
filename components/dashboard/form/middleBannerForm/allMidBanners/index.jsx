'use client'
import { useState , useEffect } from "react";
import axios from "axios";
import BoxBanner from "./box";
import Image from "next/image";

const AllMidBanners = ({setCtrlId}) => {
    const [banners,setBanners] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);
    const [numberOfBtn,setNumberOfBtn] = useState([1]);
    const numSync = 10
    const goTopCtrl = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
             });
          }; 

    useEffect(()=>{
        axios.get(`https://shoping-file.iran.liara.run/api/middle-banners?pn=${pageNumber}&num=${numSync}`)
        .then(res => {
            setBanners(res.data.GoalMidBans)
            setNumberOfBtn(Array.from(Array(Math.ceil(res.data.AllMidBansNum/numSync)).keys()))
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
                    <BoxBanner data={banner} setId={setCtrlId} key={index}/>
                ))
            }
          </div>
          <div className="w-full flex justify-center gap-3 mt-10">
            {
                numberOfBtn.map((number,index) => (
                    <>
                     <button key={index} className="py-1 px-3 transition-all hover:bg-orange-600 duration-300 bg-cyan-600 text-white rounded-md" onClick={()=>{
                        setPageNumber(number+1);
                        setBanners([]);
                        goTopCtrl();
                     }}>
                        {number+1}
                     </button>
                    </>
                ))
            }
          </div>
        </section>
    );
}

export default AllMidBanners;