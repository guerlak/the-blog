import { PostModel } from "@/src/models/post/PostModel";

export interface PostRepository {
  findAllPublished(): Promise<PostModel[]>;
  findBySlug(slug: string): Promise<PostModel | null>;
}