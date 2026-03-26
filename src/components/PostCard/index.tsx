import { PostModel } from "@/src/models/post/PostModel";
import { formatDateTime } from "@/src/utils/format-datetime";
import Image from "next/image";
import Link from "next/link";

export default async function PostCard({ post }: { post: PostModel }) {

    return (
        <Link href={`/post/${post.slug}`} className="py-5 max-w-[400px] border border-gray-200 rounded-lg p-4 group overflow-hidden cursor-pointer w-full h-full">
            <div className="text-stone-600 text-sm">{formatDateTime(post.createdAt)}</div>
            <h2 className="text-xl/relaxed py-5 ">{post.title}</h2>
            <Image src={post.coverImageUrl || ""} alt={post.title} width={400} height={300}
                className="rounded 
                group-hover:scale-105
                transition-transform 
                duration-300 
                ease-in-out 
                object-cover
                object-center
                " />
            <p className="text-sm py-4 text-slate-500"> {post.excerpt}</p>
        </Link>
    )
}