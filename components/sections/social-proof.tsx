"use client";
import Image from "next/image";

export default function SocialProof() {
  return (
    <div className="bg-primary relative">
      <div className="py-16 flex flex-col items-center overflow-hidden">
        <div className="flex flex-col">
          <h1 className="font-bold text-heading-0 text-center mx-auto">
            Trusted by top vendors
          </h1>
          <div className="mx-auto">
            <p className="max-w-[45ch] md:max-w-[35ch] text-paragraph text-center">
              Alex Imports powers a growing network of vendors and brands, helping
              them reach thousands of customers daily. Join the platform trusted
              by sellers across multiple categories.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
