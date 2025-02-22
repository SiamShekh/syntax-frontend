"use client";

import SyntaxInput from "@/components/input/SyntaxInput";
import getAProduct from "@/firebase/product/getAProduct";
import { updateProduct } from "@/firebase/product/updateProduct";
import { product } from "@/types/types";
import { DocumentData } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const page = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<product | DocumentData | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = async () => {
            const data = await getAProduct(id as string);
            setProduct(data);
            setLoading(false);
        }
        unSubscribe();
    }, [loading]);

    const method = useForm<product>();

    const productFields = [
        { id: "title", label: "Enter product title", type: "text", placeHolder: "Product Title", isRequired: true },
        { id: "thumbnail", label: "Enter thumbnail URL", type: "text", placeHolder: "Thumbnail URL", isRequired: true },
        { id: "publisher", label: "Enter publisher", type: "text", placeHolder: "Publisher Name", isRequired: true },
        { id: "price", label: "Enter price", type: "number", placeHolder: "Product Price", isRequired: true },
        { id: "documention", label: "Enter documentation", type: "text", placeHolder: "Documentation Link", isRequired: false },
        { id: "images1", label: "Enter image 1 URL", type: "text", placeHolder: "Image 1 URL", isRequired: false },
        { id: "images2", label: "Enter image 2 URL", type: "text", placeHolder: "Image 2 URL", isRequired: false },
        { id: "images3", label: "Enter image 3 URL", type: "text", placeHolder: "Image 3 URL", isRequired: false },
        { id: "images4", label: "Enter image 4 URL", type: "text", placeHolder: "Image 4 URL", isRequired: false },
        { id: "video", label: "Enter video URL", type: "text", placeHolder: "Video URL", isRequired: false },
    ];

    useEffect(() => {
        method.reset(product);
    }, [product])

    const handler = async (e: product) => {
        toast.dismiss();
        toast.loading("Loading");
        const ref = await updateProduct({ ...e, id: id as string });
        if (ref?.isSuccess) {
            toast.dismiss();
            toast.success(ref.msg);
            method.reset();
            setLoading(true);
        } else {
            toast.dismiss();
            toast.error(ref?.msg);
        }
    }

    return (
        <div className="p-3">
            <p className="font-medium mb-5">Update Products</p>
            {
                loading ?
                    <div className="flex justify-center items-center w-full mt-20">
                        <span className="loading loading-spinner loading-lg mx-auto" />
                    </div> :
                    <FormProvider {...method}>
                        <div className="grid grid-cols-1 gap-4 w-full">
                            <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full" onSubmit={method.handleSubmit(handler)}>
                                {
                                    productFields.map((input, i) => (
                                        <SyntaxInput
                                            isDisabled={!product?.title}
                                            key={i}
                                            type={input.type}
                                            id={input.id}
                                            label={input.label}
                                            placeHolder={input.placeHolder}
                                            isRequired={input.isRequired}
                                        />
                                    ))
                                }
                                <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
                                    <label className="text-xs font-medium text-white/60">Enter description</label>
                                    <textarea placeholder={"description"} {...method.register("description")} className={`bg-white/10 p-2 rounded-lg border border-white/20 outline-none text-white placeholder:text-sm placeholder:capitalize`} />
                                </div>
                                <button type="submit" className="md:col-span-2 lg:col-span-3 bg-white p-2 rounded-lg font-medium text-black text-center">Update</button>
                            </form>
                        </div>
                    </FormProvider>
            }
        </div>
    );
};

export default page;