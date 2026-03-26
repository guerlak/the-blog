import { jsonPostRepo } from "@/src/repositories/post/JsonPostRepo";
import { cache } from "react";

export const postQueries = {
    findAllPublishedPostsCached: cache(async () => {
        return await jsonPostRepo.findAllPublished();
    }),
    findPostBySlugCached: cache(async (slug: string) => {
        return await jsonPostRepo.findBySlug(slug);
    })
}   