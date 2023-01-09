import { SpinnerProps } from "./Spinner/spinner.types";
export type LoaderProps = JSX.IntrinsicElements["svg"] &
  SpinnerProps & {
    variant?: "spinner";
  };
