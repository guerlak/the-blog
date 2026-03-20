import { jsonPostRepo } from "@/src/repositories/post/JsonPostRepo";
import Image from "next/image";
import PostCard from "../PostCard";
import Link from "next/link";
import { Fragment } from "react";

export default async function PostsList() {
    const repo = jsonPostRepo;
    const res = await repo.findAll();

    if (!res || res.length === 0) return null;

    const featuredPost = res[0];
    const otherPosts = res.slice(1);

    return (
        <div className="flex flex-col gap-8 w-full">
            {/* Featured Post */}
            <Link href={`/posts/${featuredPost.id}`} className="py-10 p-4 overflow-hidden 
                    cursor-pointer 
                    justify-center 
                    flex items-center gap-6 border-b border-gray-100"
            >
                <Image
                    src={featuredPost.coverImageUrl || ""}
                    alt={featuredPost.title}
                    width={600}
                    height={450}
                    className="max-h-[400px] w-[600px] rounded 
                                hover:scale-105
                                transition-transform 
                                duration-300 
                                ease-in-out 
                                object-cover"
                />
                <div className="max-w-xl">
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Em alta</span>
                    <h2 className="text-4xl font-bold pb-5 mt-2">{featuredPost.title}</h2>
                    <p className="text-lg text-slate-500 leading-relaxed"> {featuredPost.excerpt}</p>
                </div>
            </Link>

            {/* Posts Grid */}
            <div className="flex flex-wrap gap-6 justify-center">
                {otherPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}