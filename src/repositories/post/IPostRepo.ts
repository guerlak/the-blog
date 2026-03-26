import { PostModel } from "@/src/models/post/PostModel";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublished(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel | null>;
}