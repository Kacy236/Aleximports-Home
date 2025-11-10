"use client";
import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import { Button } from "../ui/button";

export default function MeetOurTeam() {
  return (
    <div className="bg-background-gray py-16 px-4">
      <div className="w-full grid lg:grid-cols-[1fr_1.8fr] gap-4 items-stretch">
        {/* About our group */}
        <div className="bg-[#54514d] text-white p-6 flex flex-col justify-between h-full">
          <div>
            <span className="bg-white text-primary p-3 uppercase font-bold block text-base w-max">
              About our group
            </span>
            <div className="mt-4 grid">
              <div className="mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="23"
                  viewBox="0 0 28 23"
                  fill="none"
                >
                  <path
                    d="M7.344 0.855999L11.696 4.312C10.0747 5.976 8.88 7.55466 8.112 9.048C7.344 10.4987 6.96 12.0773 6.96 13.784L4.464 10.904H12.848V22.808H0.752V15.384C0.752 12.6533 1.24267 10.1787 2.224 7.96C3.248 5.69866 4.95467 3.33066 7.344 0.855999ZM21.808 0.855999L26.16 4.312C24.5387 5.976 23.344 7.55466 22.576 9.048C21.808 10.4987 21.424 12.0773 21.424 13.784L18.928 10.904H27.312V22.808H15.216V15.384C15.216 12.6533 15.7067 10.1787 16.688 7.96C17.712 5.69866 19.4187 3.33066 21.808 0.855999Z"
                    fill="white"
                  ></path>
                </svg>
              </div>

              <p className="max-w-[36ch] mt-7 text-paragraph">
                At Alex Imports, we believe growth has no limits. We empower
                startups, entrepreneurs, and organizations to connect globally,
                scale seamlessly, and unlock new opportunities with confidence.
              </p>

              <p className="max-w-[36ch] mt-4 text-paragraph">
                Our mission is to simplify global trade and help African
                businesses expand beyond borders. Through innovation, technology,
                and trust, we’re building a bridge between vendors and customers
                worldwide — making international commerce simple, fast, and
                secure.
              </p>

              <p className="max-w-[36ch] mt-4 text-paragraph">
                Every product, every partnership, and every feature we create is
                driven by a shared vision: enabling sustainable growth and
                connecting communities through commerce.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="ml-auto uppercase text-base font-bold bg-white rounded-none text-primary mt-7 cursor-pointer hover:bg-white"
          >
            Learn more
          </Button>
        </div>

        {/* Co-Founders section */}
        <div className="flex flex-col justify-between gap-4">
          {[
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
              img: "/cto.png",
              name: "Kelechi Ndubuisi",
              desc1:
                "Kelechi Ndubuisi leads the company’s technological innovation. As a co-founder, he designs scalable, secure, and intuitive digital systems that power our vendor and customer experiences.",
              desc2:
                "He is passionate about using technology to simplify global commerce and make borderless trade accessible to everyone.",
            },
            {
              title: "CF0 & Co-Founder",
              img: "/cfo.png",
              name: "Chisom Maduakor",
              desc1:
                "Chisom Maduakor is a finance and operations expert who oversees the company’s financial strategy, ensuring sustainability and smart growth.",
              desc2:
                "She plays a vital role in aligning financial structure with long-term goals — building a strong foundation for innovation, expansion, and community empowerment.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white flex flex-col md:flex-row gap-8 p-6 items-stretch h-full min-h-[400px]"
            >
              <div className="flex-shrink-0 flex items-center justify-center md:w-[340px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[320px] h-[320px] object-cover rounded-md"
                />
              </div>

              <div className="flex flex-col justify-center flex-grow">
                <span className="block bg-primary text-white uppercase font-bold px-6 py-2 w-max">
                  {member.title}
                </span>
                <h2 className="font-bold text-lg mt-3">{member.name}</h2>
                <p className="text-base mt-3 text-paragraph">{member.desc1}</p>
                <p className="text-base mt-4 text-paragraph">{member.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our values */}
      <div className="py-16">
        <div>
          <h1 className="text-heading-0 font-bold">Our Values</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-7 rounded-md flex flex-col justify-between h-full">
            <CircleDollarSign className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">Effortless Trade</h2>
            <p className="text-paragraph max-w-[30ch] mt-2">
              We simplify international commerce so businesses can focus on what
              they do best — creating and growing.
            </p>
          </div>

          <div className="bg-white p-7 rounded-md flex flex-col justify-between h-full">
            <Crown className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">Excellence</h2>
            <p className="text-paragraph max-w-[30ch] mt-2">
              Our commitment to quality, integrity, and innovation drives
              everything we do.
            </p>
          </div>

          <div className="bg-white p-7 rounded-md flex flex-col justify-between h-full">
            <Sparkles className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">Innovation</h2>
            <p className="text-paragraph max-w-[30ch] mt-2">
              We create forward-thinking solutions that empower entrepreneurs
              across borders.
            </p>
          </div>

          <div className="bg-white p-7 rounded-md flex flex-col justify-between h-full">
            <Trophy className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">Global Vision</h2>
            <p className="text-paragraph max-w-[30ch] mt-2">
              Our team is building a world where African products thrive on the
              international stage — seamlessly and confidently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
