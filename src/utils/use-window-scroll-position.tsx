import { useEffect, useState } from "react";

/**
 * Returns the current scroll position of the document.
 * @returns The scroll position (absolute and percentage) of the document.
 * @example const { scrollY, scrollX, scrollYProgress, scrollXProgress } = useDocumentScrollPosition();
 */
export default function useWindowScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [scrollXProgress, setScrollXProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const documentHeight = document.body.scrollHeight;
      const documentWidth = document.body.scrollWidth;

      const viewPortHeight = document.documentElement.clientHeight;
      const viewPortWidth = document.documentElement.clientWidth;

      const scrollYValue = window.scrollY;
      const scrollXValue = window.scrollX;

      const scrollYProgressValue =
        Math.round((scrollYValue / (documentHeight - viewPortHeight)) * 100) /
        100.0;
      const scrollXProgressValue =
        Math.round((scrollXValue / (documentWidth - viewPortWidth)) * 100) /
        100.0;

      setScrollY(scrollYValue);
      setScrollX(scrollXValue);

      setScrollYProgress(scrollYProgressValue);
      setScrollXProgress(scrollXProgressValue);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollY, scrollX, scrollYProgress, scrollXProgress };
}
