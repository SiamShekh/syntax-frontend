import Product from "@/components/items/Product";

function marketplace() {
    return (
        <div className="">
            <div className="flex justify-between items-center ">
                <p className="font-medium text-white hidden md:flex">Product: 90</p>
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item hidden lg:flex">
                        <option disabled selected>Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary lg:flex hidden">new</span>
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 my-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default marketplace;