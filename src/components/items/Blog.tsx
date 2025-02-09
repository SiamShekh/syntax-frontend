import Image from "next/image";

function Blog() {
    return (
        <div className="relative bg-white/10 rounded-xl overflow-hidden">
        <Image width={100} height={100} src={'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww'} alt="blog image" className="w-full h-52"/>

        <div className="p-3">
            <p className="font-medium text-sm line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam voluptates fugit labore, numquam recusandae in aliquid expedita saepe est, quis omnis nihil rem quod asperiores dolores nesciunt libero perferendis.</p>
            <p className="font-medium text-xs line-clamp-4 my-3 text-white/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam voluptates fugit labore, numquam recusandae in aliquid expedita saepe est, quis omnis nihil rem quod asperiores dolores nesciunt libero perferendis.</p>

            <div className="flex items-center gap-2 ">
                <div className="size-10 rounded-full bg-white/10"></div>
                <div className="">
                    <p className="font-medium">Siam Sheikh</p>
                    <p className="text-xs">20-09-2023</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Blog;