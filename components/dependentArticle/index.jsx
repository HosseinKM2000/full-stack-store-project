import ImgSrc from '../../public/img/Articles/WordPress Hackers Are Using Vulnerable Plugins to Gain Access to Sites.jpg';
import Article from './article';

const DependentArticle = () => {
    return (
        <section className="flex flex-col gap-3 my-10 mb-10 w-full">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-lg font-bold text-gray-500">مقالات مرتبط</h1>
            </div>
            <div className='flex flex-row gap-3 w-full'>
                <Article Img={ImgSrc}/>
                <Article Img={ImgSrc}/>
                <Article Img={ImgSrc}/>
            </div>
        </section>
    );
}

export default DependentArticle;