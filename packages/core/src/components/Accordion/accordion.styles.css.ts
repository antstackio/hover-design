import { createTheme, style } from "@vanilla-extract/css";
import { IAccordionTheme } from "./accordion.styles.types";
import { recipe } from "@vanilla-extract/recipes";

export const [accordionThemeClass, accordionThemeVars]: IAccordionTheme =
  createTheme({
    accordionTransform: "rotate(180deg)",
    accordionTransition: "transform 0.2s ease-in-out"
  });

export const accordionGroupClass = style({});
export const detailsClass = style({});
export const summaryOpenClass = style({});
export const summaryClass = style({
  cursor: "pointer",
  padding: "18px 16px",

  display: "flex"
});

export const accordionContentClass = style({
  padding: "16px"
});
export const accordionIconClass = recipe({
  base: {
    marginRight: "8px",
    transition: accordionThemeVars.accordionTransition
  },
  variants: {
    position: {
      right: {
        marginLeft: "auto"
      },
      left: {
        marginLeft: 0
      }
    }
  }
});
