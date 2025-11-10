"use client";
import { StarIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import Slider from "../Slider";

export default function TestimonialSection() {
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Lara Smith",
      feedback:
        "Selling on Alex Imports has boosted my sales tremendously! The platform is easy to use and my products reach thousands of customers daily.",
    },
    {
      name: "David Johnson",
      feedback:
        "I love how Alex Imports makes managing multiple product listings seamless. The support team is always responsive and helpful!",
    },
    {
      name: "Maya Patel",
      feedback:
        "A fantastic marketplace for vendors! My small business has grown thanks to the exposure and tools provided here.",
    },
    {
      name: "Ethan Brown",
      feedback:
        "Listing on Alex Imports was simple and effective. I appreciate the marketing features that help my products get noticed.",
    },
    {
      name: "Sophia Lee",
      feedback:
        "The platform is intuitive and reliable. Sales tracking and vendor analytics are great for planning my business strategy.",
    },
    {
      name: "Noah Davis",
      feedback:
        "I highly recommend Alex Imports to any vendor looking to expand their reach. The marketplace is well-organized and vendor-friendly.",
    },
  ];

  return (
    <div className="pt-16 pb-32 bg-background-gray">
      <div className="px-4 max-w-[1200px] mx-auto">
        <h1 className="text-heading-0 font-bold text-center sm:text-left">
          What Our Vendors Say
        </h1>
      </div>

      <Slider className="mt-7 px-2 sm:px-0">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white flex flex-col rounded-md w-[90vw] sm:w-[320px] max-w-[350px] p-4 sm:p-6 mx-2 shrink-0"
          >
            <p className="pb-4 text-paragraph text-sm sm:text-base">
              "{testimonial.feedback}"
            </p>

            <div className="p-4 border-t border-primary mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-paragraph gap-2 sm:gap-0">
              <span className="font-bold text-sm sm:text-base">{testimonial.name}</span>

              <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    weight="fill"
                    className="text-primary w-4 h-4 sm:w-5 sm:h-5"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
