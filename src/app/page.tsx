
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import { SpinLoader } from "../components/SpinLoader";

export default async function Home() {
  return (
    <div className="text-3xl font-bold max-w-[1400] p-4 mx-auto min-h-screen">

      <Suspense fallback={<SpinLoader />}>

        <PostsList />
      </Suspense>
    </div>
  );
}
