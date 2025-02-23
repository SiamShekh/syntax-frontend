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

function details() {
    // const { id } = useParams();
    // const [product, setProduct] = useState<DocumentData | undefined>(undefined);
    // console.log(id);

    // useEffect(() => {
    //     const unSubscribe = async () => {
    //         const pro = await getDoc(doc(database, "product", id as string));
    //         setProduct(pro);
    //     }
    //     unSubscribe();
    // },[id])

    // console.log(product?.data());

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
            <p  className="text-3xl mt-3 line-clamp-2 font-medium capitalize">CoolFrog Tap2Earn Clicker Game With Telegram Mini App + API + Bot</p>
            <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                    <p className="text-white/60">by Siam Sheikh</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div className="w-full h-[400px] relative overflow-hidden col-span-2 ">
                    <Image
                        src={'https://market-resized.envatousercontent.com/previews/files/511709748/coolfrog-coin-preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=9644987f98b514864e482e5d4f1c933d8e9a70396a4a2110d8ea0106414a022e'}
                        alt="image"
                        width={1000}
                        height={400}
                        className="border border-white/30 rounded-lg overflow-hidden w-full h-[400px] inset-0 absolute z-0"
                    />
                    <div className="absolute bottom-3 z-50 flex justify-center items-center w-full gap-2">
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 p-2 px-5 rounded-lg">Live Preview</button>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 p-2 px-5 rounded-lg">Screenshot</button>
                    </div>
                </div>

                <div className="col-span-1 p-5 rounded-lg bg-white/10 h-fit">
                    <div className="flex justify-between">
                        <p className="font-medium text-xl text-white/70">Regular License</p>
                        <p className="font-bold text-3xl text-white/70">$99</p>
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

            <div className="mt-10">
                <p className="text-sm dark:text-white/70 text-justify bg-white/10 p-3 rounded-lg border-white/20 border">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ipsam obcaecati, enim ducimus reprehenderit eligendi natus quo nam nesciunt temporibus dolorem perspiciatis recusandae asperiores aut? Hic, quidem impedit fugit velit magnam fuga sed ut beatae sunt quibusdam quo delectus magni adipisci assumenda? Maiores libero quisquam dolorum enim, itaque quibusdam. Similique doloremque cumque dolorum distinctio. Atque fugit, repellendus rem quod officia unde, quos voluptatem debitis voluptatum fuga necessitatibus reprehenderit culpa dolore facilis cum! Accusantium nulla eos maxime atque alias expedita enim beatae officia quisquam culpa excepturi cupiditate laboriosam quibusdam molestias temporibus, iste, a, corrupti placeat consequuntur. Veritatis explicabo sunt magnam maiores ullam consequatur et reprehenderit repellat suscipit impedit deserunt, doloribus provident porro sint assumenda totam, corporis nemo animi dicta. Ullam, alias laudantium. Eum, deleniti optio. Voluptates sint illum qui totam nostrum, harum fugit voluptatem et inventore ullam dolorum tempore odio placeat rerum nisi, nesciunt quam? Dolores similique tempora, laborum minus quia at error, eius nihil ullam inventore quasi suscipit eaque enim tenetur minima impedit fuga alias! Fugiat culpa perspiciatis sit esse tempora labore blanditiis tempore cum debitis accusamus, aut maiores cumque laudantium deleniti commodi repudiandae, minus harum earum totam expedita, magnam dolorem. Iure, veritatis autem consequatur porro maiores voluptatum tempore dignissimos?
                </p>
            </div>
        </div>
    )
}

export default details;