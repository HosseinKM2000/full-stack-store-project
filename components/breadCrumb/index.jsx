import Link from "next/link";

const BreadCrumb = ({secondTitle,secondLink}) => {
    return (
        <div className="flex gap-1 my-3">
            <Link href={'/'} className="text-blue-500 transition-all duration-300 hover:text-blue-700">خانه</Link>
            <span>/</span>
            <Link href={secondLink} className="text-blue-500 transition-all duration-300 hover:text-blue-700">{secondTitle}</Link>
            <span>/</span>
            <span>...</span>
        </div>
    );
}

export default BreadCrumb;