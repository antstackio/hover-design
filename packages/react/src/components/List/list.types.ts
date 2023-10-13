import { RecipeVariants } from "@vanilla-extract/recipes";
import { listStyles } from "@hover-design/core";

export type IListProps = JSX.IntrinsicElements["ul"] &
  RecipeVariants<typeof listStyles> & {
    type?: CSSStyleDeclaration["listStyleType"];
  };
export type IListTheme = [string, { listStyles: { listStyleType: string } }];
