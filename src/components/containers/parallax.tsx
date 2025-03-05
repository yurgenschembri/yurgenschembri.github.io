"use client";

import useElementPosition from "@/utils/use-element-position";
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
  contentRef: RefObject<HTMLElement>;
  distanceY?: number;
};

export function ParallaxContentWithEffect({
  children,
  ref,
  className,
  style,
  contentRef,
  distanceY = 0,
}: ParallaxContentWithEffectProps) {
  const elementPos = useElementPosition(contentRef);
  const translateY = useParallax(elementPos.yProgress, distanceY);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={clsx(
        "absolute inline-block",
        "transition-transform ease-out duration-100",
        className
      )}
      style={{
        visibility: translateY === null ? "hidden" : "visible",
        transform: `translateY(${translateY}px)`,
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
