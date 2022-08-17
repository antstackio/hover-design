import { RecipeVariants } from "@vanilla-extract/recipes";
import { avatar } from "./avatar.css";
import { MutableRefObject, ReactNode } from "react";

export type IAvatarProps = JSX.IntrinsicElements["div"] &
  RecipeVariants<typeof avatar> & {
    src?: string;
    alt?: string;
    borderRadius?: string;
    size?: string;
    color?: string;
    textColor?: string;
    ref?: MutableRefObject<HTMLDivElement | null>;
    children?: ReactNode;
  };

export type IAvatarTheme = [
  string,
  { avatarStyleColor: string; avatarStyleTextColor: string }
];
