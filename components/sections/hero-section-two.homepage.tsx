"use client";
import { BlobHero } from "../blob.hero";
import NavBar from "../navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SocialProof from "./social-proof";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionTwo() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      function getScrollAmount() {
        const headerWidth = headerRef.current?.scrollWidth ?? 0;
        return -(headerWidth - window.innerWidth);
      }

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
      <div className="min-h-screen bg-background grid grid-rows-[min-content_1fr_auto]">
        

        <div className="grid lg:grid-cols-12 grid-cols-6 md:grid-cols-8 gap-4 md:gap-8 py-4 px-4 self-end">
          <div className="col-span-full justify-self-center md:justify-self-start md:col-span-4">
            <BlobHero />
          </div>

          <div className="md:col-start-5 col-span-full grid md:block">
            {/* Large screens */}
            <div className="hidden sm:block md:hidden lg:block">
              <h1 className="text-heading-one text-center lg:text-left">
                Discover top products from
              </h1>
              <h1 className="text-heading-one text-center lg:text-left">
                trusted vendors worldwide
              </h1>
            </div>

            {/* Medium screens */}
            <div className="hidden text-center md:text-left md:block lg:hidden">
              <h1 className="text-heading-one">Discover top products</h1>
              <h1 className="text-heading-one">from trusted vendors</h1>
              <h1 className="text-heading-one">worldwide</h1>
            </div>

            {/* Small screens */}
            <div className="sm:hidden text-center">
              <h1 className="text-heading-one">Discover top products</h1>
              <h1 className="text-heading-one">from trusted vendors</h1>
              <h1 className="text-heading-one">worldwide</h1>
            </div>

            {/* Description */}
            <div className="sm:hidden md:block lg:hidden my-3 text-center md:text-left">
              <p>Alex Imports connects shoppers with thousands of</p>
              <p>products from multiple vendors worldwide, making</p>
              <p>it easy to buy, sell, and discover new items.</p>
            </div>

            <div className="my-3 text-center lg:text-left hidden sm:block md:hidden lg:block">
              <p>
                Alex Imports is the ultimate multivendor marketplace, connecting
              </p>
              <p>shoppers with trusted sellers, curated collections,</p>
              <p>and a seamless shopping experience.</p>
            </div>

            <button className="px-7 py-3 mx-auto md:mx-0 bg-primary text-white rounded-md font-semibold hover:bg-primary/80 transition">
              Explore Collections
            </button>
          </div>
        </div>

        {/* Scrolling header */}
        <div className="big-header-wrapper overflow-hidden">
          <h1
            ref={headerRef}
            className="text-heading-0 uppercase w-max big-header"
          >
            Your Multivendor Marketplace for Everything
          </h1>
        </div>
      </div>

      <SocialProof />
    </div>
  );
}
