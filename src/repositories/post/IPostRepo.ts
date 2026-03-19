import { PostModel } from "@/src/models/post/PostModel";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findOne(id: string): Promise<PostModel | null>;
}