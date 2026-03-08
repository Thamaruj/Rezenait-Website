"use client"

import Link from "next/link";


export default function Footer() {

  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <footer className="bg-white text-gray-300 py-16">
      <div className="max-w-full mx-auto px-6 md:px-20">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#006EFF] to-[#071289] bg-clip-text text-transparent"
              onClick={scrollToTop}
            >
              Rezenait
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Advanced AI engineering and data solutions for startups and enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.linkedin.com/company/rezenait-pvt-ltd" className="text-blue-500 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn SVG */}
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            {/*
                <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">X (Twitter)</span>
                
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.922H5.078z" />
                </svg>
              </a>
            */}
              
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-blue-500 transition">AI/ML Engineering</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition">Data Strategy Engineering</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition">Analytics & BI</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-blue-500 transition">Careers</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-500 transition">Portfolio</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-gray-500 font-semibold mb-6">Get in Touch</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>Colombo, Sri Lanka</li>
              <li><a href="mailto:hello@rezenait.com" className="hover:text-blue-500 transition">hello@rezenait.com</a></li>
              <li className="pt-2">
                <Link href="/contact" className="text-blue-500 font-medium hover:text-blue-400 transition flex items-center gap-1">
                  Schedule Consultation <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rezenait. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}