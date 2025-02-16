"use client";

import { database } from "@/firebase/configure";
import { unsubscribe } from "diagnostics_channel";
import { collection, doc, DocumentData, getDoc, query } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className="w-full min-h-screen">
            <div className="flex gap-3">
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                    additionalClass="flex-1"
                />
                <div className="flex-1">
                    <p className="text-5xl line-clamp-2 font-medium capitalize">Alpha Dogs telegram mini app</p>
                    <p className="text-sm line-clamp-3 my-8 dark:text-white/70">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, porro id aut dolorem dignissimos consectetur suscipit vel aperiam eum distinctio omnis harum. Sed modi soluta odit at nobis obcaecati. Soluta explicabo maxime deserunt minima assumenda libero magnam repellat cumque hic eius numquam autem harum quia ex, commodi sint delectus iure.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="lg:w-40">
                            <p className="dark:text-white/70">Current Price</p>
                            <p className="text-2xl font-medium">$90</p>
                        </div>
                        <div className="bg-white/10 w-full p-3 text-center rounded-lg">Buy Now</div>
                    </div>
                </div>
            </div>
            {/* <hr className="my-5" /> */}

            <div className="mt-10">
                <p className="text-2xl font-medium">Description:</p>
                <p className="text-sm dark:text-white/70">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo, esse minima perferendis ea voluptatum incidunt ut deleniti minus laudantium iure obcaecati, nostrum consectetur repellendus distinctio. Delectus accusamus quos beatae tempore ut alias dicta. Sed dolorum quisquam odit ab saepe fugiat exercitationem laborum dicta dignissimos architecto laboriosam qui, placeat laudantium hic! Totam ex sint, quam sed voluptatibus nemo exercitationem modi, dicta id repudiandae facilis obcaecati non, officiis dolores molestias doloribus eos maxime impedit ad! Commodi distinctio vero consequuntur et totam sunt cum fugiat aliquam modi incidunt nam, quisquam alias inventore dolore mollitia sint! Nihil hic, consequatur consectetur voluptate repellat facilis suscipit deleniti veniam nostrum ut ipsum accusantium voluptas. Maiores ipsam officiis accusamus beatae quis voluptatibus ipsum soluta culpa quod. Optio inventore expedita delectus aperiam suscipit aliquid eligendi quaerat repellendus minima quasi ut facilis porro, ullam debitis excepturi provident necessitatibus, aut, dolore quibusdam iste eaque reprehenderit. Adipisci dicta, possimus in non nesciunt at assumenda voluptate, vero nisi pariatur consequuntur corporis ut! Enim praesentium inventore labore hic cum eligendi vitae ratione facilis ex qui? Porro dolorem qui aspernatur inventore! Eligendi quia repellendus eos est illo officia hic voluptate reiciendis odit. Ab asperiores illo ex consequuntur? Neque assumenda, sit voluptate consequatur sed quo? Fugit sit, exercitationem neque fugiat veritatis architecto officiis rem sunt eos soluta explicabo ut, nobis expedita perferendis repellendus! Incidunt cum at non. Laudantium, nobis labore animi excepturi iusto exercitationem perferendis vitae repellendus sit sed enim ab magni dignissimos molestias corporis est id at nemo. Nam quos officiis omnis, laudantium obcaecati est quaerat animi alias odit quidem, magni provident delectus laboriosam fugit facere laborum nesciunt mollitia! Aliquid in ipsa incidunt dignissimos sunt omnis quo assumenda, earum ipsam eum fuga adipisci eveniet autem. Doloribus accusamus eius dolorum assumenda perferendis sit hic temporibus at iste reprehenderit tenetur, possimus inventore facere atque officiis fugiat, totam omnis quia, eligendi quae nihil. Enim cumque expedita consequatur vel aliquid. Cumque expedita quae eligendi, quis aperiam possimus. Voluptatibus iste provident totam iusto veniam pariatur! Voluptatum perspiciatis consequatur neque error tempora ipsam illum repellendus culpa veritatis. Repellendus, veritatis accusamus exercitationem alias quasi temporibus ex fugiat delectus culpa, doloremque, enim obcaecati? Corrupti quae, aperiam natus, vel tenetur animi nihil eos perspiciatis veniam explicabo esse adipisci id reprehenderit aliquam! Voluptatibus consequatur et dicta tempore deserunt fugit natus dolore nam veritatis aperiam omnis sequi quod fuga voluptatem sapiente, repellendus, ad iste! Facere pariatur vitae quia nobis exercitationem voluptatibus veritatis eos nemo ut alias sit voluptas cupiditate laudantium ab, iure praesentium? Molestias ex animi velit, dignissimos ipsam quos sed autem asperiores omnis neque corrupti, totam, suscipit doloremque distinctio blanditiis debitis. Libero eaque cumque culpa eligendi repudiandae aperiam eos, provident reprehenderit impedit commodi! Quo velit corporis ex, vel tenetur voluptate delectus, est possimus incidunt laborum molestias maxime at? Corporis hic corrupti dicta repellendus facilis minus aut dolor delectus sit fugit quas sequi tenetur, sint alias odio deleniti odit eum illo, asperiores perspiciatis consequatur accusantium commodi dolores! Facilis laborum corrupti, eos dicta ad earum id ab provident accusantium ut. Corrupti ut id quae voluptatibus necessitatibus!
                </p>
            </div>
        </div>
    )
}

export default details;