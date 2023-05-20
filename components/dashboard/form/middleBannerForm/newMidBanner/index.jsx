'use client'
import { useRef } from "react";
import axios from "axios";

const NewMidBanner = () => {
 
    const imageUrlRef = useRef();
    const imageAltRef = useRef();
    const imageLinkRef = useRef();
    const imageSituationRef = useRef();

    const formKeyNotSuber = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault();
        }
    }
    const submiter = (e) => {
        e.preventDefault()
        const formData = {
            image:imageUrlRef.current.value,
            imageAlt:imageAltRef.current.value,
            situation:imageSituationRef.current.value,
            link:imageLinkRef.current.value,
        }
        const url = 'https://shoping-file.iran.liara.run/api/new-middle-banner';
        axios.post(url,formData)
        .then(res => {
            console.log('data send ok')
            alert('banner added')
        })
        .catch(err => console.error('this is post error => ',err))
    }



    return (
        <div className="w-full flex flex-col justify-start">
            <h1 className="text-xl font-bold rounded-t-md bg-gray-300 w-fit px-2 py-1 text-gray-500">بنر جدید</h1>
            <form onKeyDown={formKeyNotSuber} onSubmit={submiter} className="flex flex-col gap-8 w-full bg-gray-300 py-5 px-2">
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgAddress">آدرس عکس</label>
                    <input ref={imageUrlRef} type="text" name="imgAddress"  className="outline-none p-1 focus:border border-gray-700 "/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgAlt">آلت عکس</label>
                    <input ref={imageAltRef} type="text" name="imgAlt"  className="outline-none p-1 focus:border border-gray-700"/>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="imgLink">لینک عکس</label>
                    <input ref={imageLinkRef} type="text" name="imgLink" className="outline-none p-1 focus:border border-gray-700"/>
                </div>
                <div className="w-fit flex flex-col gap-1">
                    <label htmlFor="imageSituation">وضعیت عکس</label>
                    <select ref={imageSituationRef} name="imgSituation" id="" className="outline-none">
                        <option value={true}>روشن</option>
                        <option value={false}>خاموش</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-orange-500 rounded-md px-5 py-1 w-fit transition-all hover:bg-orange-600">ثبت</button>
            </form>
        </div>
    );
}

export default NewMidBanner;