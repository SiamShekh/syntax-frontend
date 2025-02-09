import Image from "next/image";

function register() {
    return (
        <div className="">
            <div className="bg-white/10 overflow-hidden rounded-xl flex justify-between h-full">
                <Image src={"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622024.jpg"} alt="login image" width={100} height={400} className="flex-1 h-full w-full object-cover hidden lg:flex" />
                <div className="flex-1 p-3">
                    <form>
                        <p className="font-medium text-3xl text-center my-3">Register</p>
                        <div className="">
                            <p className="text-xs font-medium my-2">First Name</p>
                            <input type="text" placeholder="Email" className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            <p className="text-xs font-medium my-2">Last Name</p>
                            <input type="text" placeholder="Email" className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            <p className="text-xs font-medium my-2">Email</p>
                            <input type="text" placeholder="Email" className="outline-none bg-transparent border border-white/30 p-2 rounded-md w-full" />
                        </div>
                        <button className="px-6 py-1 bg-white/10 rounded-md mt-4">Register</button>

                        <p className="mt-4 text-xs text-white/40">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro corporis ullam quas assumenda debitis unde aut mollitia ab qui. Aspernatur, beatae necessitatibus illo, quis velit debitis dolore in repudiandae, dolorum molestiae dignissimos ipsum possimus odio. Maxime obcaecati impedit voluptas sed inventore adipisci repellendus est sunt. Ratione laborum eius esse harum dolorem illum neque, obcaecati soluta corrupti minus dignissimos, deleniti expedita. Repudiandae odio laborum eveniet dolore vel cupiditate impedit velit accusantium veniam labore, fuga illo quo tempore? Numquam cumque reprehenderit repudiandae porro perferendis odit eaque doloribus dicta ut omnis exercitationem ullam quasi, aut, labore veniam at! Magni aut atque quas voluptas.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default register;