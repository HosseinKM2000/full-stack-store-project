import Header from "<store>/components/header";
import Footer from "<store>/components/footer/Footer";

const BlogLayout = ({children}) => {
    return (
        <>
        <Header/>
        <div className="flex justify-between w-full items-start container mx-auto my-5">
            <main className="w-[70%]">{children}</main>
            <aside className="w-[30%] max-w-[30%] min-h-screen p-4 rounded-md bg-zinc-200">sideBar</aside>
        </div>
        <Footer/>
        </>
    )
}

export default BlogLayout;