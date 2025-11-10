"use client";
import NavBar from "@/components/navbar";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-background-gray pb-16 md:pb-0">
      <MainHero />
      <VideoBackground />
      <RemainingHeroTextContent />
    </div>
  );
}

// Desktop & Mobile video background component
function VideoBackground() {
  // Refs for desktop and mobile
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  // Desktop scroll animation
  const { scrollYProgress: desktopScroll } = useScroll({
    target: desktopRef,
    offset: ["30% 80%", "end end"],
  });
  const desktopScale = useTransform(desktopScroll, [0, 1], [1, 1.9]);

  // Mobile scroll animation
  const { scrollYProgress: mobileScroll } = useScroll({
    target: mobileRef,
    offset: ["start end", "end start"],
  });
  const mobileScale = useTransform(mobileScroll, [0, 1], [1, 1.2]);

  return (
    <>
      {/* Desktop Video */}
      <div ref={desktopRef} className="relative h-[300vh] hidden md:block">
        <div className="sticky h-[85vh] top-0 flex justify-center items-center">
          <motion.div
            style={{ scale: desktopScale }}
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

      {/* Mobile Video */}
      <div ref={mobileRef} className="relative md:hidden px-4 mt-10">
        <motion.div
          style={{ scale: mobileScale }}
          className="relative w-full h-[40vh] rounded-md overflow-hidden"
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
    </>
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
