import { Fragment } from "react";
import Education from "./components/education";
import { HomeHero } from "./components/home-hero";

export default function Home() {
  return (
    <Fragment>
      <style>{`html { scroll-snap-type: both mandatory; }`}</style>

      <HomeHero />
      <Education />
    </Fragment>
  );
}
