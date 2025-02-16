import DeleteProduct from "@/components/button/deleteProduct";
import CreateNewProduct from "@/components/modal/CreateNewProduct";
import UpdateProduct from "@/components/modal/UpdateProduct";
import { database } from "@/firebase/configure";
import { collection, getDocs, query, getCountFromServer } from "firebase/firestore";
import Image from "next/image";
import { IoIosPricetag } from "react-icons/io";

async function product() {
    const collections = collection(database, "product");
    const q = query(collections);
    const allProduct = await getDocs(q);
    const count = await getCountFromServer(collections);
    
    return (
        <div className="w-full p-2">
            <div className="flex justify-between items-center w-full dark:bg-white/10 rounded-lg p-2">
                <p className="font-medium capitalize">Create new product</p>
                <CreateNewProduct />
            </div>
            <p className="my-3 font-medium">Total Products: {count.data().count}</p>

            <div className="grid md:grid-cols-3 gap-3 mb-5">
                {
                    allProduct.docs.map((product, i: number) => (
                        <div className="dark:bg-white/10 bg-black/10 p-2 rounded-xl" key={i}>
                            <div className="">
                                <Image draggable={false} src={product.data().thumbnail} width={800} height={100} alt={product.data().title} className="object-cover h-48 lg:h-52 rounded-xl" />
                                <div className="my-3">
                                    <p className="font-medium text-black dark:text-white">{product.data().title}</p>
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
                                    <UpdateProduct product={product.data()} id={product.id} />
                                    <DeleteProduct id={product.id}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center gap-3">
                <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Previus</button>
                <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Next</button>
            </div>
        </div>
    )
}

export default product;