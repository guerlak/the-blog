import { PostModel } from "@/src/models/post/PostModel";
import { PostRepository } from "./IPostRepo";
import fs from "fs/promises";
import path from "path";

const SIMULATED_DELAY_TIME = 800;
const DB_PATH = path.join(process.cwd(), "src/db/seed/posts.json");

class JsonPostRepo implements PostRepository {

  private async _getPosts(): Promise<PostModel[]> {
    const content = await fs.readFile(DB_PATH, "utf-8");
    const db = JSON.parse(content);
    return db.posts;
  }
  
  async findAll(): Promise<PostModel[]> {
  
    const posts = await this._getPosts();
    if (!posts) {
      throw new Error("Posts not found");
    }
    return posts;
  }

  async findAllPublished() {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_TIME
    
    ));
    const posts = await this._getPosts();
    if (!posts) {
        throw new Error("Posts not found");
    }
    return posts.filter((post) => post.isPublished);
  }

  async findBySlug(slug: string): Promise<PostModel | null> {
    
    const posts = await this._getPosts();

    const post = posts.find((post) => post.slug === slug) || null;

    if (!post) {
        throw new Error("Post not found");
    }

    return post;
  }
}

export default JsonPostRepo;