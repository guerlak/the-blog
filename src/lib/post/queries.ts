import { drizzlePostRepo } from "@/src/repositories/post/DrizzlePostRepo";
import { cache } from "react";

export const postQueries = {
    findAllPublishedPostsCached: cache(async () => {
        return await drizzlePostRepo.findAllPublished();
    }),
    findPostBySlugCached: cache(async (slug: string) => {
        return await drizzlePostRepo.findBySlug(slug);
    })
}   