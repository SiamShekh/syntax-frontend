import Product from "@/components/items/Product";
import Image from "next/image";
import { FaChevronRight, FaRocket } from "react-icons/fa";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
        <div className="flex-1">
          <p className="lg:text-7xl text-3xl font-bold text-white">Discover ready source code</p>
          <p className="lg:text-2xl mt-5 text-white/50">Get free or paid source code from a platform dedicated exclusively to code selling. It also provides guides and documentation on configuring the code.</p>
          <div className="hidden md:block">
            <button className="font-medium mt-5 bg-purple-500 px-4 py-2 rounded-md flex items-center gap-2">
              <FaRocket className="text-xl" /> Get start
            </button>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="flex justify-center items-center flex-col bg-white/10 py-3 rounded-lg">
                <p className="font-medium text-xl">10k+</p>
                <p className="lg:text-2xl text-white/60">Total sale</p>
              </div>
              <div className="flex justify-center items-center flex-col bg-white/10 py-3 rounded-lg">
                <p className="font-medium text-xl">100k+</p>
                <p className="lg:text-2xl text-white/60">Total User</p>
              </div>
              <div className="flex justify-center items-center flex-col bg-white/10 py-3 rounded-lg">
                <p className="font-medium text-xl">10k+</p>
                <p className="lg:text-2xl text-white/60">Customer</p>
              </div>
            </div>
          </div>

        </div>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl w-fit mx-auto relative overflow-hidden z-20">
            <Image src={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg'} width={300} height={200} alt="Cloud" className="object-cover md:w-60 md:h-48 lg:w-96 lg:h-80" />
            <div className="p-5">
              <p className="text-xl">Space Walking</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="size-10 bg-white/10 rounded-full"></div>
                <p>Siam Sheikh</p>
              </div>
            </div>
          </div>

          <div className="absolute size-64 lg:size-96 bg-blue-600 z-10 blur-2xl"></div>
        </div>

        <div className="w-full md:hidden">
          <button className="font-medium mt-5 w-full justify-center bg-purple-500 px-4 py-2 rounded-md flex items-center gap-2">
            <FaRocket className="text-xl" /> Get start
          </button>
          <div className="grid grid-cols-3 gap-4 mt-5 justify-between items-center mx-auto">
            <div className="flex justify-center items-center flex-col ">
              <p className="font-medium text-xl">10k+</p>
              <p className="lg:text-2xl text-white/60">Total sale</p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="font-medium text-xl">100k+</p>
              <p className="lg:text-2xl text-white/60">Total User</p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="font-medium text-xl">10k+</p>
              <p className="lg:text-2xl text-white/60">Customer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <p className="font-medium text-white text-xl">Best Products</p>
        <div className="flex items-center gap-1">
          View
          <FaChevronRight className="text-xs" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default page;