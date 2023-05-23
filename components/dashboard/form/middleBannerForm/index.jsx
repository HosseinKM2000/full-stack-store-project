'use client'
import { useState , useEffect } from "react";
import AllMidBanners from "./allMidBanners";
import NewMidBanner from "./newMidBanner";
import MidBannerDetails from "./midBannerDetails";

const MiddleBannerForm = () => {
    const [midBanDetCtrl,setMidBanDetCtrl] = useState('');
    const [det,setDet] = useState(<AllMidBanners setCtrlId={setMidBanDetCtrl}/>);
    useEffect(() => {
        if(midBanDetCtrl !== '')
        {
            setDet(<MidBannerDetails keyId={midBanDetCtrl}/>)
        }
    },[midBanDetCtrl])

    return (
        <div className="w-full flex flex-col gap-10">
            <div className="flex gap-3">
                <button onClick={() => setDet(<AllMidBanners setCtrlId={setMidBanDetCtrl}/>)} className="px-2 py-1 text-white bg-[#4F50EC] rounded-sm transition-all hover:bg-[#4F20EC]">همه</button>
                <button onClick={() => setDet(<NewMidBanner/>)} className="px-2 py-1 text-white bg-[#4F50EC] rounded-sm transition-all hover:bg-[#4F20EC]">بنر جدید</button>
            </div>
            <section>
                {det}
            </section>
        </div>
    );
}

export default MiddleBannerForm;