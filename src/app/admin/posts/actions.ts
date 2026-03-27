"use server";

import DrizzlePostRepo from "@/src/repositories/post/DrizzlePostRepo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  excerpt: z.string().min(1, "Excerpt is required"),
  author: z.string().min(1, "Author is required"),
  coverImageUrl: z.string().url("Invalid image URL"),
  content: z.string().min(1, "Content is required"),
  isPublished: z.boolean().default(false),
});

export async function createPostAction(formData: FormData) {
  const repo = new DrizzlePostRepo();
  
  const rawData = {
    title: formData.get("title"),
    slug: formData.get("slug"),
    excerpt: formData.get("excerpt"),
    author: formData.get("author"),
    coverImageUrl: formData.get("coverImageUrl"),
    content: formData.get("content"),
    isPublished: formData.get("isPublished") === "on",
  };

  const validatedData = postSchema.parse(rawData);

  await repo.create(validatedData);

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function deletePostAction(id: string) {

      await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(`Deleting post with ID: ${id}`)

  
    const repo = new DrizzlePostRepo();
    try{
        await repo.delete(id);
    }catch(error){
      console.error("Error deleting post:", error);
      throw error;
    }
    // Refresh the cache so the UI updates

    revalidatePath('/posts')
  
}