import { Metadata } from "next";

export const metadata: Metadata = {
  title: `yurgenschembri | 8+ years experience`,
  description:
    "Web development & software architecture for small businesses and mentorship for aspiring & growing software engineers.",
};

const years = new Date().getFullYear() - 2017;

export default function AboutPage() {
  return (
    <div className="bg-[url(/img/bg-about.jpg)] bg-cover bg-fixed">
      <div className="pt-24 px-6 min-h-screen bg-wheat-900/90">
        <header className="flex flex-col justify-start items-center text-center">
          <h1 className="text-4xl/snug font-bold font-serif sm:w-3/4 md:w-2/3 lg:w-1/2">
            {years}+ Years Experience in Software Engineering
          </h1>
          <h2>B.Sc. IT, M.Sc. AI, and Microsoft Certified Architect</h2>
        </header>
        <section>
          <h3>Vision/Mission</h3>
        </section>
        <section>
          <h3>Experience</h3>
        </section>
        <section>
          <h3>Certifications</h3>
        </section>
      </div>
    </div>
  );
}
