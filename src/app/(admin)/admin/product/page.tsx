import DeleteProduct from "@/components/button/deleteProduct";
import { database } from "@/firebase/configure";
import { collection, getDocs, query, getCountFromServer } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { IoIosPricetag } from "react-icons/io";

const ProductLoading = () => (
    <div className="dark:bg-white/10 bg-black/10 rounded-xl">
        <div>
            <div className="w-full bg-white/10 h-48 lg:h-40 rounded-xl" />
            <div className="p-2">
                <div className="mb-3">
                    <p className="w-40 h-6 bg-white/10 rounded-md"></p>
                    <p className="w-32 mt-1 h-4 bg-white/10 rounded-md"></p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <p className="dark:text-white/60 text-black/60">Price</p>
                        <div className="flex items-center gap-2">
                            <IoIosPricetag />
                            <p className="text-black dark:text-white">$___</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex gap-3 justify-between mt-3 items-center">
                    <div className="bg-white/10 px-5 p-1 rounded-lg h-7 w-24" />
                    <div className="bg-white/10 px-5 p-1 rounded-lg h-7 w-24" />
                </div>
            </div>
        </div>
    </div>
);

async function product() {
    const collections = collection(database, "product");
    const q = query(collections);
    const allProduct = await getDocs(q);
    const count = await getCountFromServer(collections);

    return (
        <div className="w-full p-2">
            <p className="mb-3 font-medium">Total Products: {count.data().count}</p>

            <div className="grid md:grid-cols-3 gap-3 mb-5">
                {
                    allProduct.docs ?
                        allProduct.docs.map((product, i: number) => (
                            <div className="dark:bg-white/10 bg-black/10 rounded-xl" key={i}>
                                <div className="">
                                    <Image draggable={false} src={product.data().thumbnail} width={800} height={80} alt={product.data().title} className="h-48 lg:h-40 rounded-xl" />
                                    <div className="p-2">
                                        <div className="mb-3">
                                            <p className="font-medium text-black dark:text-white line-clamp-1">{product.data().title}</p>
                                            <p className="dark:text-white/60 text-black/60 text-xs">by {product.data().publisher}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <p className="dark:text-white/60 text-black/60">Price</p>
                                                <div className="flex items-center gap-2">
                                                    <IoIosPricetag />
                                                    <p className="text-black dark:text-white">${product.data().price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex gap-3 justify-between mt-3 items-center">
                                            <Link className="bg-white/10 px-5 p-1 rounded-lg" href={`/admin/product/update/${product.id}`}>Update</Link>
                                            <DeleteProduct id={product.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <>
                            <ProductLoading />
                            <ProductLoading />
                            <ProductLoading />
                            <ProductLoading />
                        </>
                }
            </div>
            {/* <div className="flex items-center gap-3">
                <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Previus</button>
                <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Next</button>
            </div> */}
        </div>
    )
}

export default product;