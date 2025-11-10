"use client";
import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import TestimonialSection from "./testimonials-section";

export default function WorkingWithUs() {
  return (
    <section className="pt-4 bg-background-gray">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-16 mt-4 px-4">
        <div className="bg-white p-7 rounded-md">
          <div>
            <CircleDollarSign className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Easy Sales Management
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Manage your products, track orders, and handle payments seamlessly
              so you can focus on growing your business.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Crown className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Boost Your Visibility
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Get access to a large, engaged customer base and showcase your
              products to thousands of potential buyers.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Sparkles className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Stand Out From Competitors
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Present your brand professionally with custom listings, images,
              and descriptions that capture your unique offerings.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Trophy className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Grow With Confidence
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Join a thriving marketplace community and leverage tools and
              insights designed to help your store succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <TestimonialSection />
      </div>
    </section>
  );
}
