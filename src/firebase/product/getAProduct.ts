"use server";

import { doc, getDoc } from "firebase/firestore";
import { database } from "../configure";

async function getAProduct(id: string) {
    const docRef = doc(database, "product", id);
    const docs = await getDoc(docRef);
    return docs.data();
}

export default getAProduct;