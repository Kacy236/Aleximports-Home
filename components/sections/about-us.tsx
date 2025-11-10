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
    <div className="bg-background-gray py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.8fr] gap-6 items-start">
        {/* About our group */}
        <div className="bg-[#54514d] text-white p-6 flex flex-col justify-between h-full max-w-full">
          <div>
            <span className="bg-white text-primary p-2 uppercase font-bold text-sm sm:text-base w-max block">
              About our group
            </span>
            <div className="mt-4 grid gap-4">
              <p className="max-w-full sm:max-w-[36ch] text-paragraph">
                At Alex Imports, we believe growth has no limits. We empower
                startups, entrepreneurs, and organizations to connect globally,
                scale seamlessly, and unlock new opportunities with confidence.
              </p>

              <p className="max-w-full sm:max-w-[36ch] text-paragraph">
                Our mission is to simplify global trade and help African
                businesses expand beyond borders. Through innovation, technology,
                and trust, we’re building a bridge between vendors and customers
                worldwide — making international commerce simple, fast, and
                secure.
              </p>

              <p className="max-w-full sm:max-w-[36ch] text-paragraph">
                Every product, every partnership, and every feature we create is
                driven by a shared vision: enabling sustainable growth and
                connecting communities through commerce.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="uppercase text-base font-bold bg-white text-primary mt-6 sm:mt-8 w-full sm:w-auto hover:bg-white"
          >
            Learn more
          </Button>
        </div>

        {/* Co-Founders section */}
        <div className="flex flex-col gap-6">
          {coFounders.map((member, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 items-start md:items-stretch w-full"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[280px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full max-w-[280px] h-auto md:h-[280px] object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col justify-start flex-grow mt-4 md:mt-0">
                <span className="block bg-primary text-white uppercase font-bold px-4 py-1 w-max text-sm sm:text-base">
                  {member.title}
                </span>
                <h2 className="font-bold text-lg mt-2 sm:mt-3">{member.name}</h2>
                <p className="text-base mt-2 text-paragraph">{member.desc1}</p>
                <p className="text-base mt-2 text-paragraph">{member.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our values */}
      <div className="py-16 max-w-[1200px] mx-auto">
        <h1 className="text-heading-0 font-bold text-center sm:text-left">
          Our Values
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-md flex flex-col justify-between h-full text-center sm:text-left">
            <CircleDollarSign className="w-icon h-icon mx-auto sm:mx-0" />
            <h2 className="font-bold text-paragraph mt-4 sm:mt-8">Effortless Trade</h2>
            <p className="text-paragraph max-w-full sm:max-w-[30ch] mt-2 mx-auto sm:mx-0">
              We simplify international commerce so businesses can focus on what
              they do best — creating and growing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col justify-between h-full text-center sm:text-left">
            <Crown className="w-icon h-icon mx-auto sm:mx-0" />
            <h2 className="font-bold text-paragraph mt-4 sm:mt-8">Excellence</h2>
            <p className="text-paragraph max-w-full sm:max-w-[30ch] mt-2 mx-auto sm:mx-0">
              Our commitment to quality, integrity, and innovation drives
              everything we do.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col justify-between h-full text-center sm:text-left">
            <Sparkles className="w-icon h-icon mx-auto sm:mx-0" />
            <h2 className="font-bold text-paragraph mt-4 sm:mt-8">Innovation</h2>
            <p className="text-paragraph max-w-full sm:max-w-[30ch] mt-2 mx-auto sm:mx-0">
              We create forward-thinking solutions that empower entrepreneurs
              across borders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md flex flex-col justify-between h-full text-center sm:text-left">
            <Trophy className="w-icon h-icon mx-auto sm:mx-0" />
            <h2 className="font-bold text-paragraph mt-4 sm:mt-8">Global Vision</h2>
            <p className="text-paragraph max-w-full sm:max-w-[30ch] mt-2 mx-auto sm:mx-0">
              Our team is building a world where African products thrive on the
              international stage — seamlessly and confidently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
