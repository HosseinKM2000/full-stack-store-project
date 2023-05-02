import BreadCrumb from "<store>/components/breadCrumb";
import Image from "next/image";
import Link from "next/link";
import imageHead from '../../../public/img/Products/Music player.png';
import cupImg from '../../../public/img/Products/trophy.png';
import medalImg from '../../../public/img/Products/medal.png';
import targetImg from '../../../public/img/Products/target.png';
import DependentSlider from "<store>/components/dependentSlider";

import {GoVerified} from 'react-icons/go';

const SingleProduct = () => {
    return (
        <div className="flex flex-col pl-3 items-center w-full">
            <div className="flex w-full ">
              <BreadCrumb secondTitle={'محصولات'} secondLink={'/products'}/>
            </div>
            <section className="flex w-full justify-start gap-5 p-3 shadow-[0px_0px_10px_rgba(0,0,0,0.25)]">
                    <Image src={imageHead} className="w-[60%] h-[15rem]  overflow-hidden rounded-lg" alt="product"/>
                <div className="w-[40%] flex flex-col justify-start gap-10 py-1">
                    <h1 className="text-lg text-gray-500">هدفون با کیفیت سامسونگ</h1>
                    <div className="flex flex-col gap-2 w-[60%] text-gray-600">
                        <div className="flex flex-row justify-between  items-center">
                            <div className="flex gap-1 items-center">
                                <GoVerified className="text-green-700"/>
                                <span className="text-sm">رنگ</span>
                            </div>
                            <span className="text-sm">آبی</span>
                        </div>
                        <div className="flex flex-row justify-between  items-center">
                            <div className="flex gap-1 items-center">
                                <GoVerified className="text-green-700"/>
                                <span className="text-sm">قیمت</span>
                            </div>
                            <span className="text-sm">2,000,000</span>
                        </div>
                        <div className="flex flex-row justify-between  items-center">
                            <div className="flex gap-1 items-center">
                                <GoVerified className="text-green-700"/>
                                <span className="text-sm">مدل</span>
                            </div>
                            <span className="text-sm">A515</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-between items-center my-10">
                <div className="flex items-center justify-start gap-1 w-[30%] px-1 bg-[#E2E8F0] rounded-lg py-3">
                    <Image src={cupImg} className="w-[3rem] h-[3rem]" alt='cup'/>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold">محصولات اورجینال</h2>
                        <span className="text-sm">برترین های دنیای وب</span>
                    </div>
                </div>
                <div className="flex justify-start items-center w-[30%] gap-1 px-1 bg-[#E2E8F0] rounded-lg py-3">
                    <Image src={medalImg} className="w-[3rem] h-[3rem]" alt='medal'/>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold">بالا ترین کیفیت</h2>
                        <span className="text-sm">تاثیرگذارترین مورد در موفقیت</span>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-1 w-[30%] bg-[#E2E8F0] px-1 rounded-lg py-3">
                    <Image src={targetImg} className="w-[3rem] h-[3rem]" alt='target'/>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold">پشتیبانی فوق سریع</h2>
                        <span className="text-sm">کمتر از 30 دقیقه</span>
                    </div>
                </div>
            </section>
            <section>
             <div className="w-full text-start mt-10 pb-5 font-bold text-lg">
                <span>توضیحات کامل</span>
             </div>
             <p className="w-full text-justify leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </section>
            <DependentSlider title={'محصولات مرتبط'}/>
            <section className="w-full mt-2">
                <h2 className="text-lg font-bold text-gray-500">دیدگاه ها</h2>
                <form action="" className="bg-pink-500">
                    form
                </form>
            </section>
        </div>
    );
}

export default SingleProduct;