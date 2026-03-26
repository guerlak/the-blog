
import Image from "next/image";
import PostCard from "../PostCard";
import Link from "next/link";
import { formatDateTime } from "@/src/utils/format-datetime";
import { postQueries } from "@/src/lib/post/queries";

export default async function PostsList() {
    const res = await postQueries.findAllPublishedPostsCached();

    if (!res || res.length === 0) return null;

    const featuredPost = res[0];
    const otherPosts = res.slice(1);

    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Featured Post */}

            <Link href={`/post/${featuredPost.slug}`} className="py-10 p-4 overflow-hidden 
                    cursor-pointer 
                    justify-center 
                    flex flex-col items-center gap-6 border-b border-gray-100 sm:flex-row"
            >
                <Image
                    src={featuredPost.coverImageUrl || ""}
                    alt={featuredPost.title}
                    width={600}
                    height={450}
                    className="max-h-[400px] 
                                w-[600px] 
                                rounded 
                                hover:scale-105
                                transition-transform 
                                duration-300 
                                ease-in-out 
                                object-cover"
                />
                <div className="max-w-xl">

                    <div className="text-blue-600 font-semibold text-sm uppercase tracking-wider py-4">Em alta</div>
                    <div className="text-stone-600 text-sm">{formatDateTime(featuredPost.createdAt)}</div>
                    <h2 className="text-4xl font-bold pb-5 mt-2">{featuredPost.title}</h2>
                    <p className="text-lg text-slate-500 leading-relaxed"> {featuredPost.excerpt}</p>
                </div>
            </Link >

            {/* Posts Grid */}
            < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mx-auto" >
                {
                    otherPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div >
        </div >
    )
}