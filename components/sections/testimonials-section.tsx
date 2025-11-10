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
    <div className="pt-16 pb-48 bg-background-gray">
      <div className="px-4">
        <h1 className="text-heading-0 font-bold">What Our Vendors Say</h1>
      </div>

      <Slider className="mt-7">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white flex flex-col rounded-sm w-testimonial-card p-4"
          >
            <p className="pb-4 text-paragraph">"{testimonial.feedback}"</p>

            <div className="p-4 border-t border-primary mt-auto flex text-paragraph justify-between">
              <span className="font-bold">{testimonial.name}</span>

              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} weight="fill" className="text-primary" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
