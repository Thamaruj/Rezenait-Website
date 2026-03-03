import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // 1. Import your new Navbar component
import Footer from '../components/Footer';

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
      <body className={`${inter.className} min-h-screen flex flex-col bg-dot-pattern`}>
        
        <Navbar />

        {/* We wrap children in a 'flex-grow' main tag so the footer is always pushed to the bottom of the screen, even on short pages! */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}