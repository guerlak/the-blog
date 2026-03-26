import { PostModel } from "@/src/models/post/PostModel";
import { formatDateTime } from "@/src/utils/format-datetime";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default function PostCard({ post }: { post: PostModel }) {
    return (
        <Link 
            href={`/post/${post.slug}`} 
            className="group flex flex-col bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 w-full max-w-[420px]"
        >
            <div className="relative overflow-hidden aspect-video">
                <Image 
                    src={post.coverImageUrl || "/placeholder.jpg"} 
                    alt={post.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
            </div>
            
            <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDateTime(post.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author || "Guerlak"}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 flex-1 font-medium">
                    {post.excerpt}
                </p>

                <div className="pt-2 flex items-center text-blue-600 text-sm font-bold group-hover:gap-2 transition-all duration-300">
                    Ler mais
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">&rarr;</span>
                </div>
            </div>
        </Link>
    );
}