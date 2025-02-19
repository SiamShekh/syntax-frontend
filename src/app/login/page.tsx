"use client";

import { loginUser } from "@/firebase/user/loginUser";
import { user } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";

function login() {
    // const searchParams = useSearchParams();
    // const redirectLink = searchParams.get('redirect');

    const { register, handleSubmit } = useForm<user>({
        defaultValues: {
            "email": "Siam62349@gmail.com",
            "password": "1234"
        }
    });

    const router = useRouter();
    // console.log();
    
    const HandleLogin = async (e: user) => {
        toast.dismiss();
        toast.loading("Loading");

        const res = await loginUser(e);
        if (res?.isSuccess) {
            toast.dismiss();
            toast.success(res.msg);
            router.push(window.location.search.split("?redirect=")[1] || '/dashboard');
        } else {
            toast.dismiss();
            toast.error(res?.msg);
        }
    }

    return (
        <div className="max-h-screen min-h-screen relative overflow-hidden ">
            <div className="bg-white/10 relative min-h-screen overflow-hidden flex justify-between h-full">
                <Image src={"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg"} alt="login image" width={500} height={500} className="flex-[0.6] w-full object-cover hidden md:flex" />
                <div className="md:flex-[0.4] p-3 w-full">
                    <form onSubmit={handleSubmit(HandleLogin)}>
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

                        <div className="lg:mt-20">
                            <p className="text-xs font-medium my-2">Email</p>
                            <input type="text" placeholder="Email" {...register("email")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs font-medium my-2">Password</p>
                            <input type="text" placeholder="Password" {...register("password")} className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <Link href={'#'} className="text-red-500 font-bold my-1 text-sm text-end">Forgot Password?</Link>
                        <button type="submit" className="px-6 py-2 bg-white/10 rounded-md w-full">Login</button>

                        <div className="text-center mt-3">
                            <Link href={'/register'}>Don't have an account? <span className="font-medium text-red-500">Sign up</span></Link>
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login;