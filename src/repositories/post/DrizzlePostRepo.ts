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

  async findById(id: string): Promise<PostModel | null> {
    const post = await db.query.postsTable.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para id');

    return post;    
  } 

  async create(post: Omit<PostModel, "id" | "createdAt" | "updatedAt">): Promise<PostModel> {
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newPost: PostModel = { ...post, id, createdAt, updatedAt };

    await db.insert(postsTable).values(newPost);
    return newPost;
  }

  async update(id: string, post: Partial<Omit<PostModel, "id" | "createdAt" | "updatedAt">>): Promise<PostModel> {
    const updatedAt = new Date().toISOString();
    
    await db.update(postsTable)
      .set({ ...post, updatedAt })
      .where(eq(postsTable.id, id));

    const updatedPost = await this.findById(id);
    if (!updatedPost) throw new Error("Post not found after update");
    return updatedPost;
  }

  async delete(id: string): Promise<void> {
      const res = await db.delete(postsTable).where(eq(postsTable.id, id));
      if(res.rowsAffected === 0){
        throw new Error("Post not found after delete");
      }
  }
}

export default DrizzlePostRepo; 