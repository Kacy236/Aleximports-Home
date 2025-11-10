"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <div className="bg-background-black text-background-black-foreground overflow-hidden pb-16">
      <div className="bg-background-gray">
        <h1 className="text-heading-0 md:text-[5.6vw] font-bold uppercase leading-[100%] text-primary text-center">
          Grow your business with Alex Imports
        </h1>
      </div>

      <div className="flex flex-col items-center mt-4 gap-4 px-4">
      <p className="text-center max-w-[45ch] text-lg md:text-xl leading-relaxed">
  Join thousands of successful vendors on <span className="font-semibold text-primary">Alex Imports</span> and start selling 
  your products to customers worldwide. Set up your store today and reach 
  a wider audience effortlessly.
</p>


        <Link href="https://aleximports.vercel.app/sign-up" target="_blank">
         <Button
           size="sm"
           className="bg-primary mx-auto mt-2 border border-white rounded-sm cursor-pointer items-center h-auto px-7 py-2 text-paragraph font-bold"
         >
          <span className="mr-2 text-black">Start Selling Now</span>
          <ArrowRight className="text-black" />
        </Button>
</Link>

      </div>
    </div>
  );
}
