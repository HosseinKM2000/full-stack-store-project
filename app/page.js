import Header from "<store>/components/header";
import MainSlider from '../components/mainSlider/index';
import ProductSlider from '../components/productSlider/index.jsx';
import MainBanner from "<store>/components/mainBanner/index";

export default function Home() {
  return (
    <main>
      <Header/>
      <MainSlider/>
      <ProductSlider title={'اپلیکیشن ها'}/>
      <MainBanner/>
      <ProductSlider title={'کتاب ها'}/>
    </main>
  )
}
