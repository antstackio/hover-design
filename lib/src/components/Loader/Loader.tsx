import { forwardRef, ForwardRefRenderFunction } from "react";
import { Spinner } from "./Spinner/Spinner";
import { LoaderProps } from "./loader.types";

const LoaderComponent: ForwardRefRenderFunction<SVGSVGElement, LoaderProps> = (
  { variant = "spinner", ...props },
  ref
) => {
  return <Spinner {...props} ref={ref} />;
};

export const Loader = forwardRef(LoaderComponent);
