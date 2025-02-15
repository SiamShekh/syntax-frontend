"use client";

import { createProduct } from "@/firebase/product/createProduct";
import { product } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function CreateNewProduct() {
    const [open, setModal] = useState(false);

    const { register, handleSubmit } = useForm<product>({
        defaultValues: {
            "title": "mini crop",
            "thumbnail": "thumb",
            "publisher": "publis87",
            "price": "78",
            "description": "ami tomi ar k go",
            "documention": "doc em",
            "images1": "img2",
            "images2": "eiwh9",
            "images3": "hi",
            "images4": "9u",
            "video": "i"
        }
    });

    const HandleCreate = async (e: product) => {
        setModal(false);
        toast.dismiss();
        toast.loading("Loading");
        const ref = await createProduct(e);
        if (ref?.isSuccess) {
            toast.dismiss();
            toast.success(ref.msg);
        } else {
            toast.dismiss();
            toast.error(ref?.msg);
        }
    }

    return (
        <div className="relative z-50">
            <button
                className="dark:bg-white/10 px-6 py-1 rounded-xl capitalize"
                onClick={() => {
                    setModal(true)
                }}
            >create</button>

            <dialog open={open} className="modal">
                <div className="modal-box dark:bg-[#252424] rounded-2xl">
                    <form method="dialog">
                        <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit(HandleCreate)}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Title</span>
                            </div>
                            <input required={true} type="text" placeholder="title" {...register("title")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Thumbnail</span>
                            </div>
                            <input required={true} type="text" placeholder="thumbnail" {...register("thumbnail")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Publisher</span>
                            </div>
                            <input required={true} type="text" placeholder="publisher" {...register("publisher")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input required={true} type="text" placeholder="price" {...register("price")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <input required={true} type="text" placeholder="description" {...register("description")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Documention</span>
                            </div>
                            <input required={true} type="text" placeholder="documention" {...register("documention")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Images 1</span>
                            </div>
                            <input required={true} type="text" placeholder="images" {...register("images1")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Images 2</span>
                            </div>
                            <input required={true} type="text" placeholder="images" {...register("images2")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Images 3</span>
                            </div>
                            <input required={true} type="text" placeholder="images" {...register("images3")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Images 4</span>
                            </div>
                            <input required={true} type="text" placeholder="images" {...register("images4")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Video</span>
                            </div>
                            <input required={true} type="text" placeholder="video" {...register("video")} className="input input-bordered w-full dark:bg-white/10 rounded-xl" />
                        </label>

                        <button type="submit" className="w-full py-2 bg-white/10 rounded-xl mt-3">Create Product</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default CreateNewProduct;