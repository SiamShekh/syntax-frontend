"use client";

import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../configure";

function useProduct() {
    const [product, setProduct] = useState<any>([]);

    useEffect(() => {
        const q = query(collection(database, "product"));

        const onSubscribe = onSnapshot(q, (snap) => {
            const data = snap.docs.map((item) => ({
                ...item.data(),
                id: item.id
            }));
            setProduct(data);
        })
        return ()=> onSubscribe();
    })

    return product;
}

export default useProduct;