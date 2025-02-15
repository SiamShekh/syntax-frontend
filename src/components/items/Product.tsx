"use client";

import { database } from "@/firebase/configure";
import { isImg } from "@/utils/isImg";
import { doc, DocumentData, QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { IoIosPricetag } from "react-icons/io";
import { toast } from "sonner";

const Product = ({ product }: { product: QueryDocumentSnapshot<DocumentData, DocumentData> }) => {
    const item = product.data();

    async function deleteProduct(productId: string) {
        try {
            toast.dismiss();
            toast.loading("Product Deleting");
            const ref = doc(database, "product", productId);
            await updateDoc(ref, { isDelete: true });
            toast.dismiss();
            toast.success("Product Deleted!");
        } catch (error: any) {
            toast.dismiss();
            toast.error(error || "Something went wrong");
        }
    }

    return (
        <div className="dark:bg-white/10 bg-black/10 p-2 rounded-xl">
            <div className="">
                <Image src={isImg(item?.thumbnail) ? item?.thumbnail : "https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_640.png"} width={400} height={100} alt={item?.title} className="object-cover h-48 lg:h-52 rounded-xl" />
                <div className="my-3">
                    <p className="font-medium text-black dark:text-white">{item?.title}</p>
                    <p className="dark:text-white/60 text-black/60 text-xs">by {item?.publisher}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <p className="dark:text-white/60 text-black/60">Price</p>
                        <div className="flex items-center gap-2">
                            <IoIosPricetag />
                            <p className="text-black dark:text-white">${item?.price}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center">
                        <button onClick={()=> deleteProduct(product.id)} className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;