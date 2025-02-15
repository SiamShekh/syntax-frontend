import CreateNewProduct from "@/components/modal/CreateNewProduct";

function product() {
    return (
        <div className="w-full p-2">
            <div className="flex justify-between items-center w-full dark:bg-white/10 rounded-lg p-2">
                <p className="font-medium capitalize">Create new product</p>
                <CreateNewProduct />
            </div>
        </div>
    )
}

export default product;