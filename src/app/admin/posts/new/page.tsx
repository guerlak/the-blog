import { ArrowLeft, Send, Image as ImageIcon, Type, Link as LinkIcon, User, Layers, FileText } from "lucide-react";
import Link from "next/link";
import { createPost } from "../actions";

export const metadata = {
    title: "Create New Post | Admin",
};

export default function AdminPostNewPage() {
    return (
        <div className="max-w-4xl mx-auto p-8 space-y-10 animate-in slide-in-from-bottom-5 duration-700">
            {/* Header */}
            <div className="flex flex-col gap-4 border-b pb-8 border-stone-100">
                <Link 
                    href="/admin/posts"
                    className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors w-fit text-sm font-semibold group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Posts
                </Link>
                <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
                    Write Something Spectacular
                </h1>
                <p className="text-stone-500 font-medium">
                    Fill in the details below to create your new masterpiece.
                </p>
            </div>

            {/* Form */}
            <form action={createPost} className="space-y-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Title */}
                    <div className="space-y-2 col-span-full">
                        <label htmlFor="title" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <Type className="w-4 h-4 text-blue-500" />
                            Post Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            placeholder="A Catchy and Informative Title..."
                            className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all text-xl font-bold bg-stone-50/30"
                        />
                    </div>

                    {/* Slug */}
                    <div className="space-y-2">
                        <label htmlFor="slug" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <LinkIcon className="w-4 h-4 text-indigo-500" />
                            Target Slug
                        </label>
                        <input
                            type="text"
                            name="slug"
                            id="slug"
                            required
                            placeholder="my-great-post-title"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all font-mono text-sm"
                        />
                    </div>

                    {/* Author */}
                    <div className="space-y-2">
                        <label htmlFor="author" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <User className="w-4 h-4 text-emerald-500" />
                            Author Name
                        </label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            required
                            placeholder="Guerlak"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 outline-none transition-all"
                        />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2 col-span-full">
                        <label htmlFor="excerpt" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <Layers className="w-4 h-4 text-amber-500" />
                            Short Summary
                        </label>
                        <textarea
                            name="excerpt"
                            id="excerpt"
                            required
                            rows={3}
                            placeholder="A brief teaser to captivate your readers..."
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:ring-4 focus:ring-amber-50 focus:border-amber-500 outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Cover Image URL */}
                    <div className="space-y-2 col-span-full">
                        <label htmlFor="coverImageUrl" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <ImageIcon className="w-4 h-4 text-rose-500" />
                            Cover Image URL
                        </label>
                        <input
                            type="url"
                            name="coverImageUrl"
                            id="coverImageUrl"
                            required
                            placeholder="https://images.unsplash.com/your-image..."
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:ring-4 focus:ring-rose-50 focus:border-rose-500 outline-none transition-all"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-2 col-span-full">
                        <label htmlFor="content" className="text-sm font-bold text-stone-700 flex items-center gap-2 uppercase tracking-wide">
                            <FileText className="w-4 h-4 text-violet-500" />
                            Post Content (Markdown)
                        </label>
                        <textarea
                            name="content"
                            id="content"
                            required
                            rows={15}
                            placeholder="Dive deep into your story here..."
                            className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:ring-4 focus:ring-violet-50 focus:border-violet-500 outline-none transition-all font-sans leading-relaxed"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-stone-100">
                    <div className="flex items-center gap-3 bg-stone-50 px-4 py-2.5 rounded-full border border-stone-200">
                        <input
                            type="checkbox"
                            name="isPublished"
                            id="isPublished"
                            className="w-5 h-5 rounded-md border-stone-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="isPublished" className="text-sm font-bold text-stone-600 cursor-pointer select-none">
                            Publish immediately
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-900 hover:bg-black text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all active:scale-95 group"
                    >
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Create Publication
                    </button>
                </div>
            </form>
        </div>
    );
}