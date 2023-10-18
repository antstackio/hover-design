import { RecipeVariants } from "@vanilla-extract/recipes";
import { badges } from "@hover-design/core";
import { ReactNode } from "react";

export type IBadgesProps = JSX.IntrinsicElements["span"] &
  RecipeVariants<typeof badges> & {
    label: string | JSX.Element;
    color?: string;
    textColor?: string;
    children?: ReactNode;
    position?:
      | "default"
      | "top-start"
      | "top-end"
      | "bottom-end"
      | "bottom-start";
    shape?: "rounded" | "rounded-circle";
    hide?: boolean;
  };
