import DrizzlePostRepo from "@/src/repositories/post/DrizzlePostRepo";

export const metadata = {
    title: "Create Post",

};

export default async function AdminPostNewPage() {

    const posts = await new DrizzlePostRepo().findById("1b6a5f57-8a19-4933-91f4-1af678464ded");

    console.log(posts);
    return (
        <div>
            <h1>Admin Post New</h1>
        </div>
    );
}   