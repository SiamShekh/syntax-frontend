"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FaStore, FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdDashboard} from "react-icons/md";

function layout({ children }: { children: ReactNode }) {
    const pathName = usePathname();
    const menuItem = [
        {
            href: "/admin",
            icon: <MdDashboard className="text-2xl" />,
            title: "Dashboard"
        },
        {
            href: "/admin/user",
            icon: <FaUser className="text-2xl" />,
            title: "User"
        },
        {
            href: "/admin/product",
            icon: <FaStore className="text-2xl" />,
            title: "Product"
        },
        {
            href: "/admin/product/new",
            icon: <IoAdd className="text-2xl" />,
            title: "Add Product"
        },
    ]

    return (
        <div className="">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:p-3">
                    <div className="lg:hidden flex items-center gap-3 dark:bg-white/10 w-full h-16 px-3 mb-5">
                        <label htmlFor="my-drawer-2" className="lg:hidden text-4xl">
                            <IoIosMenu />
                        </label>
                        <p className="font-medium text-2xl">Syntax Admin</p>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full lg:w-80 w-64 p-0">
                        <div className="bg-white/10 w-full p-2 h-32">
                            <div className="size-10 rounded-full bg-white/10"></div>
                            <p className="text-sm font-medium mt-2 text-white">Siam Sheikh</p>
                            <p className="text-xs text-white/40 font-medium">View Profile</p>
                        </div>
                        <div className="p-4">
                            {
                                menuItem.map((menu, i: number) => (
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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default layout;