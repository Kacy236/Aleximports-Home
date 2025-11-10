"use client";
import NavBar from "@/components/navbar";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-background-gray pb-16 md:pb-0 relative">
      <MainHero />
      <VideoBackground />
      <MobileVideoBackground />
      <RemainingHeroTextContent />
    </div>
  );
}

// Desktop video background with scroll-based animation
function VideoBackground() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["30% 80%", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.9]);

  return (
    <div ref={container} className="relative h-[300vh] hidden md:block">
      <div className="sticky h-[85vh] top-0">
        <div className="w-full h-full top-16 absolute flex flex-col items-center">
          <motion.div
            style={{ scale }}
            className="relative w-[50vw] h-[50vh] rounded-md overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="min-w-full min-h-full object-cover z-[-1] blur-video"
            >
              <source src="/video/logistics-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="backdrop-overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Mobile video background with looping animation
function MobileVideoBackground() {
  return (
    <div className="relative md:hidden px-4 mt-10">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-[40vh] rounded-md overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full object-cover z-[-1]"
        >
          <source src="/video/logistics-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="backdrop-overlay"></div>
      </motion.div>
    </div>
  );
}

function RemainingHeroTextContent() {
  return (
    <div className="md:pb-30 mt-10 md:mt-0 px-4">
      <h2 className="md:text-heading-one text-center mx-auto text-paragraph max-w-[50ch]">
        Alex Imports is your all-in-one multivendor marketplace, connecting shoppers
        with the best products from trusted sellers worldwide. Shop, sell, and grow
        your business with ease.
      </h2>
    </div>
  );
}

const MainHero = () => {
  return (
    <div className="grid px-4 md:pt-35 pt-30">
      <div className="justify-self-center self-center flex flex-col">
        <div className="mx-auto">
          <h1 className="text-heading-0 font-bold max-w-[30ch] text-center mx-auto">
            Discover thousands of products from top vendors. Start shopping today!
          </h1>
        </div>

        <Button
          size="sm"
          className="rounded-sm font-semibold mt-4 md:hidden w-max mx-auto flex items-center gap-2"
        >
          <ShoppingBag strokeWidth={1} size={20} />
          Visit Store
        </Button>
      </div>
    </div>
  );
};
