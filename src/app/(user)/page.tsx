import Product from "@/components/items/Product";
import Image from "next/image";
import { FaChevronRight, FaPhone, FaQuoteRight, FaRocket, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
              <div className="flex justify-center items-center flex-col dark:bg-white/10 bg-white/10 py-3 rounded-lg">
                <p className="font-medium text-xl">100k+</p>
                <p className="lg:text-2xl text-white/60">Total User</p>
              </div>
              <div className="flex justify-center items-center flex-col dark:bg-white/10 bg-white/10 py-3 rounded-lg">
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

          <div className="absolute size-64 lg:size-96 bg-blue-300 dark:bg-blue-600 z-10 blur-2xl"></div>
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

      <div className="my-10">
        <p className="bg-purple-500 font-medium px-6 py-2 rounded-xl text-black capitalize w-fit mx-auto">our testimonial</p>
        <p className="font-medium capitalize text-center text-3xl my-4">customer say about our service</p>

        <div className="flex items-center gap-7 md:gap-3 h-full md:flex-row flex-col">
          <div className="relative lg:size-80">
            {/* <img src="" alt="" /> */}
            {/* <div className="size-80 bg-white/10 rounded-xl"></div> */}
            <Image src={'https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg'} width={500} height={500} alt="Cloud" className="md:size-80 object-cover rounded-xl" />

            <div className="absolute backdrop-blur-2xl border border-white/30 cursor-pointer -bottom-4 left-[50%] -translate-x-[50%] bg-white/10 rounded-xl p-2 flex items-center px-5">
              <p>View</p>
            </div>
          </div>
          <div className="bg-purple-700 md:h-80 flex flex-col justify-center p-4 rounded-xl w-full h-full">
            <div className="flex justify-between items-center">
              <FaQuoteRight className="text-3xl" />
              <div className="from-transparent via-white/30 to-transparent bg-gradient-to-l p-1">
                <div className="rating rating-md">
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
            <p className="my-5 md:line-clamp-6 lg:line-clamp-none line-clamp-4">      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur facere, quam explicabo nesciunt eos possimus illum pariatur nemo! Accusamus totam in dicta, quo perferendis inventore magni beatae provident. Saepe maxime harum consectetur inventore, accusamus corporis facilis, ipsam quisquam fugiat eaque, laborum expedita dolorum! Consequatur eum eius, velit distinctio beatae perferendis.
            </p>
            <div className="flex items-center gap-3">
              <div className="size-10 bg-white/10 rounded-full"></div>
              <div className="">
                <p className="text-white font-medium">Siam Sheikh</p>
                <p className="text-white/60">User</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-3xl capitalize font-medium text-center">get in touch</p>
        <p className="md:w-1/2 text-white/60 mx-auto text-center">Contact the team if you have any questions, want to hire a development team, or need anything else. Come on and reach out!</p>
        <div className="bg-white/10 p-2 rounded-xl flex  gap-2 mt-5 flex-col md:flex-row">
          <div className="bg-[#004D03] p-3 rounded-xl flex-[0.3]">
            <p className="text-white text-xl font-medium">Contact Informission</p>
            <p className="text-white/50 text-xs">Contact us and let's collaborate!</p>
            <div className="flex items-center gap-1 text-white my-3">
              <FaTelegramPlane className="text-2xl" />
              <p className="text-sm text-white/70">@siam</p>
            </div>
            <div className="flex items-center gap-1 text-white my-3">
              <MdEmail className="text-2xl" />
              <p className="text-sm text-white/70">email@siam.com</p>
            </div>
            <div className="flex items-center gap-1 text-white my-3">
              <FaPhone className="text-2xl" />
              <p className="text-sm text-white/70">+880 1636446338</p>
            </div>
            <p className="text-white/50 text-xs mt-8">Contact me through any social media for the fastest response. You can also reach me via email, phone, or Telegram.</p>
          </div>
          <div className="w-full p-5 flex-[0.7]">
            <div className="flex items-center justify-between gap-3 flex-col w-full md:flex-row">
              <div className="flex flex-col flex-1 w-full ">
                <label className="text-xs text-white/70">First Name</label>
                <input type="text" className="bg-transparent outline-none border-b border-white/30 text-white" />
              </div>
              <div className="flex flex-col flex-1 w-full">
                <label className="text-xs text-white/70">Last Name</label>
                <input type="text" className="bg-transparent outline-none border-b border-white/30 text-white" />
              </div>
            </div>
            <div className="flex flex-col my-3">
              <label className="text-xs text-white/70">Email</label>
              <input type="text" className="bg-transparent outline-none border-b border-white/30 text-white" />
            </div>

            <div className="flex flex-col my-3">
              <label className="text-xs text-white/70">Messsage</label>
              <textarea  className="bg-transparent outline-none border-b border-white/30 text-white" />
            </div>

            <button className="bg-[#740774] text-white px-5 py-2 font-medium rounded-xl">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;