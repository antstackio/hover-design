import { forwardRef, ForwardRefRenderFunction } from "react";
import { Spinner } from "./Spinner/Spinner";
import { LoaderProps } from "./loader.types";

const LoaderComponent: ForwardRefRenderFunction<SVGSVGElement, LoaderProps> = (
  { variant = "spinner", ...props },
  ref
) => {
  // const getLoader = () => {  // to be uncommented when more variants are added
  //   switch (variant) {
  //     case "spinner":
  //       return <Spinner {...props} ref={ref} />;
  //     default:
  //       return <Spinner {...props} ref={ref} />;
  //   }
  // };

  return <Spinner {...props} ref={ref} />;
};

export const Loader = forwardRef(LoaderComponent);
