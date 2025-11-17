"use client";

import Image from "next/image";
import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import { Button } from "../ui/button";

// Import actual image files (way more reliable for Vercel)
import CEO from "@/public/ceo.png";
import CTO from "@/public/cto.jpg";
import CFO from "@/public/cfo.jpg";

export default function MeetOurTeam() {
  const coFounders = [
    {
      title: "CEO & Co-Founder",
      img: CEO,
      name: "Emmanuel Maduakor",
      desc1:
        "Emmanuel Maduakor is a visionary entrepreneur with a strong background in business growth and community development. He drives Alex Imports’ mission of connecting African businesses to the global marketplace.",
      desc2:
        "With strategic insight and leadership, he ensures that the company maintains its values of excellence, transparency, and innovation.",
    },
    {
      title: "CTO & Co-Founder",
      img: CTO,
      name: "Kelechi Ndubuisi",
      desc1:
        "Kelechi Ndubuisi leads the company’s technological innovation. As a co-founder, he designs scalable, secure, and intuitive digital systems that power our vendor and customer experiences.",
      desc2:
        "He is passionate about using technology to simplify global commerce and make borderless trade accessible to everyone.",
    },
    {
      title: "CFO & Co-Founder",
      img: CFO,
      name: "Chisom Maduakor",
      desc1:
        "Chisom Maduakor is a finance and operations expert who oversees the company’s financial strategy, ensuring sustainability and smart growth.",
      desc2:
        "She plays a vital role in aligning financial structure with long-term goals — building a strong foundation for innovation, expansion, and community empowerment.",
    },
  ];

  return (
    <div id="about" className="bg-background-gray py-28 px-6 lg:py-40 lg:px-20">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-20 items-start">

        {/* LEFT SIDE — MATCH HEIGHT WITH RIGHT */}
        <div className="bg-[#54514d] text-white p-10 lg:p-14 rounded-xl flex flex-col h-full">
          <div className="flex-grow flex flex-col justify-between">

            <div>
              <span className="bg-white text-primary p-4 uppercase font-bold text-xl lg:text-3xl block w-max">
                About Our Group
              </span>

              <div className="mt-8 lg:mt-12 grid gap-6">
                <p className="text-xl lg:text-3xl leading-relaxed max-w-[60ch]">
                  At Alex Imports, we believe growth has no limits. We empower
                  startups, entrepreneurs, and organizations to connect globally,
                  scale seamlessly, and unlock new opportunities with confidence.
                </p>

                <p className="text-xl lg:text-3xl leading-relaxed max-w-[60ch]">
                  Our mission is to simplify global trade and help African
                  businesses expand beyond borders. Through innovation,
                  technology, and trust, we’re bridging vendors and customers
                  worldwide — making commerce simple, fast, and secure.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="uppercase text-lg lg:text-2xl font-bold bg-white text-primary mt-10 w-full lg:w-auto py-4 lg:py-6 px-10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE — CO-FOUNDERS */}
        <div className="flex flex-col gap-8 lg:gap-12 h-full">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col md:flex-row gap-5 md:gap-8 p-6 lg:p-8 rounded-xl shadow-lg items-start w-full"
            >
              <div className="flex-shrink-0 w-full md:w-[260px] lg:w-[300px]">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-[260px] lg:h-[300px] object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col flex-grow mt-4 md:mt-0">
                <span className="bg-primary text-white uppercase font-bold px-4 py-1.5 text-sm lg:text-base w-max rounded-sm">
                  {member.title}
                </span>

                <h2 className="font-bold text-lg lg:text-2xl mt-3">
                  {member.name}
                </h2>

                <p className="text-base lg:text-lg mt-3 leading-relaxed text-paragraph">
                  {member.desc1}
                </p>

                <p className="text-base lg:text-lg mt-3 leading-relaxed text-paragraph">
                  {member.desc2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="pt-12 lg:pt-16 max-w-[1600px] mx-auto">
        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-5xl mb-10 lg:mb-12">
          Our Values
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14">
          <ValueCard
            icon={<CircleDollarSign className="text-4xl lg:text-5xl" />}
            title="Effortless Trade"
            text="We simplify global commerce so businesses can focus on creating and growing."
          />

          <ValueCard
            icon={<Crown className="text-4xl lg:text-5xl" />}
            title="Excellence"
            text="Our commitment to quality, integrity, and innovation drives everything we do."
          />

          <ValueCard
            icon={<Sparkles className="text-4xl lg:text-5xl" />}
            title="Innovation"
            text="We build forward-thinking solutions that empower entrepreneurs everywhere."
          />

          <ValueCard
            icon={<Trophy className="text-4xl lg:text-5xl" />}
            title="Global Vision"
            text="We are building a world where African products thrive internationally."
          />
        </div>
      </div>
    </div>
  );
}

/* Reusable Card Component */
function ValueCard({ icon, title, text }) {
  return (
    <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center lg:text-left">
      <div className="mx-auto lg:mx-0">{icon}</div>
      <h2 className="font-bold mt-4 lg:mt-6 text-xl lg:text-2xl">{title}</h2>
      <p className="mt-3 text-lg lg:text-xl leading-relaxed">{text}</p>
    </div>
  );
}
