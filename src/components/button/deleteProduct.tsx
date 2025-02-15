"use client";

import { database } from "@/firebase/configure";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "sonner";

function DeleteProduct({ id }: { id: string }) {
    return (
        <button
            onClick={async () => {
                try {
                    toast.dismiss();
                    toast.loading("Deleting Product");
                    const d = doc(database, "product", id);
                    await deleteDoc(d);
                    toast.dismiss();
                    toast.success("Deleted, reload to go")
                } catch (error: any) {
                    toast.dismiss();
                    toast.error(error?.message || "Something went wrong")
                }
            }}
            className="dark:bg-white/10 bg-black/10 px-6 py-1 rounded-lg">Delete</button>
    )
}

export default DeleteProduct;