import useTransform from "./use-transform";

/**
 * Transforms a value between 0 and 1 to a value between -distance and distance.
 * Values less than 0 are transformed to -distance, and values greater than 1 are transformed to distance.
 * @param value The value to transform.
 * @param distance The distance to transform the value to.
 * @returns The transformed value.
 * @example useParallax(-0.5, -100) // -100
 * @example useParallax(0, 100) // -100
 * @example useParallax(0.5, 100) // 0
 * @example useParallax(1, 100) // 100
 * @example useParallax(1.5, 100) // 100
 */
export default function useParallax(value: number, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
