import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonStyles } from "@hover-design/core";

export type ButtonProps = RecipeVariants<typeof buttonStyles> &
  JSX.IntrinsicElements["button"];
