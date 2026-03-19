import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md 
        bg-(--background)/80 border-b border-indigo-500/10">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-indigo-500 transition-colors">
                    THE BLOG
                </Link>

            </div>
        </nav>
    )
}   