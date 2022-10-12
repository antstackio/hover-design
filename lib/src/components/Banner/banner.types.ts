import { ReactNode } from "react";
import { AlertProps } from "../Alert/alert.types";

type divType = Omit<JSX.IntrinsicElements["div"], "ref"> &
  Omit<AlertProps, "withCloseButton" | "onClose" | "closeButtonLabel">;

export type BannerPropsType = divType & {
  alignment?: "center" | "left" | "right";
  showCtaButton?: boolean;
  ctaIcon?: ReactNode;
  ctaAction?: () => void;
};
