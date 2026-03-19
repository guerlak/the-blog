
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import { jsonPostRepo } from "../repositories/post/JsonPostRepo";
import { SpinLoader } from "../components/SpinLoader";
export default async function Home() {
  return (
    <div className="text-3xl font-bold max-w-[1400] p-4 mx-auto text-center">
      <h1>Posts List</h1>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
