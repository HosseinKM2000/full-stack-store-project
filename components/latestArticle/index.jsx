import ImgSrc from '../../public/img/Articles/WordPress Hackers Are Using Vulnerable Plugins to Gain Access to Sites.jpg';
import Article from './article';

const LatestArticle = () => {
    return (
        <section className="flex flex-col gap-3 px-10 mb-10">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-lg font-bold text-gray-500">آخرین مقالات</h1>
                <button type="button" className="py-1 px-2 rounded-sm transition-all duration-500 hover:bg-gray-400 text-white bg-gray-500">برو به وبلاگ</button>
            </div>
            <div className='flex flex-row gap-5'>
                <Article Img={ImgSrc}/>
                <Article Img={ImgSrc}/>
                <Article Img={ImgSrc}/>
                <Article Img={ImgSrc}/>
            </div>
        </section>
    );
}

export default LatestArticle;