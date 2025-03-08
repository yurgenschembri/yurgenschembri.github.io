import LinkedInIcon from "@/components/icons/linkedin-icon";

export default function Home() {
  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col items-center justify-center">
      <div className="border-2 border-sky-500/30 border-solid rounded-md p-8 flex flex-col items-center gap-6">
        <h1 className="text-white">Yurgen Schembri Xuereb</h1>

        <div className="flex flex-col items-center font-extralight text-sm">
          <a className="text-gray-400" href="#web">
            Web Developer
          </a>
          <a className="text-gray-400" href="#software">
            Software Architect
          </a>
          <a className="text-gray-400" href="#cloud">
            Cloud Applications Consultant
          </a>
        </div>

        <div className="text-gray-300 font-mono flex flex-row gap-4 items-center">
          <a
            href="mailto:info@yurgenschembri.com"
            target="_blank"
            aria-label="Email"
            className="px-4 py-2 no-underline text-blue-100  bg-sky-500 rounded hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-400 transition-colors ease-in-out duration-200"
          >
            Get in touch {">"}.
          </a>
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
