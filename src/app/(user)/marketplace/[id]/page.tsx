"use client";

import { database } from "@/firebase/configure";
import { unsubscribe } from "diagnostics_channel";
import { collection, doc, DocumentData, getDoc, query } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export interface Root {
    images3: string
    // title: string
    images2: string
    images1: string
    description: string
    images4: string
    // publisher: string
    documention: string
    price: string
    video: string
    // thumbnail: string
}

function details() {
    const { id } = useParams();
    const [product, setProduct] = useState<DocumentData | undefined>(undefined);
    console.log(id);

    useEffect(() => {
        const unSubscribe = async () => {
            const pro = await getDoc(doc(database, "product", id as string));
            setProduct(pro);
        }
        unSubscribe();
    }, [id]);

    console.log(product?.data());

    // const images = [
    //     {
    //         original: "https://picsum.photos/id/1018/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1018/250/150/",
    //     },
    //     {
    //         original: "https://picsum.photos/id/1015/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1015/250/150/",
    //     },
    //     {
    //         original: "https://picsum.photos/id/1019/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1019/250/150/",
    //     },
    // ];


    return (
        <div className="w-full min-h-screen">
            {
                product?.data() === undefined ? <></> :
                    <>
                        <p className="lg:text-3xl text-xl lg:mt-3 line-clamp-2 font-medium capitalize">{product?.data()?.title}</p>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-1">
                                <p className="text-white/60">by {product?.data()?.publisher}</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 md:gap-3">
                            <div className="w-full h-44 md:h-64 lg:h-[400px] relative overflow-hidden col-span-2 ">
                                <Image
                                    src={product?.data()?.thumbnail}
                                    alt={product?.data()?.title}
                                    width={1000}
                                    height={400}
                                    className="border border-white/30 rounded-lg overflow-hidden w-full h-44 md:h-64 lg:h-[400px] inset-0 absolute z-0"
                                />
                                <div className="absolute bottom-3 z-50 flex justify-center items-center w-full gap-2">
                                    <button className="bg-white/10 backdrop-blur-md border border-white/20 p-2 px-5 rounded-lg">Live Preview</button>
                                    <button className="bg-white/10 backdrop-blur-md border border-white/20 p-2 px-5 rounded-lg">Screenshot</button>
                                </div>
                            </div>

                            <div className="md:col-span-1 mt-3 md:mt-0 w-full mx-auto p-5 rounded-lg bg-white/10 h-fit">
                                <div className="flex justify-between">
                                    <p className="font-medium text-xl text-white/70">Regular License</p>
                                    <p className="font-bold text-3xl text-white/70">${product?.data()?.price}</p>
                                </div>
                                <div className="bg-white/20 h-[1px] w-full" />
                                <div className="flex items-center gap-2 mt-3">
                                    <FaCheck className="text-sm text-white/60" />
                                    <p className="text-white/60 text-sm">Quality checked by Syntax Team</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <FaCheck className="text-sm text-white/60" />
                                    <p className="text-white/60 text-sm">Future updates</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <FaCheck className="text-sm text-white/60" />
                                    <p className="text-white/60 text-sm">6 months support from the author</p>
                                </div>

                                <button className="w-full p-2 bg-[#1B436F] rounded-lg mt-3">Buy Now</button>
                                <p className="text-xs text-center text-white/50 mt-3">Price is in USDT and excludes tax and handling fees</p>
                            </div>
                        </div>

                        <div className="mt-3 lg:mt-10">
                            <p className="text-sm dark:text-white/70 text-justify bg-white/10 p-3 rounded-lg border-white/20 border">Lorem ipsum dolor sit {product?.data()?.description}</p>
                        </div>
                    </>
            }
        </div>
    )
}

export default details;