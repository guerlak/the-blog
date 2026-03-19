import { jsonPostRepo } from "@/src/repositories/post/JsonPostRepo";
import { SpinLoader } from "../SpinLoader";
import { Suspense } from "react";

export default async function PostsList() {
    const repo = jsonPostRepo;
    const res = await repo.findAll();

    return (
        <>
            {res.map((post) => (
                <div key={post.id} className="py-5">
                    <h2>{post.title}</h2>
                    <p className="text-sm"> {post.excerpt}</p>
                </div>
            ))}
        </>

    )
}