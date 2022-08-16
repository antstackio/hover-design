import { RecipeVariants } from "@vanilla-extract/recipes";
import { avatar } from "./avatar.css";
import { ReactNode } from "react";

export type IAvatarProps = JSX.IntrinsicElements["span"] &
  RecipeVariants<typeof avatar> & {
    color?: string;
    textColor?: string;
  };
