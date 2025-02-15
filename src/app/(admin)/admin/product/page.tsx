import Product from "@/components/items/Product";
import CreateNewProduct from "@/components/modal/CreateNewProduct";
import { database } from "@/firebase/configure";
import { collection, doc, getDocs, limit, query, updateDoc } from "firebase/firestore";

async function product() {
    const collections = collection(database, "product");
    const q = query(collections, limit(10));
    const allProduct = await getDocs(q);
    
    return (
        <div className="w-full p-2">
            <div className="flex justify-between items-center w-full dark:bg-white/10 rounded-lg p-2">
                <p className="font-medium capitalize">Create new product</p>
                <CreateNewProduct />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 my-5">
                {
                    allProduct.docs.map((product, i: number) => (
                        <Product product={product} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default product;