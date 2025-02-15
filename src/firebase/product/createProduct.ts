"use server";

import { product } from "@/types/types";
import { database } from "../configure";
import { addDoc, collection } from "firebase/firestore";

export async function createProduct({ price, publisher, thumbnail, title, description, documention, images1, images2, images3, images4, video }: product) {
    try {
        const ref = await addDoc(collection(database, "product"), {
            price, publisher, thumbnail, title, description, documention, images1, images2, images3, images4, video
        });
        if (ref.id) {
            return {
                isSuccess: true,
                msg: "New product created"
            }
        }
    } catch (error: any) {
        return {
            isSuccess: false,
            msg: error?.message || 'Something went wrong'
        }
    }
}