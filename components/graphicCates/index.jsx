'use client'
import GraphicBox from "./graphicBox";
// import img_1 from '../../public/img/GraphicCategories/calculator-min.png';
// import img_2 from '../../public/img/GraphicCategories/clapperboard-min.png';
// import img_3 from '../../public/img/GraphicCategories/illustrator3-min.png';
// import img_4 from '../../public/img/GraphicCategories/list1-min.png';
// import img_5 from '../../public/img/GraphicCategories/music-min.png';
// import img_6 from '../../public/img/GraphicCategories/photoshop2-min.png';
// import img_7 from '../../public/img/GraphicCategories/value1-min.png';
// import img_8 from '../../public/img/GraphicCategories/view-min.png';

const GraphicCates = () => {

    return (
        <div className="flex flex-wrap w-full px-5 justify-between">
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
            <GraphicBox/>
        </div>
    );
}

export default GraphicCates;