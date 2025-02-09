import Blog from "@/components/items/Blog";
import Image from "next/image";

function blog() {
    return (
        <div className="">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
            </div>
        </div>
    )
}

export default blog;