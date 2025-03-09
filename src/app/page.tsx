import LinkedInIcon from "@/components/icons/linkedin-icon";
import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "bg-wheat w-screen h-screen flex flex-col items-center justify-center"
      )}
    >
      <div className="border-0 border-onyx border-solid rounded-md p-8 flex flex-col items-center gap-6">
        <h1 className="text-onyx">Yurgen Schembri Xuereb</h1>

        <div className="flex flex-col font-extralight text-sm text-onyx">
          <a className="text-left" href="#web">
            Web Developer
          </a>
          <a className="text-center" href="#software">
            Software Architect
          </a>
          <a className="text-right" href="#mentorship">
            Mentor
          </a>
        </div>

        <div className="text-onyx font-mono flex flex-row gap-2 items-center">
          <a
            href="mailto:info@yurgenschembri.com"
            target="_blank"
            aria-label="Email"
            className={clsx(
              "h-10 px-4 rounded-sm text-sm content-center no-underline shadow-md text-onyx bg-carolina_blue-500",
              "transition-colors ease-in-out duration-200",
              "hover:bg-carolina_blue-600 focus:bg-carolina_blue-600 active:bg-carolina_blue-400"
            )}
          >
            Get in touch {">"}.
          </a>
          <a
            href="https://www.linkedin.com/in/yurgenschembri/"
            target="_blank"
            aria-label="LinkedIn"
            className={clsx(
              "h-10 w-10 justify-center flex flex-row p-2 bg-wheat-700 rounded-sm shadow-md",
              "transition-colors ease-in-out duration-200",
              "hover:bg-wheat-800"
            )}
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
