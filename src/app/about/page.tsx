import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-(--background) text-(--foreground) selection:bg-indigo-500/30">

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        {/* Image Section */}
                        <div className="md:col-span-5 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
                                    alt="About Author"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center -rotate-12 shadow-xl border-4 border-(--background) hidden md:flex">
                                <span className="text-white font-bold text-lg text-center leading-tight">M. G. <br /><span className="text-xs font-normal opacity-70">2026</span></span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:col-span-7 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-indigo-500 font-semibold tracking-wider uppercase text-sm">Our Story</h2>
                                <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                                    Crafting Digital <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Narratives.</span>
                                </h1>
                            </div>

                            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
                                <p>
                                    Welcome to <strong>The Blog</strong>, a space dedicated to exploring the intersection of technology, design, and human creativity. Founded in 2026, we believe that every line of code tells a story and every pixel has a purpose.
                                </p>
                                <p>
                                    Our mission is to provide deep insights, practical tutorials, and thought-provoking essays that empower creators to build a more beautiful and functional web.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="px-6 py-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                    <div className="text-3xl font-bold text-indigo-500">10k+</div>
                                    <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Monthly Readers</div>
                                </div>
                                <div className="px-6 py-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                    <div className="text-3xl font-bold text-purple-500">500+</div>
                                    <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Articles Written</div>
                                </div>
                                <div className="px-6 py-4 bg-pink-500/10 rounded-xl border border-pink-500/20">
                                    <div className="text-3xl font-bold text-pink-500">24/7</div>
                                    <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Community Support</div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform active:scale-95">
                                    Join Our Newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer-ish Decor */}
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full opacity-30"></div>
        </div>
    );
}
