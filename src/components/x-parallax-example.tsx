import {
  Parallax,
  ParallaxContent,
  ParallaxContentWithEffect,
  ParallaxSection,
} from "@/components/containers/x-parallax";
import { RefObject, useRef } from "react";

export default function XParallaxExample() {
  const containerRef = useRef<HTMLElement>(null);
  // const blueContentRef = useRef<HTMLElement>(null);
  const redContentRef = useRef<HTMLElement>(null);
  const orangeContentRef = useRef<HTMLElement>(null);
  const yellowContentRef = useRef<HTMLElement>(null);

  return (
    <Parallax
      className="w-full h-full overflow-x-scroll flex flex-row"
      ref={containerRef as RefObject<HTMLElement>}
    >
      <ParallaxSection className="min-w-[500px] h-full bg-red-500">
        <ParallaxContent ref={redContentRef as RefObject<HTMLElement>}>
          <div className="w-full h-full"></div>
        </ParallaxContent>
        {redContentRef && (
          <ParallaxContentWithEffect
            className="relative left-[30%] y-[50%] p-1 text-white font-bold text-lg"
            parallaxRef={containerRef as RefObject<HTMLElement>}
            contentRef={redContentRef as RefObject<HTMLElement>}
            distanceX={100}
          >
            <div>red</div>
          </ParallaxContentWithEffect>
        )}
      </ParallaxSection>
      <ParallaxSection className="min-w-[500px] h-full bg-orange-500">
        <ParallaxContent ref={orangeContentRef as RefObject<HTMLElement>}>
          <div className="w-full h-full"></div>
        </ParallaxContent>
        <ParallaxContentWithEffect
          parallaxRef={containerRef as RefObject<HTMLElement>}
          contentRef={orangeContentRef as RefObject<HTMLElement>}
          distanceX={100}
        >
          <div>orange</div>
        </ParallaxContentWithEffect>
      </ParallaxSection>
      <ParallaxSection className="min-w-[500px] h-full bg-yellow-500">
        <ParallaxContent ref={yellowContentRef as RefObject<HTMLElement>}>
          <div className="w-full h-full"></div>
        </ParallaxContent>
        <ParallaxContentWithEffect
          parallaxRef={containerRef as RefObject<HTMLElement>}
          contentRef={yellowContentRef as RefObject<HTMLElement>}
          distanceX={100}
        >
          <div>yellow</div>
        </ParallaxContentWithEffect>
      </ParallaxSection>
    </Parallax>
  );
}
