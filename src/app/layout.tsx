import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: "The Blog",
    template: "%s | The Blog"
  },
  description: "A blog by Guerlak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} >
      <body className="antialiased">
        <Navbar />
        <main className="pt-24 min-h-screen max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
