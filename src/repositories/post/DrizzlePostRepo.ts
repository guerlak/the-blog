import { PostModel } from "@/src/models/post/PostModel";
import { PostRepository } from "./IPostRepo";
import db from "@/src/db/drizzle";
import { postsTable } from "@/src/db/drizzle/schema";
import { eq } from "drizzle-orm";

class DrizzlePostRepo implements PostRepository {

  async findAll(): Promise<PostModel[]> {
    const postsResult = await db.query.postsTable.findMany(); 
    return postsResult;
  }

  async findAllPublic(): Promise<PostModel[]> {
   

    const posts = await db.query.postsTable.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.isPublished, true),
    });

    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {  
    const posts = await db.query.postsTable.findMany({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      where: (posts, { eq }) => eq(posts.isPublished, true),
    });

    return posts;
  }

  async findBySlug(slug: string): Promise<PostModel | null> {
    
    const post = await db.query.postsTable.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.isPublished, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado para slug');

    return post;    
  }
}

export default DrizzlePostRepo;