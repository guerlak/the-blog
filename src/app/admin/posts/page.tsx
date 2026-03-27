import DrizzlePostRepo from "@/src/repositories/post/DrizzlePostRepo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Plus, Edit, ExternalLink, FileText, Calendar, LayoutDashboard } from "lucide-react";
import { format } from "date-fns";
import AdminDeleteBtn from "../AdminDeleteBtn";

export const dynamic = "force-dynamic";

export default async function AdminPostPage() {
    const posts = await new DrizzlePostRepo().findAll();

    return (
        <div className="p-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-8">
                <div className="space-y-1">
                    <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 flex items-center gap-3">
                        <LayoutDashboard className="w-8 h-8 text-blue-600" />
                        Admin Posts
                    </h1>
                    <p className="text-stone-500 text-sm font-medium">
                        Manage your blog content, drafts, and published articles.
                    </p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600
                     hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95 group"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    Create New Post
                </Link>
            </div>

            {/* Posts List */}
            <div className="grid gap-4">
                {posts.length === 0 ? (
                    <div className="text-center p-20 border-2 border-dashed border-stone-200 rounded-2xl bg-stone-50/50">
                        <FileText className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-stone-600">No posts found</h3>
                        <p className="text-stone-500 mb-6">Start by creating your first spectacular article.</p>
                        <Link
                            href="/admin/posts/new"
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Create yours now &rarr;
                        </Link>
                    </div>
                ) : (
                    posts.map((post) => (
                        <div
                            key={post.id}
                            className="group relative flex flex-col sm:flex-row sm:items-center
                             justify-between p-5 bg-white border border-stone-200 rounded-xl
                              shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                        >
                            <div className="flex-1 space-y-2">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-bold text-stone-800 line-clamp-1
                                     group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <span
                                        className={cn(
                                            "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ring-1",
                                            post.isPublished
                                                ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                                                : "bg-amber-50 text-amber-700 ring-amber-200"
                                        )}
                                    >
                                        {post.isPublished ? "Published" : "Draft"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-stone-500">
                                    <span className="flex items-center gap-1.5 capitalize">
                                        <FileText className="w-4 h-4" />
                                        {post.author || "Unknown"}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        {post.createdAt ? format(new Date(post.createdAt), "MMM d, yyyy") : "No date"}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 mt-4 sm:mt-0 opacity-100 sm:opacity-0
                             group-hover:opacity-100 transition-opacity duration-200">
                                <Link
                                    href={`/post/${post.slug}`}
                                    className="p-2.5 text-stone-400 hover:text-blue-600 hover:bg-blue-50
                                     rounded-lg transition-colors border border-transparent hover:border-blue-100"
                                    title="View Post"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={`/admin/posts/edit/${post.id}`}
                                    className="p-2.5 text-stone-400 hover:text-indigo-600 hover:bg-indigo-50
                                     rounded-lg transition-colors border border-transparent hover:border-indigo-100"
                                    title="Edit Post"
                                >
                                    <Edit className="w-5 h-5" />
                                </Link>
                                <AdminDeleteBtn id={post.id} title={post.title} />
                                {/* <form
                                    action={deletePost.bind(null, post.id)}
                                >
                                    <button
                                        type="submit"
                                        className="p-2.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg 
                                        transition-colors border border-transparent hover:border-rose-100 cursor-pointer"
                                        title="Delete Post"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </form> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}