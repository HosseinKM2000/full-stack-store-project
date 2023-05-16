import Image from "next/image";

const BoxBanner = ({data}) => {
    return (
        <div className="flex w-full items-end justify-between shadow-[0px_0px_10px_rgba(0,0,0,0.3)] p-5 transition-all duration-300 hover:bg-orange-200">
            <Image src={`/${data.image}`} alt={data.alt} width={500} height={500} className="w-[40%] h-full rounded-lg"/>
            <div className="flex gap-2 text-sm">
                {
                    data.situation === true
                    ?<span className="text-white px-3 py-1 rounded-md bg-green-600">روشن</span>
                    :<span className="text-white px-3 py-1 rounded-md bg-red-600">خاموش</span>
                }
                <span className="bg-orange-500 py-1 text-sm px-3 rounded-md text-white">
                    {data.date}
                </span>
            </div>
        </div>
    );
}

export default BoxBanner;