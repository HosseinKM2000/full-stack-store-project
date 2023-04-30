import Header from "<store>/components/header";
import Footer from "<store>/components/footer/Footer";
import {RxMagnifyingGlass} from 'react-icons/rx';
import {TbArrowBadgeLeft} from 'react-icons/tb';
import Link from "next/link";

const BlogLayout = ({children}) => {
    return (
        <>
        <Header/>
        <div className="flex justify-between w-full px-5 items-start container mx-auto my-5">
            <main className="w-[70%]">{children}</main>
            <aside className="w-[30%] flex flex-col gap-8 max-w-[30%] min-h-screen p-4 rounded-md bg-white">
                <form action="">
                    <div className="w-full h-11 bg-white justify-end  items-center relative flex articles_saerch_box">
                      <input type="search" className="outline-none transition-all duration-500 focus:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-0 p-1 w-full h-full text-right bg-transparent" name="" id="" placeholder="...جستجو در وبلاگ ها"/>
                      <button className="absolute left-1 text-blue-700 transition-all bg-white duration-300 hover:text-blue-500  text-3xl font-bold"><RxMagnifyingGlass/></button>
                    </div>
                </form>
                <section className="flex flex-col gap-5 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <h3 className="text-gray-500 font-bold">توضیحات خلاصه</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, alias quidem. Exercitationem nobis iure maxime ipsa assumenda explicabo iusto distinctio ab at dolorem voluptates, a veritatis repellat ipsam esse itaque.</p>
                </section>
                <section className="flex flex-col p-3 gap-5 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <h4 className="text-blue-500 font-bold">پر بازدید ترین مقالات</h4>
                    <ul className="flex flex-col gap-5">
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                    </ul>
                </section>
                <section className="flex flex-col p-3 gap-5 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <h4 className="text-blue-500 font-bold">پربازدید ترین محصولات</h4>
                    <ul className="flex flex-col gap-5">
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                        <Link href={'/'}>
                          <li className="flex gap-1 items-center">
                            <div className="w-[2px] bg-gray-500 h-6"></div>
                            <span className="text-[0.9rem]">عنوان تستی برای مقالات</span>
                          </li>
                        </Link>
                    </ul>
                </section>
                <form action="" className="flex flex-col gap-5 p-3 rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <label htmlFor="email" className="text-blue-500 font-bold">شرکت در خبر نامه</label>
                    <div className="w-full h-11 bg-white justify-end  items-center relative flex articles_saerch_box">
                      <input type="email" className="outline-none transition-all duration-500 focus:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] shadow-[0px_0px_5px_rgba(0,0,0,0.25)] border-0 p-1 w-full h-full text-right bg-transparent" name="email" id="" placeholder="...ایمیل خود را وارد کنید"/>
                      <button className="absolute left-1 text-blue-700 transition-all bg-white duration-300 hover:text-blue-500  text-4xl font-bold"><TbArrowBadgeLeft/></button>
                    </div>
                </form>
            </aside>
        </div>
        <Footer/>
        </>
    )
}

export default BlogLayout;