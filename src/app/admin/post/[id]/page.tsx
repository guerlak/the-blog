import DrizzlePostRepo from "@/src/repositories/post/DrizzlePostRepo";

export const metadata = {
    title: "Edit Post",

};

export default async function AdminPostIdPage() {

    const post = await new DrizzlePostRepo().findById("1b6a5f57-8a19-4933-91f4-1af678464ded");


    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    );
}   