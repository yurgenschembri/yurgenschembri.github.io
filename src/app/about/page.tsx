import MsCertAssociateIcon from "@/components/icons/ms-cert-associate-icon";
import MsCertExpertIcon from "@/components/icons/ms-cert-expert-icon";
import UmIcon from "@/components/icons/um-icon";
import AppLink from "@/components/ui/app-link";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `yurgenschembri | 8+ years experience`,
  description:
    "Web development & software architecture for small businesses and mentorship for aspiring & growing software engineers.",
};

const years = new Date().getFullYear() - 2017;

export default function AboutPage() {
  const experience = [
    {
      title: "Software Engineer",
      icon: "📗",
    },
    {
      title: "Senior Software Engineer",
      icon: "☕",
    },
    {
      title: "Lead Software Engineer",
      icon: "🚀",
    },
    {
      title: "Software Architect",
      icon: "🧭",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      emblem: <MsCertExpertIcon />,
      emblemLink:
        "https://learn.microsoft.com/api/credentials/share/en-gb/yurgenschembri/90F3C21A0E2A87B5?sharingId=FDDB5899EE468047",
      date: 2024,
      organisation: "Microsoft",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      emblem: <MsCertAssociateIcon />,
      emblemLink:
        "https://learn.microsoft.com/api/credentials/share/en-gb/yurgenschembri/DB686A44E5D75488?sharingId=FDDB5899EE468047",
      date: 2023,
      organisation: "Microsoft",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      emblem: <MsCertAssociateIcon />,
      emblemLink:
        "https://learn.microsoft.com/api/credentials/share/en-gb/yurgenschembri/EFD9618171F25231?sharingId=FDDB5899EE468047",
      date: 2019,
      organisation: "Microsoft",
    },
    {
      title: "M. Sc. in Artificial Intelligence",
      emblem: <UmIcon />,
      date: 2017,
      organisation: "University of Malta",
    },
    {
      title: "B. Sc. in I.T. (Artificial Intelligence)",
      emblem: <UmIcon />,
      date: 2020,
      organisation: "University of Malta",
    },
  ];

  return (
    <div className="bg-[url(/img/bg-about.jpg)] bg-cover bg-fixed">
      <div
        className={clsx(
          "pt-24 min-h-dvh flex flex-col items-center",
          "bg-gradient-to-b from-onyx-900/75 to-onyx-900/75"
        )}
      >
        <div className="mx-6 my-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h1 className=" text-4xl/snug font-bold font-serif">
            {years}+ Years Experience in Software Engineering
          </h1>
          <h2 className="text-xl/snug font-sans text-right">
            <AppLink href="#certifications" scroll={true}>
              B.Sc. IT
            </AppLink>{" "}
            | <AppLink href="#certifications">M.Sc. AI</AppLink> |{" "}
            <AppLink href="#certifications">
              Microsoft Certified Architect
            </AppLink>
          </h2>
        </div>
        <section
          id="vision"
          className="w-full px-6 py-12 flex flex-col gap-8 bg-onyx text-wheat-800"
          aria-label="Vision & Mission"
        >
          <p className="text-xl/snug font-serif italic text-justify">
            &quot;To empower small businesses with high-quality software, while
            mentoring the next generation of developers to thrive in an
            AI-driven world.&quot;
          </p>
          <p className="text-lg font-serif text-justify">
            Technology should be an enabler for small businesses and individuals
            alike. My mission is to provide guidance and high-quality software
            solutions to small businesses. At the same time, I am committed to
            mentoring the next generation of developers, equipping them with the
            skills and mindset needed to excel in an AI-driven world.
          </p>
        </section>
        <section
          id="experience"
          className="w-full px-6 py-12 flex flex-col gap-8"
          aria-label="Work experience"
        >
          <h3 className="text-lg">Experience</h3>
          <ul className="flex flex-row justify-evenly flex-wrap gap-4">
            {experience.map((exp) => (
              <li
                key={exp.title}
                className="flex-1 p-4 rounded-xl text-center bg-wheat-800/75"
              >
                <div className="font-bold">{exp.title}</div>
                <div className="text-xl">{exp.icon}</div>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="certifications"
          className="w-full px-6 py-12 flex flex-col gap-8 bg-wheat-800"
          aria-label="Educational background and certifications"
        >
          <h3 className="text-lg">Certifications</h3>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex flex-row gap-4">
                <div className="min-w-14">
                  {cert.emblemLink ? (
                    <Link href={cert.emblemLink}>{cert.emblem}</Link>
                  ) : (
                    cert.emblem
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-onyx">{cert.title}</span>
                  <div className="flex flex-row gap-4">
                    <span className="font-sans w-10 text-onyx">
                      {cert.date}
                    </span>
                    <span className="font-thin text-onyx-700">
                      {cert.organisation}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
