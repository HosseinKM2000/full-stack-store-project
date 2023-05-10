'use client'
const DCbtn = ({title , Key , setContent , content}) => {

    return (
        <button  onClick={() => {setContent(Key)}} className={`w-[80%] ${content === Key ? 'bg-[#3B3B3B]' : null} text-white px-1 rounded-sm transition-all hover:bg-[#959595] py-2`} >
            {title}
        </button>
    );
}

export default DCbtn;