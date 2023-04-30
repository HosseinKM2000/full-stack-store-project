import Image from "next/image";
import Link from "next/link";

const Article = ({Img}) => {
    return (
        <article className="w-[33.33%] items-center flex flex-col px-2 py-2 overflow-hidden rounded-lg shadow-[0px_0px_4px_#a3a3a3] hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] transition-all">
            <Link href={'/'}><Image src={Img} alt={'article'} className="rounded-lg w-ful h-[8rem] transition-all duration-500 hover:brightness-150"/></Link>
            <Link href={'/'} className="w-full text-base text-gray-600 mt-3 mb-5 font-bold transition-all duration-500 hover:text-gray-400">جلوگیری از کامنت اسپم در وردپرس ; ابزار و نکات</Link>
            <p className="text-sm line-clamp-4 transition-all duration-500 leading-5 font-normal text-justify w-full">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اس
            </p>
            <hr className="h-[2px] border-0 bg-gray-300 my-5 w-[90%]"/>
            <div className="flex w-full justify-between">
                <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 bg-gray-200 p-1 rounded-sm text-sm">1401/03/15</Link>
                <Link href={'/'} className="hover:bg-gray-300 transition-all duration-500 bg-gray-200 p-1 rounded-sm text-sm">
                    <span>4</span>
                    <span>دیدگاه</span>
                </Link>
            </div>
        </article>
    );
}

export default Article;


