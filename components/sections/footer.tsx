"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-black text-white pt-16 overflow-hidden">
      <div className="grid grid-cols-6 lg:grid-cols-12 md:grid-cols-8 px-4 gap-y-16">
        {/* Newsletter / Updates */}
        <div className="lg:col-span-7 col-span-full">
          <h2 className="text-heading-one font-bold">Get Vendor & Product Updates</h2>

          <form className="mt-7 max-w-[600px]">
            <div className="w-full border-b border-cellcapital-light pb-4 justify-between flex">
              <input
                placeholder="Your Email"
                className="flex-1 focus:outline-none foucs:border-none text-heading-paragraph"
              />
              <button className="cursor-pointer text-heading-one">
                <ArrowRight size={30} />
              </button>
            </div>
            <p className="text-caption text-muted-foreground max-w-[45ch] mt-4">
              Subscribe to get updates on new vendors, product launches, and exclusive deals. You can unsubscribe at any time.
            </p>
          </form>
        </div>

        {/* Pages */}
        <div className="uppercase text-caption lg:col-start-9 lg:col-span-2">
          <span className="text-muted-foreground">Pages</span>
          <ul className="flex gap-1 flex-col mt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/vendors">Vendors</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="uppercase text-caption lg:col-start-11 col-start-3">
          <span className="text-muted-foreground">Social</span>
          <ul className="flex gap-1 flex-col mt-2">
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com">X (Twitter)</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://tiktok.com">TikTok</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-16">
        <div className="px-4 pb-2 flex justify-between items-center">
          <span className="text-caption uppercase">©2025 Alex Imports</span>
          <span className="uppercase text-caption cursor-pointer">Privacy Policy</span>
          <span
            onClick={scrollToTop}
            className="flex gap-2 items-center cursor-pointer text-caption uppercase"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </span>
        </div>
        <div className="border-t border-cellcapital-light"></div>
      </div>

      <div className="py-3 flex justify-center items-center gap-4">
        <h1 className="font-bold text-[15vw] md:text-[10vw] lg:text-[8vw] text-primary">
          Alex
        </h1>
        <h1 className="font-bold text-[15vw] md:text-[10vw] lg:text-[8vw] text-primary">
          Imports
        </h1>
      </div>
    </footer>
  );
}
