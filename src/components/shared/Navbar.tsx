import Link from "next/link";
import { CiShoppingTag } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBloggerB, FaShop } from "react-icons/fa6";
import { MdOutlineManageAccounts, MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const menu = [
        {
            title: "Marketplace",
            href: "#",
            icon: <CiShoppingTag className="text-2xl"/>
        },
        {
            title: "Blog",
            href: "#",
            icon: <FaBloggerB className="text-2xl"/>
        },
        {
            title: "Telegram",
            href: "#",
            icon: <FaTelegramPlane className="text-2xl"/>
        },
    ]
    return (
        <div className="h-16 backdrop-blur-sm bg-black/10 border-b flex justify-center items-center fixed top-0 left-[50%] -translate-x-[50%] w-full z-50">
            <div className="max-w-[1200px] w-full flex justify-between items-center px-5">
                <div className="flex items-center gap-3">
                    <FaShop className="text-2xl" />
                    <p className="font-medium ">Syntax Code</p>
                </div>
                <div className="md:flex items-center gap-8 hidden">
                    {
                        menu.map((menu, i: number) => (
                            <Link href={menu?.href} key={i} className="font-medium text-sm">{menu?.title}</Link>
                        ))
                    }

                    <button className="font-medium bg-purple-500 px-4 py-2 rounded-md flex items-center gap-2">
                        <MdOutlineManageAccounts className="text-xl" /> Sign up
                    </button>
                </div>

                <div className="md:hidden">
                    <label htmlFor="my-drawer-4" className="drawer-button">
                        <MdOutlineMenu className="text-2xl" />
                    </label>

                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
                                {/* <li><a>Sidebar Item 1</a></li> */}
                                {/* <li><a>Sidebar Item 2</a></li> */}
                                <p className="text-blue-500 text-xl bg-white/10 py-4 rounded-lg border-white/20 border font-bold text-center">Syntax Code</p>

                                {
                                    menu.map((menu, i: number) => (
                                        <Link href={menu?.href} key={i} className="font-medium flex items-center gap-2 text-xl mt-5">
                                            {menu?.icon}
                                            {menu?.title}
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;