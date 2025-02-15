import Link from "next/link";
import { CiShoppingTag } from "react-icons/ci";
import { FaHome, FaTelegramPlane } from "react-icons/fa";
import { FaBloggerB, FaShop } from "react-icons/fa6";
import { MdDashboard, MdOutlineManageAccounts, MdOutlineMenu } from "react-icons/md";
import NavItemMobile from "../ui/NavItemMobile";

const Navbar = () => {
    const menu = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: <MdDashboard className="text-2xl" />
        },
        {
            title: "Home",
            href: "/",
            icon: <FaHome className="text-2xl" />
        },
        {
            title: "Marketplace",
            href: "/marketplace",
            icon: <CiShoppingTag className="text-2xl" />
        },
        {
            title: "Blog",
            href: "/blog",
            icon: <FaBloggerB className="text-2xl" />
        },
        {
            title: "Telegram",
            href: "t.me/example",
            icon: <FaTelegramPlane className="text-2xl" />
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

                    <Link href={'/register'} className="font-medium bg-purple-500 px-4 py-2 rounded-md flex items-center gap-2">
                        <MdOutlineManageAccounts className="text-xl" /> Sign up
                    </Link>
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
                            <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-0">
                                <div className="bg-white/10 w-full p-2">
                                    <div className="size-10 rounded-full bg-white/10"></div>
                                    <p className="text-sm font-medium mt-2 text-white">Siam Sheikh</p>
                                    <p className="text-xs text-white/40 font-medium">View Profile</p>
                                </div>

                                <NavItemMobile />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;