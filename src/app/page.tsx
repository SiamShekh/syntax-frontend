import Image from "next/image";
import { FaRocket } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-5 flex-col md:flex-row p-3">
        <div className="flex-1">
          <p className="lg:text-7xl text-3xl font-bold text-white">Discover digital art & Collect NFTs</p>
          <p className="lg:text-2xl mt-5 text-white/50">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <div className="hidden md:block">
            <button className="font-medium mt-5 bg-purple-500 px-4 py-2 rounded-md flex items-center gap-2">
              <FaRocket className="text-xl" /> Get start
            </button>
            <div className="grid grid-cols-3 gap-4 mt-5">
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
        <div className="flex-1">
          <div className="bg-white/10 rounded-2xl w-fit mx-auto relative overflow-hidden">
            <Image src={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg'} width={300} height={200} alt="Cloud" className="object-cover md:w-60 md:h-48 lg:w-96 lg:h-80" />
            <div className="p-5">
              <p className="text-xl">Space Walking</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="size-10 bg-white/10 rounded-full"></div>
                <p>Siam Sheikh</p>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default page;