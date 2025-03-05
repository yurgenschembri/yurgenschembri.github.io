import { RefObject, useEffect, useState } from "react";

/**
 * Returns the position of the target element relative to the container.
 * @param container The container element to track.
 * @param target The target element to track.
 * @returns The position (absolute and percentage) of the element relative to the container.
 * @example const { y, x, yProgress, xProgress } = useContainerElementPosition(containerRef, targetRef);
 */
export default function useContainerElementPosition(
  container: RefObject<HTMLElement>,
  target: RefObject<HTMLElement>
) {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [yProgress, setYProgress] = useState(0);
  const [xProgress, setXProgress] = useState(0);

  useEffect(() => {
    const containerElement = container.current;
    const targetElement = target.current;

    const onScroll = () => {
      const containerHeight = containerElement.clientHeight;
      const containerWidth = containerElement.clientWidth;

      const containerBoundingRect = containerElement.getBoundingClientRect();
      const targetBoundingRect = targetElement.getBoundingClientRect();

      const targetYValue =
        (targetBoundingRect.top +
          targetBoundingRect.bottom -
          containerBoundingRect.top) /
        2;
      const targetXValue =
        (targetBoundingRect.left +
          targetBoundingRect.right -
          containerBoundingRect.left) /
        2;

      const targetYProgressValue =
        Math.round((targetYValue / containerHeight) * 100) / 100.0;
      const targetXProgressValue =
        Math.round((targetXValue / containerWidth) * 100) / 100.0;

      setY(targetYValue);
      setX(targetXValue);

      setYProgress(targetYProgressValue);
      setXProgress(targetXProgressValue);
    };

    if (container && target) {
      onScroll();
      containerElement.addEventListener("scroll", onScroll);
      return () => containerElement.removeEventListener("scroll", onScroll);
    }
  }, [container, target]);

  return {
    y,
    x,
    yProgress,
    xProgress,
  };
}
