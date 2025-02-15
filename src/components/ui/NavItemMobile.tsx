"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShoppingTag } from "react-icons/ci";
import { FaBloggerB, FaHome, FaTelegramPlane } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

function NavItemMobile() {

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

    const pathName = usePathname();


    return (
        <div className="px-4">
            {
                menu.map((menu, i: number) => (
                    <Link href={menu?.href} key={i} className={`font-medium flex items-center gap-4 mt-5 ${pathName === menu.href && 'text-blue-500'}`}>
                        <p className="text-xl">
                            {menu?.icon}
                        </p>
                        <p className={`text-sm ${pathName === menu.href ? 'text-blue-500' : 'text-white/50'}`}>
                            {menu?.title}
                        </p>
                    </Link>
                ))
            }
        </div>
    )
}

export default NavItemMobile;