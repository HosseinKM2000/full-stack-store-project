'use client'
import { useRef , useEffect , useState} from "react";
import axios from "axios";

const MidBannerDetails = ({keyId}) => {
 
    const imageUrlRef = useRef();
    const imageAltRef = useRef();
    const imageLinkRef = useRef();
    const imageSituationRef = useRef();
    const [deleteStatus,setDeleteStatus] = useState(false);

    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault();
        }
    }
    const updater = (e) => {
        e.preventDefault()
        const formData = {
            goalId: keyId,
            image:imageUrlRef.current.value,
            imageAlt:imageAltRef.current.value,
            situation:imageSituationRef.current.value,
            link:imageLinkRef.current.value,
            date:new Date().toLocaleDateString('fa-IR',{hour:'2-digit',minute:'2-digit'})
        }
        const url = `https://shoping-file.iran.liara.run/api/update-middle-banner/${keyId}`;
        axios.post(url,formData)
        .then(res => alert('banner updated'))
        .catch(err => console.error('this is error in update mid banner => ',err))
    }

    const remover = () => {
        // form data will need for hard way delete in server
        // const formData = {
        //     goalId: keyId,
        // } 
        const url = `https://shoping-file.iran.liara.run/api/delete-middle-banner/${keyId}`;
        axios.post(url,
            // formData
            ) 
        .then(res => {
            console.log('goal mid banner delete successfully')
            setDeleteStatus(true);
        })
        .catch(err => console.error('this is error in delete mid banner'))
    }

    const [defaultData,setDefaultData] = useState({
        imageUrl:'',
        imageAlt:'',
        imageLink:'',
        imageSituation:true,
        imageDate:'',
    })

    useEffect(() => {
        axios.get(`https://shoping-file.iran.liara.run/api/get-mid-ban/${keyId}`)
        .then(res => {
            setDefaultData({

                    imageUrl: res.data.image,
                    imageAlt: res.data.imageAlt,
                    imageLink: res.data.link,
                    imageSituation: res.data.situation,
                    imageDate: res.data.date
            })
        })
        .catch(err => console.error('error in get one mid banner =>',err))
    },[keyId])

    return (
        <div className="w-full flex flex-col justify-start">
            {
                deleteStatus 
                ?<div className="w-full flex justify-center items-center">
                    <h1 className="text-green-600 text-2xl">بنر با موفقیت حذف شد {`:)`}</h1>
                </div>
                :<>
            <h1 className="text-xl font-bold rounded-t-md bg-gray-300 w-fit px-2 py-1 text-gray-500">جزئیات بنر</h1>
            <form onKeyDown={formKeyNotSuber} onSubmit={updater} className="flex flex-col gap-8 w-full bg-gray-300 py-5 px-2">
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgAddress">آدرس جدید عکس</label>
                    <input defaultValue={defaultData.imageUrl} required={true} ref={imageUrlRef} type="text" name="imgAddress"  className="outline-none p-1 text-left focus:border border-gray-700 "/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgAlt">آلت جدید عکس</label>
                    <input defaultValue={defaultData.imageAlt} required={true} ref={imageAltRef} type="text" name="imgAlt"  className="outline-none p-1 text-left focus:border border-gray-700"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgLink">لینک جدید عکس</label>
                    <input defaultValue={defaultData.imageLink} required={true} ref={imageLinkRef} type="text" name="imgLink" className="outline-none p-1 text-left focus:border border-gray-700"/>
                </div>
                <div className="w-fit flex flex-col gap-1">
                    <label htmlFor="imageSituation">وضعیت جدید عکس</label>
                    <select ref={imageSituationRef} name="imgSituation" id="" className="outline-none">
                        {
                            defaultData.imageSituation === true 
                            ? <>
                                <option value={true} selected>روشن</option>
                                <option value={false}>خاموش</option>
                            </>
                            :<>
                              <option value={false} selected>خاموش</option>
                              <option value={true}>روشن</option> 
                            </>
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <span>تاریخ و زمان ایجاد</span>
                    <span className="bg-stone-400 border border-white rounded-sm text-white px-2 py-1 w-fit">{defaultData.imageDate}</span>
                </div>
                <div className="w-full flex justify-between">
                 <button type="submit" className="text-white bg-orange-500 rounded-md px-5 py-1 w-fit transition-all hover:bg-orange-600">ثبت تغییرات</button>
                 <button type="button" onClick={()=>remover()} className="text-white bg-red-500 rounded-md px-3 py-1 w-fit transition-all hover:bg-red-600">حذف بنر</button>
                </div>
            </form>
            </>
            }
        </div>
    );
}

export default MidBannerDetails;