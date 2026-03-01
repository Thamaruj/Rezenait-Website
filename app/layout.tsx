import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // 1. Import your new Navbar component

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
      <body className={`${inter.className} min-h-screen bg-dot-pattern`}>
        
        {/* 2. Use the Navbar component here! */}
        <Navbar />

        {/* The current page's content loads here */}
        {children}
      </body>
    </html>
  );
}