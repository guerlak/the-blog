import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md bg-(--background)/80 border-b border-indigo-500/10">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-indigo-500 transition-colors">
                    THE BLOG
                </Link>
                <Link href="/" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>
            </div>
        </nav>
    )
}   