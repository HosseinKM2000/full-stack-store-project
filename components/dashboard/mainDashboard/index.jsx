'use client'
import { useState , useEffect} from "react";
import DashboardCtrl from "../dashboardCtrl";
import MiddleBannerForm from "../form/middleBannerForm";
import SliderForm from "../form/sliderForm";

const MainDashboard = () => {
    const [content,setContent] = useState('midBan');
    const [details,setDetails] = useState(<MiddleBannerForm/>);
    useEffect(() => {
        if(content === 'midBan')
        {
            setDetails(<MiddleBannerForm/>)
        }
        else if(content === 'sliders')
        {
            setDetails(<SliderForm/>)
        }
    },[content])

    return (
        <div className="flex w-full">
            <DashboardCtrl setContent={setContent}/>
            <div className='w-[80%]'>
                {details}
            </div>
        </div>
    );
}

export default MainDashboard;