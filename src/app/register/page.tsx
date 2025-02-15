"use client";

import { createUser } from "@/firebase/user/createUser";
import { user } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";

function register() {

    const { register, handleSubmit } = useForm<user>({
        defaultValues: {
            "firstName": "Siam ",
            "lastName": "Sheikh",
            "email": "Siam62349@gmail.com",
            "password": "1234"
        }
    });

    const HandleRegister = async (e: user) => {
        toast.dismiss();
        toast.loading("Information submitted and waiting for a response.");

        const ref = await createUser(e);
        if (ref.isSuccess) {
            toast.dismiss();
            toast.success(ref.msg);
        } else {
            toast.dismiss();
            toast.error(ref.msg);
        }
    }

    return (
        <div className="min-h-screen lg:max-h-screen relative overflow-hidden">
            <div className="bg-white/10 overflow-hidden min-h-screen flex justify-between h-full">
                <Image src={"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg"} alt="login image" width={100} height={400} className="flex-[0.6] w-full object-cover hidden md:flex" />
                <div className="md:flex-[0.4] p-3 w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-medium">Syntax <span className="text-blue-400 border-b-2">Code</span></p>

                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-8">
                                    <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8">
                                    <img src="https://nft-monkey.com/wp-content/uploads/2023/03/2-1.png" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8">
                                    <img src="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8">
                                    <img src="https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w1024_r0.9975262832405689_fpx44.98_fpy48.86.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(HandleRegister)}>

                        <div className="">
                            <p className="text-xs font-medium my-2">First Name</p>
                            <input type="text" placeholder="First Name" {...register("firstName")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            <p className="text-xs font-medium my-2">Last Name</p>
                            <input type="text" placeholder="Last Name" {...register("lastName")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            <p className="text-xs font-medium my-2">Email</p>
                            <input type="text" placeholder="Email" {...register("email")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            <p className="text-xs font-medium my-2">Password</p>
                            <input type="text" placeholder="password" {...register("password")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <button className="px-6 py-2 border rounded-md mt-4 w-full capitalize flex items-center gap-2 justify-center">Register with google <FaGoogle /></button>
                        <div className="divider my-5">OR</div>
                        <button type="submit" className="px-6 py-2 bg-white/10 rounded-md w-full">Register</button>
                    </form>
                    <div className="text-center mt-3">
                        <Link href={'/login'}>Already have an account? <span className="font-medium text-red-500">Sign In</span></Link>
                    </div>

                    <div className="flex justify-center items-center mt-10 gap-5">
                        <Link href={'#'} className="text-white text-3xl">
                            <FaGoogle />
                        </Link>
                        <Link href={'#'} className="text-white text-3xl">
                            <FaTelegramPlane />
                        </Link>
                        <Link href={'#'} className="text-white text-3xl">
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register;