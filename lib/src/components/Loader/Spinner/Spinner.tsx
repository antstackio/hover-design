import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from "react";
import { spinnerStyle } from "./spinner.styles.css";
import { SpinnerProps } from "./spinner.types";

const SpinnerComponent: ForwardRefRenderFunction<
  SVGSVGElement,
  SpinnerProps
> = (
  {
    color = "#408FEC",
    size = 30,
    thickness,
    dashLength,
    isRoundedDash = false,
  },
  ref
) => {
  const [internalLength, setInternalLength] = useState(0);
  const viewBox = `0 0 ${size} ${size}`;
  const internalThickness = thickness || size / 5;
  const radius = (size - internalThickness) / 2;
  const circumference = 2 * radius * Math.PI;

  useEffect(() => {
    dashLength && typeof dashLength === "number"
      ? setInternalLength(dashLength)
      : setInternalLength(circumference / 4);
  }, [dashLength, size]);

  return (
    <svg width={size} height={size} viewBox={viewBox} ref={ref}>
      <circle
        fill="none"
        stroke="#E5E9F2"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={internalThickness}
      />
      <circle
        className={spinnerStyle}
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={internalThickness}
        strokeDasharray={`${internalLength},${circumference - internalLength}`}
        strokeLinecap={isRoundedDash ? "round" : "butt"}
      />
    </svg>
  );
};

export const Spinner = forwardRef(SpinnerComponent);
