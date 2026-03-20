import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Rezenait",
  description: "Designing the Intelligence Behind Modern Enterprises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} min-h-screen flex flex-col bg-dot-pattern`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}