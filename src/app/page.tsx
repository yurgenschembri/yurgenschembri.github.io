import LinkedInIcon from "@/components/icons/linkedin-icon";

export default function Home() {
  return (
    <div className="bg-wheat w-screen h-screen flex flex-col items-center justify-center">
      <div className="border-2 border-onyx border-solid rounded-md p-8 flex flex-col items-center gap-6">
        <h1 className="text-onyx">Yurgen Schembri Xuereb</h1>

        <div className="flex flex-col items-center font-extralight text-sm">
          <a className="text-onyx" href="#web">
            Web Developer
          </a>
          <a className="text-onyx" href="#software">
            Software Architect
          </a>
          <a className="text-onyx" href="#cloud">
            Cloud Applications Consultant
          </a>
        </div>

        <div className="text-onyx font-mono flex flex-row gap-4 items-center">
          <a
            href="mailto:info@yurgenschembri.com"
            target="_blank"
            aria-label="Email"
            className="px-4 py-2 no-underline text-onyx  bg-carolina_blue-500 rounded hover:bg-carolina_blue-600 focus:bg-carolina_blue-600 active:bg-carolina_blue-400 transition-colors ease-in-out duration-200"
          >
            Get in touch {">"}.
          </a>
          <a
            href="https://www.linkedin.com/in/yurgenschembri/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
