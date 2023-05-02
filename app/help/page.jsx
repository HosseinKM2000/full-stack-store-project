import Header from "<store>/components/header";
import Footer from "<store>/components/footer/Footer";

const Help = () => {
    return (
        <>
         <Header/>
         <div className="mt-[7rem] flex w-full justify-center gap-3">
            <button type="button" className="w-[15%] bg-orange-500 text-white rounded-md py-3 transition-all duration-300 hover:bg-orange-600 text-center">قوانین سایت</button>
            <button type="button" className="w-[15%] bg-orange-500 text-white rounded-md py-3 transition-all duration-300 hover:bg-orange-600 text-center">حریم خصوصی</button>
            <button type="button" className="w-[15%] bg-orange-500 text-white rounded-md py-3 transition-all duration-300 hover:bg-orange-600 text-center">سوالات متداول</button>
            <button type="button" className="w-[15%] bg-orange-500 text-white rounded-md py-3 transition-all duration-300 hover:bg-orange-600 text-center">چگونه خرید کنم؟</button>
         </div>
         <Footer/>
        </>
    );
}

export default Help;