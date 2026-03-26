import Image from "next/image";
import PostCard from "../PostCard";
import Link from "next/link";
import { formatDateTime } from "@/src/utils/format-datetime";
import { postQueries } from "@/src/lib/post/queries";
import { TrendingUp, Sparkles, Clock, ArrowRight } from "lucide-react";

export default async function PostsList() {
    const res = await postQueries.findAllPublishedPostsCached();

    if (!res || res.length === 0) return (
        <div className="py-20 text-center animate-pulse">
            <Sparkles className="w-12 h-12 text-stone-200 mx-auto mb-4" />
            <p className="text-stone-400 font-medium">Coming soon...</p>
        </div>
    );

    const featuredPost = res[0];
    const otherPosts = res.slice(1);

    return (
        <div className="flex flex-col gap-20 w-full pb-20 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Featured Post */}
            <section className="relative group">
                <Link 
                    href={`/post/${featuredPost.slug}`} 
                    className="flex flex-col lg:flex-row items-stretch gap-10 bg-stone-50/50 rounded-[2.5rem] p-6 lg:p-10 border border-stone-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50/50"
                >
                    <div className="relative flex-1 overflow-hidden rounded-[2rem] aspect-16/10 lg:aspect-auto shadow-2xl shadow-stone-200">
                        <Image
                            src={featuredPost.coverImageUrl || ""}
                            alt={featuredPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-[0.2em]">
                            <TrendingUp className="w-4 h-4" />
                            Featured Article
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-4xl xl:text-5xl font-extrabold text-stone-900 leading-[1.1] tracking-tight group-hover:text-blue-600 transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-stone-500 text-lg lg:text-xl leading-relaxed font-medium line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-stone-200/60">
                            <div className="flex items-center gap-2 text-stone-400 text-sm font-bold">
                                <Clock className="w-4 h-4" />
                                {formatDateTime(featuredPost.createdAt)}
                            </div>
                            <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                                Read Story
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Posts Grid */}
            <section className="space-y-10">
                <div className="flex items-center justify-between border-b border-stone-100 pb-6">
                    <h3 className="text-2xl font-black text-stone-900 flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-amber-500" />
                        Latest Discoveries
                    </h3>
                    <div className="text-stone-400 text-sm font-bold uppercase tracking-widest px-4 py-1 bg-stone-50 rounded-full border border-stone-100">
                        {otherPosts.length} Articles
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {otherPosts.map((post, idx) => (
                        <div 
                            key={post.id} 
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            className="animate-in fade-in slide-in-from-bottom-5 fill-mode-both duration-700"
                        >
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}