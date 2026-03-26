import { PostModel } from "@/src/models/post/PostModel";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublished(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel | null>;
  findBySlug(slug: string): Promise<PostModel | null>;
  create(post: Omit<PostModel, "id" | "createdAt" | "updatedAt">): Promise<PostModel>;
  update(id: string, post: Partial<Omit<PostModel, "id">>): Promise<PostModel>;
  delete(id: string): Promise<void>;
}