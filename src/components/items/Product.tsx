import Image from "next/image";
import { IoIosPricetag } from "react-icons/io";

const Product = () => {

    return (
        <div className="dark:bg-white/10 bg-black/10 p-2 rounded-xl">
            <div className="">
                <Image src={"https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_640.png"} width={800} height={100} alt={'item?.title'} className="object-cover h-48 lg:h-52 rounded-xl" />
                <div className="my-3">
                    <p className="font-medium text-black dark:text-white">{'Alpha Dogs'}</p>
                    <p className="dark:text-white/60 text-black/60 text-xs">by {'Siam Sheikh'}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex-1">
                        <p className="dark:text-white/60 text-black/60">Price</p>
                        <div className="flex items-center gap-2">
                            <IoIosPricetag />
                            <p className="text-black dark:text-white">$90</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center">
                        <button className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Buy</button>
                        {/* <button onClick={() => deleteProduct(product.id)} className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-md">Delete</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;