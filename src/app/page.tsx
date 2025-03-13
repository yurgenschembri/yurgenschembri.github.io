import LinkedInIcon from "@/components/icons/linkedin-icon";
import AppLink from "@/components/ui/app-link";
import CallToActionLink from "@/components/ui/call-to-action-link";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `yurgenschembri | Helping Small Businesses and Individuals Achieve More in Tech`,
  description:
    "Web development & software architecture for small businesses and mentorship for aspiring & growing software engineers.",
};

export default function HomePage() {
  return (
    <div className="bg-[url(/img/bg-home.jpg)] bg-cover bg-fixed">
      <div
        className={clsx(
          "pt-24 min-h-dvh flex flex-col justify-around items-center text-center",
          "bg-gradient-to-b from-wheat-900/75 to-onyx-900/75"
        )}
      >
        <h1 className="mx-6 sm:w-3/4 md:w-2/3 lg:w-1/2 text-4xl/snug font-bold font-serif">
          Helping{" "}
          <CallToActionLink href="/services/for-businesses">
            Small Businesses
          </CallToActionLink>{" "}
          and{" "}
          <CallToActionLink href="/services/for-individuals">
            Individuals
          </CallToActionLink>{" "}
          Achieve More in Tech
        </h1>
        <p>
          <AppLink href="/services/web">Web Developer</AppLink> |{" "}
          <AppLink href="/services/software">Software Architect</AppLink> |{" "}
          <AppLink href="/services/mentorship">Mentor</AppLink>
        </p>
        <div className="flex flex-row items-center gap-2">
          <CallToActionLink href="/services">Explore services</CallToActionLink>
          {/* <CallToActionLink href="/contact">Get in touch</CallToActionLink> */}
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
    </div>
  );
}
