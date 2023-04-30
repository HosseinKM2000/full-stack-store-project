import BreadCrumb from "<store>/components/breadCrumb";
import Image from "next/image";
import Img_1 from '../../../public/img/blog/How to Learn Programming Without All the Stress.jpg';
import {FaEye} from 'react-icons/fa';
import {FaComment} from 'react-icons/fa';
import {MdDateRange} from 'react-icons/md';
import DependentArticle from "<store>/components/dependentArticle";

const SingleBlog = () => {
    return (
        <article className="flex flex-col pl-5 items-center w-full">
            <div className="flex w-full ">
              <BreadCrumb secondTitle={'مقالات'} secondLink={'/blogs'}/>
            </div>
            <Image src={Img_1} alt="article" className="rounded-lg w-full"/>
            <div className="w-full pt-10 pb-5 text-blue-600 text-xl">
              <h1 className="text-start">چرا next.js بهتر از همه فریمورک های جاوا اسکریپتی است</h1>
            </div>
            <div className="flex items-center gap-2 w-full justify-start text-sm">
                <div className="bg-gray-200 flex items-center px-1 py-2 rounded-md gap-1">
                    <div className="flex items-center gap-1">
                        <FaEye/>
                        <span>تعداد بازدید:</span>
                    </div>
                    <span>5</span>
                </div>
                <div className="bg-gray-200 flex items-center px-1 py-2 rounded-md gap-1">
                    <div className="flex items-center gap-1">
                        <FaComment/>
                        <span>تعداد دیدگاه:</span>
                    </div>
                    <span>5</span>
                </div>
                <div className="bg-gray-200 flex items-center px-1 py-2 rounded-md gap-1">
                    <div className="flex items-center gap-1">
                        <MdDateRange/>
                        <span>تاریخ انتشار:</span>
                    </div>
                    <span>1401/10/13</span>
                </div>
            </div>
            <div className="w-full text-start mt-10 pb-5 font-bold text-lg">
                <span>توضیحات کامل</span>
            </div>
            <p className="w-full text-justify leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <DependentArticle/>
            <section className="w-full mt-2">
                <h2 className="text-lg font-bold text-gray-500">دیدگاه ها</h2>
                <form action="" className="bg-pink-500">
                    form
                </form>
            </section>
        </article>
    );
}

export default SingleBlog;