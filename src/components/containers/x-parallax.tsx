"use client";

import useContainerElementPosition from "@/utils/use-scroll-position";
import useParallax from "@/utils/use-parallax";
import clsx from "clsx";
import { ReactNode, RefObject } from "react";

type ParallaxProps = {
  children: Readonly<ReactNode>;
  ref?: RefObject<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
};

type ParallaxSectionProps = ParallaxProps & {};

type ParallaxContentProps = ParallaxProps & {};

type ParallaxContentWithEffectProps = ParallaxContentProps & {
  parallaxRef: RefObject<HTMLElement>;
  contentRef: RefObject<HTMLElement>;
  distanceX?: number;
};

export function ParallaxContentWithEffect({
  children,
  ref,
  className,
  style,
  parallaxRef,
  contentRef,
  distanceX = 0,
}: ParallaxContentWithEffectProps) {
  const elementPos = useContainerElementPosition(parallaxRef, contentRef);
  const translateX = useParallax(elementPos.xProgress, distanceX);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(
        "absolute inline-block",
        "transition-transform ease-out duration-100",
        className
      )}
      style={{
        visibility: translateX === null ? "hidden" : "visible",
        transform: `translateX(${translateX}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ParallaxContent({
  children,
  ref,
  className,
  style,
}: ParallaxContentProps) {
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(className)}
      style={style}
    >
      {children}
    </div>
  );
}

export function ParallaxSection({
  children,
  ref,
  className,
  style,
}: ParallaxSectionProps) {
  return (
    <section className={clsx("relative", className)} ref={ref} style={style}>
      {children}
    </section>
  );
}

export function Parallax({ children, ref, className, style }: ParallaxProps) {
  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(className)}
      style={style}
    >
      {children}
    </div>
  );
}
