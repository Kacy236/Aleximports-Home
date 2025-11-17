"use client";

import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import { Button } from "../ui/button";

export default function MeetOurTeam() {
  const coFounders = [
    {
      title: "CEO & Co-Founder",
      img: "/ceo.png",
      name: "Emmanuel Maduakor",
      desc1:
        "Emmanuel Maduakor is a visionary entrepreneur with a strong background in business growth and community development. He drives Alex Imports’ mission of connecting African businesses to the global marketplace.",
      desc2:
        "With strategic insight and leadership, he ensures that the company maintains its values of excellence, transparency, and innovation.",
    },
    {
      title: "CTO & Co-Founder",
      img: "/cto.jpg",
      name: "Kelechi Ndubuisi",
      desc1:
        "Kelechi Ndubuisi leads the company’s technological innovation. As a co-founder, he designs scalable, secure, and intuitive digital systems that power our vendor and customer experiences.",
      desc2:
        "He is passionate about using technology to simplify global commerce and make borderless trade accessible to everyone.",
    },
    {
      title: "CFO & Co-Founder",
      img: "/cfo.jpg",
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

        {/* About our group */}
        <div className="bg-[#54514d] text-white p-10 lg:p-14 rounded-xl flex flex-col justify-between h-full w-full">
          <div>
            <span className="bg-white text-primary p-4 uppercase font-bold text-xl lg:text-3xl w-max block">
              About our group
            </span>

            <div className="mt-8 lg:mt-12 grid gap-6 lg:gap-8">
              <p className="max-w-full lg:max-w-[60ch] text-xl lg:text-3xl leading-relaxed">
                At Alex Imports, we believe growth has no limits. We empower
                startups, entrepreneurs, and organizations to connect globally,
                scale seamlessly, and unlock new opportunities with confidence.
              </p>

              <p className="max-w-full lg:max-w-[60ch] text-xl lg:text-3xl leading-relaxed">
                Our mission is to simplify global trade and help African
                businesses expand beyond borders. Through innovation, technology,
                and trust, we’re building a bridge between vendors and customers
                worldwide — making international commerce simple, fast, and
                secure.
              </p>

              <p className="max-w-full lg:max-w-[60ch] text-xl lg:text-3xl leading-relaxed">
                Every product, every partnership, and every feature we create is
                driven by a shared vision: enabling sustainable growth and
                connecting communities through commerce.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="uppercase text-lg lg:text-2xl font-bold bg-white text-primary mt-10 w-full lg:w-auto py-4 lg:py-6 px-10"
          >
            Learn more
          </Button>
        </div>

        {/* Co-Founders Section */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col md:flex-row gap-5 md:gap-8 p-6 lg:p-8 items-start w-full rounded-xl shadow-lg"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-[260px] lg:w-[300px] flex items-center justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full max-w-[260px] lg:max-w-[300px] h-auto md:h-[260px] lg:h-[300px] object-cover rounded-md"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-grow mt-4 md:mt-0">
                <span className="block bg-primary text-white uppercase font-bold px-4 py-1.5 text-sm lg:text-base w-max rounded-sm">
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

      {/* Our Values */}
      <div className="pt-12 lg:pt-16 max-w-[1600px] mx-auto">
        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-5xl mb-10 lg:mb-12">
          Our Values
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14">
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center lg:text-left">
            <CircleDollarSign className="mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold mt-4 lg:mt-6 text-xl lg:text-2xl">
              Effortless Trade
            </h2>
            <p className="mt-3 text-lg lg:text-xl leading-relaxed">
              We simplify international commerce so businesses can focus on what they do best.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center lg:text-left">
            <Crown className="mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold mt-4 lg:mt-6 text-xl lg:text-2xl">
              Excellence
            </h2>
            <p className="mt-3 text-lg lg:text-xl leading-relaxed">
              Our commitment to quality, integrity, and innovation drives everything we do.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center lg:text-left">
            <Sparkles className="mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold mt-4 lg:mt-6 text-xl lg:text-2xl">
              Innovation
            </h2>
            <p className="mt-3 text-lg lg:text-xl leading-relaxed">
              We create forward-thinking solutions that empower entrepreneurs across borders.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center lg:text-left">
            <Trophy className="mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold mt-4 lg:mt-6 text-xl lg:text-2xl">
              Global Vision
            </h2>
            <p className="mt-3 text-lg lg:text-xl leading-relaxed">
              We are building a world where African products thrive internationally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
