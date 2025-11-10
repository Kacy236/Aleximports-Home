"use client";
import Divider from "../divider";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function OurServices() {
  const services = [
    {
      title: "Vendor Onboarding",
      description:
        "Easily register and manage your store, upload products, and start selling on Alex Imports in minutes.",
    },
    {
      title: "Featured Products & Promotions",
      description:
        "Boost your sales by showcasing your top products in our curated collections and promotional campaigns.",
    },
    {
      title: "Sales Analytics & Insights",
      description:
        "Get real-time insights into your store’s performance, customer behavior, and product trends to make data-driven decisions.",
    },
    {
      title: "Shipping & Order Management",
      description:
        "Seamlessly manage orders, track shipments, and ensure your customers receive their products on time.",
    },
  ];

  return (
    <div className="bg-background-gray px-4 py-16">
      <h1 className="text-heading-0 font-bold text-center">Our Services</h1>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-primary rounded-md p-6 flex flex-col justify-between"
          >
            <h2 className="text-heading-one font-bold mb-4">{service.title}</h2>
            <p className="text-paragraph mb-6">{service.description}</p>
            <Button className="mt-auto font-bold bg-white border border-primary flex items-center justify-center gap-2">
              Learn more
              <ArrowRight size={16} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
