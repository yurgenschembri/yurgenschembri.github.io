import { useEffect, useState } from "react";

/**
 * Transforms a value from the domain to the range defined.
 * Values outside of the domain are transformed to the closest range value.
 * @param value The value to transform.
 * @param domain The domain of the value.
 * @param distance The distance to transform the value to.
 * @returns The transformed value.
 * @example useTransform(0, [0, 1], [0, 100]) // 0
 * @example useTransform(0.5, [0, 1], [0, 100]) // 50
 * @example useTransform(1, [0, 1], [0, 100]) // 100
 * @example useTransform(0.2, [-1, 0, 1], [0, 100, 0]) // 80
 */
export default function useTransform(
  value?: number,
  domain: number[] = [0, 1],
  range: number[] = [0, 1]
) {
  const [transformedValue, setTransformedValue] = useState<number | null>(null);

  useEffect(() => {
    if (value === null || value === undefined) {
      setTransformedValue(null);
      return;
    }

    let domainIndex;

    if (domain.length != range.length) {
      throw new Error("Domain and Range must have same length.");
    }

    if (domain.length < 2) {
      throw new Error("Domain must have at least 2 values.");
    }

    if (range.length < 2) {
      throw new Error("Range must have at least 2 values.");
    }

    for (let i = 1; i < domain.length; i++) {
      if (domain[i] < domain[i - 1]) {
        throw new Error("Domain values must be in ascending order.");
      }
      if (value >= domain[i - 1] && value <= domain[i]) {
        domainIndex = i;
      }
    }

    if (domainIndex === undefined) {
      if (value < domain[0]) {
        setTransformedValue(range[0]);
      } else if (value > domain[domain.length - 1]) {
        setTransformedValue(range[range.length - 1]);
      }
      return;
    }

    const minDomain = domain[domainIndex - 1];
    const maxDomain = domain[domainIndex];
    const minRange = range[domainIndex - 1];
    const maxRange = range[domainIndex];

    const result =
      ((value - minDomain) * (maxRange - minRange)) / (maxDomain - minDomain) +
      minRange;

    setTransformedValue(result);
  }, [value, domain, range]);

  return transformedValue;
}
