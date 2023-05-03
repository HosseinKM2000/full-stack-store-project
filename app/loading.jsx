import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen">
            <Image alt="loading" width={120} height={120} src={'/img/loading.svg'}/>
        </div>
    );
}

export default Loading;