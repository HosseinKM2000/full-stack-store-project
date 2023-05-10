import DCbtn from "./btn";

const  DashboardCtrl = ({setContent}) => {
    return (
            <div className="flex flex-col items-center gap-3 w-[20%] py-3 bg-[#202020] min-h-screen">
                <DCbtn title={"بنر های تبلیغاتی"} content={'midBan'} setContent={setContent}/>
                <DCbtn title={"اسلایدر ها"} content={'sliders'} setContent={setContent}/>
            </div>
    );
}

export default DashboardCtrl;