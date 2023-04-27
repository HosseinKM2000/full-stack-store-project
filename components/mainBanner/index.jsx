import Image from "next/image";
import Link from "next/link";
import Img_1 from '../../public/img/Mainbanner/1.jpg';
import Img_2 from '../../public/img/Mainbanner/2.jpg';

const MainBanner = () => {
    return (
        <div className="w-full px-5 flex justify-between mb-10 h-[12rem]">
            <Link href={'/'} className="w-[48%] h-full rounded-md overflow-hidden transition-all duration-500 hover:brightness-110"><Image src={Img_1}  alt="banner"/></Link>
            <Link href={'/'} className="w-[48%] h-full rounded-md overflow-hidden transition-all duration-500 hover:brightness-110"><Image src={Img_2}  alt="banner" /></Link>
        </div>
    );
}

export default MainBanner;