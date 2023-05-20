'use client'
import Image from "next/image";
import Link from "next/link";
import { useState , useEffect } from "react";

const MainBanner = () => {

    const [banners,setBanners] = useState([]);

    useEffect(()=>{
        fetch('https://shoping-file.iran.liara.run/api/get-active-mid-bans')
        .then(res => res.json())
        .then(data => setBanners(data))
    },[])

    return (
        <div className="w-full px-5 flex flex-wrap justify-center gap-5 mb-10 h-fit">
            {
                banners.map((banner,index) => (
                     <>
                     <Link href={banner.link} key={index} className="w-[48%] h-full rounded-md overflow-hidden transition-all duration-500 hover:brightness-110 mb-5"><Image src={`/${banner.image}`} width={500} height={200}  style={{maxWidth:'500px',maxHeight:'200px'}} alt={banner.imageAlt}/></Link>
                     </>
                ))
            }
        </div>
    );
}

export default MainBanner;