import DCbtn from "./btn";

const  DashboardCtrl = ({setContent , content}) => {
    return (
            <div className="flex flex-col items-center gap-3 w-[20%] py-3 bg-[#202020] min-h-screen">
                <DCbtn title={"بنر های تبلیغاتی"} Key={'midBan'} setContent={setContent} content={content}/>
                <DCbtn title={"اسلایدر ها"} Key={'sliders'} setContent={setContent} content={content}/>
            </div>
    );
}

export default DashboardCtrl;