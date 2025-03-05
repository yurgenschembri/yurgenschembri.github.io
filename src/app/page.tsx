"use client";

import {
  Parallax,
  ParallaxContent,
  ParallaxContentWithEffect,
  ParallaxSection,
} from "@/components/containers/parallax";
import XParallaxExample from "@/components/x-parallax-example";

import { RefObject, useRef } from "react";

export default function Home() {
  const ref1 = useRef<HTMLElement>(null);
  const ref2 = useRef<HTMLElement>(null);
  const ref3 = useRef<HTMLElement>(null);

  return (
    <>
      <style>{`html { scroll-snap-type: y mandatory; }`}</style>
      <Parallax>
        <ParallaxSection className="bg-aqua-500 flex justify-center items-center h-screen">
          <ParallaxContent
            ref={ref1 as RefObject<HTMLDivElement>}
            className="w-[75%] h-[70%] absolute shadow-lg shadow-gray-600"
          >
            <XParallaxExample />
          </ParallaxContent>
          {ref1 && (
            <>
              <ParallaxContentWithEffect
                className="relative -top-[30%] left-[30%] text-right p-1 text-white font-bold text-3xl"
                contentRef={ref1 as RefObject<HTMLElement>}
                distanceY={300}
              >
                <h2>#001</h2>
              </ParallaxContentWithEffect>
            </>
          )}
        </ParallaxSection>

        <ParallaxSection className="bg-cream-500 flex justify-center items-center h-screen">
          <ParallaxContent
            ref={ref2 as RefObject<HTMLDivElement>}
            className="w-64 max-w-screen bg-blue-500 absolute top-1/3"
          >
            world
            <textarea></textarea>
          </ParallaxContent>
          <ParallaxContentWithEffect
            className="top-1/2 left-1/2"
            contentRef={ref2 as RefObject<HTMLElement>}
            distanceY={200}
          >
            #002
          </ParallaxContentWithEffect>
        </ParallaxSection>

        <ParallaxSection className="bg-aqua-500 flex justify-center items-center h-screen">
          <ParallaxContent ref={ref3 as RefObject<HTMLDivElement>}>
            whatsup
          </ParallaxContent>
          <ParallaxContentWithEffect
            className="left-2/3 top-2/3"
            contentRef={ref3 as RefObject<HTMLElement>}
            distanceY={100}
          >
            #003
          </ParallaxContentWithEffect>
        </ParallaxSection>
      </Parallax>
    </>
  );
}
