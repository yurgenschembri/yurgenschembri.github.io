"use client";

import Typewriter, { Options } from "typewriter-effect";

export default function AppTypewriter(props: Readonly<Partial<Options>>) {
  return <Typewriter options={props} />;
}
