import { RefObject, useEffect, useState } from "react";

/**
 * Returns the position of the target element relative to the viewport.
 *
 * @param target The target element to track.
 * @returns The position (absolute and percentage) of the element relative to the viewport.
 * @example const { y, x, yProgress, xProgress } = useElementPosition(targetRef);
 */
export default function useElementPosition(target: RefObject<HTMLElement>) {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [yProgress, setYProgress] = useState(0);
  const [xProgress, setXProgress] = useState(0);

  useEffect(() => {
    const containerElement = document.documentElement;
    const targetElement = target.current;

    const onScroll = () => {
      const containerHeight = containerElement.clientHeight;
      const containerWidth = containerElement.clientWidth;

      const targetBoundingRect = targetElement.getBoundingClientRect();

      const targetYValue =
        (targetBoundingRect.top + targetBoundingRect.bottom) / 2;
      const targetXValue =
        (targetBoundingRect.left + targetBoundingRect.right) / 2;

      const targetYProgressValue =
        Math.round((targetYValue / containerHeight) * 100) / 100.0;
      const targetXProgressValue =
        Math.round((targetXValue / containerWidth) * 100) / 100.0;

      setY(targetYValue);
      setX(targetXValue);

      setYProgress(targetYProgressValue);
      setXProgress(targetXProgressValue);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    y,
    x,
    yProgress,
    xProgress,
  };
}
