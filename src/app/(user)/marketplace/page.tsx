import Product from "@/components/items/Product";
import { database } from "@/firebase/configure";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { IoIosPricetag } from "react-icons/io";

async function marketplace() {

    const q = query(collection(database, "product"));
    const product = await getDocs(q);

    return (
        <div className="min-h-screen">
            <div className="flex justify-between items-center ">
                <p className="font-medium text-black dark:text-white hidden md:flex">Product: 90</p>
                <div className="join rounded-xl text-white bg-white hidden">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>

                    <button className="btn join-item">Search</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 my-5">
                {
                    product.docs.map((item) => (
                        <div className="dark:bg-white/10 bg-black/10 p-2 rounded-xl">
                            <div className="">
                                <Image src={item.data().thumbnail} width={800} height={100} alt={item.data().title} className="object-cover h-48 lg:h-52 rounded-xl" />
                                <div className="my-3">
                                    <p className="font-medium text-black dark:text-white">{item.data().title}</p>
                                    <p className="dark:text-white/60 text-black/60 text-xs">by {item.data().publisher}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex-1">
                                        <p className="dark:text-white/60 text-black/60">Price</p>
                                        <div className="flex items-center gap-2">
                                            <IoIosPricetag />
                                            <p className="text-black dark:text-white">${item.data().price}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex justify-end items-center">
                                        <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">
                                        <Link href={`/marketplace/${item.id}`}>Buy</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default marketplace;