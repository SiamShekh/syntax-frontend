import Product from "@/components/items/Product";
import Image from "next/image";

function dashboard() {
    return (
        <div className="w-full">
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 relative w-full">
                <div className="md:col-span-2 lg:col-span-3">
                    <div className="w-full bg-black/10 dark:bg-white/10 rounded-lg p-2">
                        <div className="flex lg:flex-row flex-col">
                            <div className="flex-1 relative overflow-hidden">
                                <Image
                                    alt="image"
                                    width={200}
                                    height={200}
                                    className="w-full rounded-lg relative z-0"
                                    src={'https://i.guim.co.uk/img/media/b8a75934f827bdaf02a3814d1669c8da19886881/0_727_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1ad9e12c908d182c891b03abc19988f4'}
                                />
                                <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-b-lg w-full h-16 absolute bottom-0 left-0 z-20 flex justify-between items-center p-2">
                                    <div className="">
                                        <p className="text-black/60 dark:text-white/60 text-xs">Current Price</p>
                                        <p className="text-black dark:text-white font-bold text-xl">$99.99</p>
                                    </div>

                                    <button className="bg-black/10 dark:bg-white/10 px-6 py-2 rounded-lg font-medium">Buy Now</button>
                                </div>
                            </div>
                            <div className="flex-1 p-2 relative">
                                <p className="font-bold text-4xl">Telegram Nitro Mini App</p>
                                <p className="text-black/50 dark:text-white/50 my-4">a new telegram mini app source code with new ui and huge updated function, improve security and awesome user experiance and lot of new thing.</p>
                                <div className="lg:absolute bottom-2 left-2 w-full flex items-center gap-3">
                                    <div className="size-10 bg-black/10 dark:bg-white/10 rounded-full"></div>
                                    <div className="">
                                        <p>Siam Sheikh</p>
                                        <p className="capitalize text-black/60 dark:text-white/60 text-xs">publisher</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="md:sticky top-20 w-full right-0">
                        <div className="bg-black/10 dark:bg-white/10 rounded-lg p-3 w-full">
                            <p className="font-medium">Total <span className="text-blue-500">Finance</span></p>
                            <hr className="my-2" />
                            <div className="bg-black/10 dark:bg-white/10 p-2 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <p className="text-black/50 dark:text-white/50 text-xs">Total Sold</p>
                                    <p className="bg-black/10 dark:bg-white/10 w-fit px-2 rounded-full text-xs">+90%</p>
                                </div>
                                <p className="text-4xl font-medium mt-5">$4869,0</p>
                            </div>
                        </div>

                        <div className="bg-black/10 dark:bg-white/10 rounded-lg mt-5 p-2">
                            <p className="font-bold">History</p>

                            <div className="flex items-center gap-3 justify-between mt-3 bg-black/10 dark:bg-white/10 p-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <div className="size-10 rounded-full bg-black/10 dark:bg-white/10"></div>
                                    <div className="">
                                        <p className="line-clamp-1 font-bold">Telegram Ultra</p>
                                        <p className="line-clamp-1 text-xs text-black/50 dark:text-white/50 font-medium">Pub: Siam Sheikh</p>
                                    </div>
                                </div>
                                <p className="font-medium">$90.99</p>
                            </div>
                            <div className="flex items-center gap-3 justify-between mt-3 bg-black/10 dark:bg-white/10 p-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <div className="size-10 rounded-full bg-black/10 dark:bg-white/10"></div>
                                    <div className="">
                                        <p className="line-clamp-1 font-bold">Telegram Ultra</p>
                                        <p className="line-clamp-1 text-xs text-black/50 dark:text-white/50 font-medium">Pub: Siam Sheikh</p>
                                    </div>
                                </div>
                                <p className="font-medium">$90.99</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;