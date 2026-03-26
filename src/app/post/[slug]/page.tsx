import { postQueries } from "@/src/lib/post/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import SafeMarkdown from "@/src/components/SafeMarkdown";

type PostSlugParams = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostSlugParams) {
    const { slug } = await params;

    let post;

    try {
        post = await postQueries.findPostBySlugCached(slug);
    } catch (error) {
        console.error(error);
        post = null;
    }

    if (!post) {
        return {
            title: "Post não encontrado",
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.coverImageUrl],
        },
    }
}

export default async function PostSlugPage({ params }: PostSlugParams) {

    //throw new Error("Erro ao carregar o post");

    const { slug } = await params;
    let post;

    try {
        post = await postQueries.findPostBySlugCached(slug);
    } catch (error) {
        console.error(error);
        post = null;
    }

    if (!post) notFound();

    const publishDate = new Date(post.createdAt);
    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

    return (
        <article className="relative animate-in fade-in duration-700">
            {/* Header / Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[400px] mb-12 overflow-hidden rounded-3xl group shadow-2xl">
                <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group/back mb-4"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover/back:-translate-x-1" />
                            <span className="text-sm font-medium uppercase tracking-wider">Voltar ao blog</span>
                        </Link>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-sm">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <User className="w-4 h-4" />
                                <span>{post.author || "Anônimo"}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Calendar className="w-4 h-4" />
                                <span>{format(publishDate, "dd 'de' MMMM, yyyy", { locale: ptBR })}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                                <Clock className="w-4 h-4" />
                                <span>{readingTime} min de leitura</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="max-w-3xl mx-auto px-6 pb-24">
                {/* Excerpt/Intro */}
                <div className="mb-12">
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                        {post.excerpt}
                    </p>
                </div>

                {/* Main Content Body */}
                <div
                    className="max-w-none text-foreground/90 leading-[1.8] space-y-8"
                >
                    <SafeMarkdown content={post.content} />
                </div>

                {/* Post Footer / Share / Tags */}
                <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-offset-2 ring-indigo-500/20">
                            {(post.author || "A")[0]}
                        </div>
                        <div>
                            <p className="font-bold text-lg">{post.author || "Anônimo"}</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Autor do Post</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-2xl transition-all font-bold shadow-sm active:scale-95 group">
                            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Compartilhar
                        </button>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="fixed top-0 right-0 -z-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 left-0 -z-10 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        </article>
    );
}