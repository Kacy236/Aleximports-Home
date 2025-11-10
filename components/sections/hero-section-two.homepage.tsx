"use client";
import { BlobHero } from "../blob.hero";
import SocialProof from "./social-proof";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSectionTwo() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const getScrollAmount = () => {
        const headerWidth = headerRef.current?.scrollWidth ?? 0;
        return -(headerWidth - window.innerWidth);
      };

      const headerTween = gsap.to(".big-header", {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".big-header",
        start: "top 70%",
        end: () => `+=${getScrollAmount() * -1}`,
        animation: headerTween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      gsap.to(container.current, {
        y: 50,
        scrollTrigger: {
          trigger: container.current,
          start: "80% bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative -z-[1]">
      <div className="min-h-screen bg-background flex flex-col justify-between">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 px-4 py-8 items-center">
          {/* Blob */}
          <div className="flex justify-center md:justify-start md:col-span-4">
            <BlobHero />
          </div>

          {/* Text */}
          <div className="md:col-span-4 flex flex-col justify-center text-center md:text-left space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Discover top products from trusted vendors worldwide
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-paragraph">
              Alex Imports connects shoppers with thousands of products from multiple vendors worldwide,
              making it easy to buy, sell, and discover new items.
            </p>

            <button className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/80 transition self-center md:self-start">
              Explore Collections
            </button>
          </div>
        </div>

        {/* Scrolling header */}
        <div className="big-header-wrapper overflow-hidden py-12 md:py-16 lg:py-20">
  <h1
    ref={headerRef}
    className="
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
      uppercase font-extrabold w-max big-header
    "
  >
    Your Multivendor Marketplace for Everything
  </h1>
</div>

      </div>

      <SocialProof />
    </div>
  );
}
