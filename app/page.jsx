import Header from "<store>/components/header";
import MainSlider from '../components/mainSlider/index';
import ProductSlider from '../components/productSlider/index.jsx';
import MainBanner from "<store>/components/mainBanner/index";
import GraphicCates from "<store>/components/graphicCates";
import GraphicFilesSlider from "<store>/components/graphicFilesSlider";
import LatestArticle from "<store>/components/latestArticle";
import Footer from "<store>/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <MainSlider/>
      <ProductSlider title={'اپلیکیشن ها'}/>
      <MainBanner/>
      <ProductSlider title={'کتاب ها'}/>
      <GraphicCates/>
      <GraphicFilesSlider/>
      <LatestArticle/>
      <Footer/>
    </main>
  )
}
