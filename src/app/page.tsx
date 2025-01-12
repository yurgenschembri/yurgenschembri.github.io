import LinkedInIcon from './components/icons/linkedin-icon';

export default function Home() {
  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-white">Yurgen Schembri Xuereb</h1>
      
      <div className="flex flex-col gap-6 items-center font-s">
        <sub className="text-gray-400">Web Developer</sub>
        <sub className="text-gray-400">Software Architect</sub>
        <sub className="text-gray-400">Cloud Applications Consultant</sub>
      </div>
      
      <div className="text-gray-300 font-mono flex flex-row gap-6 items-center">
        <a href="mailto:info@yurgenschembri.com" target="_blank" aria-label="Email"
          className="px-4 py-2 text-blue-100 no-underline bg-sky-500 rounded hover:bg-sky-600 hover:underline group">
          Get in touch {">"}.
        </a>
        <a href="https://www.linkedin.com/in/yurgenschembri/" target="_blank" aria-label="LinkedIn"
          className="text-sky-500 hover:text-sky-600">
            <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
