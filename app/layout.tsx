import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Link from "next/link"; // Import the Next.js Link component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rezenait",
  description: "Designing the Intelligence Behind Modern Enterprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="flex gap-6 p-6 bg-gray-100 border-b">
          <Link href="/" className="font-bold text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link href="/careers" className="hover:text-blue-500">Careers</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/contact" className="hover:text-blue-500">Talk to us</Link>
        </nav>

        {/* The current page's content loads here */}
        {children}
      </body>
    </html>
  );
}