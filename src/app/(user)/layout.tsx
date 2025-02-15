import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
    return (
        <div className="">
            <div className="h-20">
                <Navbar />
            </div>
            <div className="max-w-[1200px] mx-auto p-3 lg:p-0 ">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout;