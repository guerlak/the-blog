import { PostModel } from "@/src/models/post/PostModel";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublished(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
  findBySlug(slug: string): Promise<PostModel | null>;
}