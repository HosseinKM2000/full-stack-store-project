'use client'
const DCbtn = ({title , content , setContent}) => {

    return (
        <button onClick={() => setContent(content)} className="w-[70%] text-white px-1 rounded-sm transition-all hover:bg-[#3B3B3B] py-2">
            {title}
        </button>
    );
}

export default DCbtn;