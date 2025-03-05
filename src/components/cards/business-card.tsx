import LinkedInIcon from "../icons/linkedin-icon";

export default function BusinessCard() {
  return (
    <div className="bg-cream-500 w-full h-full flex flex-col items-center justify-center">
      <div className="border-2 border-sky-500/30 border-solid rounded-md p-8 flex flex-col items-center gap-6">
        <h1 className="">Yurgen Schembri Xuereb</h1>
        <div className="flex flex-col items-center font-extralight text-sm">
          <a className="" href="#web">
            Web Developer
          </a>
          <a className="" href="#software">
            Software Architect
          </a>
          <a className="" href="#cloud">
            Cloud Applications Consultant
          </a>
        </div>
        <div className="font-mono flex flex-row gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/yurgenschembri/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-sky-500 hover:text-sky-600 focus:text-sky-600 active:text-sky-400 p-1"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
