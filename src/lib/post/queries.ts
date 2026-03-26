import { postRepository } from "@/src/repositories/post";
import { cache } from "react";

export const postQueries = {
    findAllPublishedPostsCached: cache(async () => {
        return await postRepository.findAllPublished();
    }),
    findPostBySlugCached: cache(async (slug: string) => {
        return await postRepository.findBySlug(slug);
    })
}   