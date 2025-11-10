"use client";

import clsx from "clsx";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Logo() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // only show logo near the top
      if (currentScrollY < 50) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/"
      className={clsx(
        "fixed left-4 top-4 z-50 transition-transform duration-300",
        showLogo ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
      )}
    >
      <span
        className={clsx(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold transition-all duration-200",
          poppins.className
        )}
      >
        Alex Import
      </span>
    </Link>
  );
}
