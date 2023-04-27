import Header from "<store>/components/header";
import MainSlider from '../components/mainSlider/index';
import ProductSlider from '../components/productSlider/index.jsx';

export default function Home() {
  return (
    <main>
      <Header/>
      <MainSlider/>
      <ProductSlider/>
    </main>
  )
}
