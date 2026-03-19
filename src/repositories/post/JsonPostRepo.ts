import { PostModel } from "@/src/models/post/PostModel";
import { PostRepository } from "./IPostRepo";
import db from "@/src/db/seed/posts.json"

const  DELAY_TIME = 3000;

class JsonPostRepo implements PostRepository {



  async findAll() {

    await new Promise((resolve) => setTimeout(resolve, DELAY_TIME));

    const posts = db.posts;
    return posts;
  }
  
  async findOne(id: string): Promise<PostModel | null> {
    await new Promise((resolve) => setTimeout(resolve, DELAY_TIME));
    return db.posts.find((post) => post.id === id) || null;
  }

} 

export const jsonPostRepo:PostRepository = new JsonPostRepo();
