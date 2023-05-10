'use client'
import { useState } from "react";
import AllMidBanners from "./allMidBanners";
import NewMidBanner from "./newMidBanner";

const MiddleBannerForm = () => {
    const [det,setDet] = useState(<AllMidBanners/>);

    return (
        <div className="w-full justify-between flex">
            <div className="flex gap-3">
                <button onClick={() => setDet(<AllMidBanners/>)} className="px-2 py-1 text-white bg-[#4F50EC] rounded-sm transition-all hover:bg-[#4F40EC]">همه</button>
                <button onClick={() => setDet(<NewMidBanner/>)} className="px-2 py-1 text-white bg-[#4F50EC] rounded-sm transition-all hover:bg-[#4F40EC]">بنر جدید</button>
            </div>
            <section>
                {det}
            </section>
        </div>
    );
}

export default MiddleBannerForm;