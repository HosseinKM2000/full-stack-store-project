import Image from "next/image";
import Link from "next/link";
import Img_1 from '../../public/img/GraphicCategories/calculator-min.png';


const GraphicBox = () => {
    return (
        <Link href={'/'} className="flex justify-between rounded-lg GraphicCategories mb-10 bg-gray-200 px-3 py-3 transition-all duration-300 hover:bg-[#d3d7ff] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col h-full justify-center gap-2">
                <span className="text-sm font-black">فایل لایه باز فتوشاپ</span>
                <span className="text-xs font-bold">وکتور های گرافیکی قدرتمند</span>
            </div>
            <Image src={Img_1} alt={'GraphicCategories'} className="w-[4rem]"/>
        </Link>
    );
}

export default GraphicBox;