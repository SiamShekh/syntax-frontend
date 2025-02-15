"use server";

import { product } from "@/types/types";
import { database } from "../configure";
import { doc, updateDoc } from "firebase/firestore";

interface pro extends product {
    id: string
}

export async function updateProduct({ price, publisher, thumbnail, title, description, documention, images1, images2, images3, images4, video, id }: pro) {
    try {
        const d = doc(database, "product", id);
        await updateDoc(d, {
            price, publisher, thumbnail, title, description, documention, images1, images2, images3, images4, video
        });

        return {
            isSuccess: true,
            msg: "Product Updated"
        }
    } catch (error: any) {
        return {
            isSuccess: false,
            msg: error?.message || 'Something went wrong'
        }
    }
}