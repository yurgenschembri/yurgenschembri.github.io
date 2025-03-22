import LinkedInIcon from "@/components/icons/linkedin-icon";
import CallToActionLink from "@/components/ui/call-to-action-link";
import AppTypewriter from "@/components/ui/app-typewriter";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `yurgenschembri | From challenges to smart software solutions`,
  description:
    "Web development & software architecture for small businesses and mentorship for aspiring & growing software engineers.",
};

export default function HomePage() {
  const audience = ["for developers", "for businesses", "for students"];
  const roles = ["Web Developer", "Software Architect", "Mentor"];

  return (
    <header className="bg-[url(/img/bg-home.jpg)] bg-cover bg-fixed">
      <div
        className={clsx(
          "pt-24 px-6 min-h-dvh flex flex-col justify-around items-center text-center",
          "bg-gradient-to-b from-wheat-900/75 to-onyx-900/75"
        )}
      >
        <div className="sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl/snug font-thin">
            From <span className="font-bold text-onyx-400">challenges</span>
            <br />
            to smart software{" "}
            <span className="font-bold text-onyx-400">solutions</span>
          </h1>
          <div className="mt-2 text-onyx-600 text-2xl/tight">
            <AppTypewriter
              strings={audience}
              loop={true}
              autoStart={true}
              delay={100}
              deleteSpeed={100}
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          {roles.map((role, index) => (
            <div key={role} className="flex flex-row gap-2">
              {index > 0 ? <span>|</span> : ""}
              <span className="text-onyx-600">{role}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2">
          <CallToActionLink href="mailto:info@yurgenschembri.com">
            Get in touch
          </CallToActionLink>
          <CallToActionLink
            href="https://www.linkedin.com/in/yurgenschembri/"
            aria-label="LinkedIn"
            className={clsx("justify-center flex flex-row p-2")}
          >
            <LinkedInIcon />
          </CallToActionLink>
        </div>
      </div>
    </header>
  );
}
