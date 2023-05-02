import Header from "<store>/components/header";
import Footer from "<store>/components/footer/Footer";
import {TbArrowBadgeLeft} from 'react-icons/tb';


const ProductLayout = ({children}) => {
    return (
        <>
        <Header/>
        <div className="flex justify-between w-full px-5 items-start container mx-auto my-8">
            <main className="w-[75%]">{children}</main>
            <aside className="w-[25%] flex flex-col gap-8 max-w-[30%] min-h-screen pt-12 rounded-md bg-white">
                <form className="flex flex-col items-center gap-5">
                    <button type="button" className="flex px-2 py-2 justify-center rounded-md w-full text-center bg-orange-500 text-white text-sm ">
                      <bdi>2,000,000</bdi>تومان-افزودن به سبد خرید 
                    </button>
                    <button type="button" className="px-2 py-2 rounded-md bg-blue-500 text-white w-full text-center text-sm">افزودن به علاقه مندی ها</button>
                </form>
                <section className="flex flex-col gap-5 p-3 w-full rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <div className="w-full flex justify-between">
                        <span>تعداد خرید</span>
                        <span>12</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span>تعداد بازدید</span>
                        <span>80</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span>تعداد دیدگاه</span>
                        <span>36</span>
                    </div>
                </section>
                <section className="flex flex-col gap-5 p-3 w-full rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <h3 className="text-gray-900">معرفی کوتاه</h3>
                    <p className="line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit praesentium distinctio? Quae expedita inventore obcaecati iure corporis consectetur suscipit recusandae ratione repellat atque. Unde atque voluptatibus ipsa expedita repudiandae!</p>
                </section>
                <section className="flex items-start flex-col gap-3 p-3 w-full rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <h4 className="text-gray-900">برچسب ها</h4>
                    <div className="flex justify-start text-sm gap-1 flex-wrap">
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                        <span className="p-1 bg-gray-200 rounded-md">فایل گرافیکی</span>
                    </div>
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
    );
}

export default ProductLayout;