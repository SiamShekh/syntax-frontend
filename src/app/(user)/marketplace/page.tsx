import { database } from "@/firebase/configure";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

async function marketplace() {
    const q = query(collection(database, "product"));
    const product = await getDocs(q);

    return (
        <div className="min-h-screen">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-3">
                {
                    product.docs.map((product, i) => (
                        <div className="dark:bg-white/10 bg-black/10 rounded-xl border border-white/10" key={i}>
                            <div className="">
                                <Image draggable={false} src={product.data().thumbnail} width={800} height={80} alt={product.data().title} className="h-48 lg:h-56 rounded-xl" />
                                <div className="p-2">
                                    <div className="mb-3">
                                        <p className="font-medium text-black dark:text-white line-clamp-1">{product.data().title}</p>
                                        <p className="dark:text-white/60 text-black/60 text-xs">by {product.data().publisher}</p>
                                    </div>
                                    <p className="text-black dark:text-white font-medium">${product.data().price}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <div className="flex items-center gap-2">
                                                <div className="rating rating-sm">
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input
                                                        type="radio"
                                                        name="rating-6"
                                                        className="mask mask-star-2 bg-orange-400"
                                                        defaultChecked />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                                <p className="text-white/60 text-sm">(4)</p>
                                            </div>
                                            <p className="text-white/60 text-sm my-2 font-medium">20 Sales</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Link className="py-2 px-8 border rounded-lg hover:bg-white hover:text-black duration-500" href={`/marketplace/${product.id}`}>View Preview</Link>
                                        </div>
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