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
    <div id="about" className="bg-background-gray py-32 px-8 lg:py-48 lg:px-24">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[1.5fr_2.5fr] gap-12 lg:gap-24 items-start">
        {/* About our group */}
        <div className="bg-[#54514d] text-white p-12 lg:p-16 flex flex-col justify-between h-full max-w-full rounded-xl">
          <div>
            <span className="bg-white text-primary p-4 uppercase font-bold text-lg lg:text-2xl w-max block">
              About our group
            </span>
            <div className="mt-8 lg:mt-12 grid gap-6 lg:gap-8">
              <p className="max-w-full lg:max-w-[55ch] text-paragraph text-xl lg:text-3xl leading-relaxed lg:leading-relaxed">
                At Alex Imports, we believe growth has no limits. We empower
                startups, entrepreneurs, and organizations to connect globally,
                scale seamlessly, and unlock new opportunities with confidence.
              </p>

              <p className="max-w-full lg:max-w-[55ch] text-paragraph text-xl lg:text-3xl leading-relaxed lg:leading-relaxed">
                Our mission is to simplify global trade and help African
                businesses expand beyond borders. Through innovation, technology,
                and trust, we’re building a bridge between vendors and customers
                worldwide — making international commerce simple, fast, and
                secure.
              </p>

              <p className="max-w-full lg:max-w-[55ch] text-paragraph text-xl lg:text-3xl leading-relaxed lg:leading-relaxed">
                Every product, every partnership, and every feature we create is
                driven by a shared vision: enabling sustainable growth and
                connecting communities through commerce.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="uppercase text-lg lg:text-2xl font-bold bg-white text-primary mt-10 lg:mt-12 w-full lg:w-auto hover:bg-white py-4 lg:py-6 px-8 lg:px-12"
          >
            Learn more
          </Button>
        </div>

        {/* Co-Founders section */}
        <div className="flex flex-col gap-10 lg:gap-16">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col md:flex-row gap-6 md:gap-10 p-8 lg:p-12 items-start md:items-stretch w-full rounded-xl shadow-xl"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[360px] lg:w-[420px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full max-w-[360px] lg:max-w-[420px] h-auto md:h-[360px] lg:h-[420px] object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col justify-start flex-grow mt-6 md:mt-0">
                <span className="block bg-primary text-white uppercase font-bold px-5 py-2 w-max text-base lg:text-xl">
                  {member.title}
                </span>
                <h2 className="font-bold text-xl lg:text-3xl mt-4 lg:mt-6">{member.name}</h2>
                <p className="text-lg lg:text-xl mt-4 lg:mt-6 text-paragraph leading-relaxed lg:leading-snug">{member.desc1}</p>
                <p className="text-lg lg:text-xl mt-4 lg:mt-6 text-paragraph leading-relaxed lg:leading-snug">{member.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our values */}
      <div className="py-16 lg:py-20 max-w-[1600px] mx-auto">
        <h1 className="text-heading-0 font-bold text-center lg:text-left text-3xl lg:text-5xl mb-12 lg:mb-16">
          Our Values
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="bg-white p-8 lg:p-12 rounded-xl flex flex-col justify-between h-full text-center lg:text-left shadow-lg">
            <CircleDollarSign className="w-icon h-icon mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold text-paragraph mt-6 lg:mt-8 text-xl lg:text-2xl">Effortless Trade</h2>
            <p className="text-paragraph max-w-full lg:max-w-[36ch] mt-4 text-lg lg:text-xl leading-relaxed lg:leading-snug">
              We simplify international commerce so businesses can focus on what
              they do best — creating and growing.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-xl flex flex-col justify-between h-full text-center lg:text-left shadow-lg">
            <Crown className="w-icon h-icon mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold text-paragraph mt-6 lg:mt-8 text-xl lg:text-2xl">Excellence</h2>
            <p className="text-paragraph max-w-full lg:max-w-[36ch] mt-4 text-lg lg:text-xl leading-relaxed lg:leading-snug">
              Our commitment to quality, integrity, and innovation drives
              everything we do.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-xl flex flex-col justify-between h-full text-center lg:text-left shadow-lg">
            <Sparkles className="w-icon h-icon mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold text-paragraph mt-6 lg:mt-8 text-xl lg:text-2xl">Innovation</h2>
            <p className="text-paragraph max-w-full lg:max-w-[36ch] mt-4 text-lg lg:text-xl leading-relaxed lg:leading-snug">
              We create forward-thinking solutions that empower entrepreneurs
              across borders.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-xl flex flex-col justify-between h-full text-center lg:text-left shadow-lg">
            <Trophy className="w-icon h-icon mx-auto lg:mx-0 text-4xl lg:text-5xl" />
            <h2 className="font-bold text-paragraph mt-6 lg:mt-8 text-xl lg:text-2xl">Global Vision</h2>
            <p className="text-paragraph max-w-full lg:max-w-[36ch] mt-4 text-lg lg:text-xl leading-relaxed lg:leading-snug">
              Our team is building a world where African products thrive on the
              international stage — seamlessly and confidently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
