import { createTheme, globalStyle, style } from "@vanilla-extract/css";
import { IAccordionTheme } from "./accordion.types";
import { recipe } from "@vanilla-extract/recipes";

export const [accordionThemeClass, accordionThemeVars]: IAccordionTheme =
  createTheme({
    accordionTransform: "rotate(180deg)",
    accordionTransition: "transform 0.2s ease-in-out",
  });

export const accordionGroupClass = style({});
export const detailsClass = style({
  backgroundColor: "#fff",
});
export const summaryOpenClass = style({});
export const summaryClass = style({
  cursor: "pointer",
  padding: "18px 16px",

  display: "flex",
});

export const accordionContentClass = style({
  padding: "16px",
});
export const accordionIconClass = recipe({
  base: {
    marginRight: "8px",
    transition: accordionThemeVars.accordionTransition,
  },
  variants: {
    position: {
      right: {
        marginLeft: "auto",
      },
      left: {
        marginLeft: 0,
      },
    },
  },
});

globalStyle(`${detailsClass} > summary::-webkit-details-marker`, {
  display: "none",
});
globalStyle(`${detailsClass} > summary`, {
  listStyle: "none",
});
globalStyle(`${summaryOpenClass} > summary > [data-attribute="chevron"]`, {
  transform: accordionThemeVars.accordionTransform,
});

globalStyle(`${summaryOpenClass} > summary`, {
  backgroundColor: "hsla(216, 17%, 17%, 0.1)",
  borderBottom: "1px solid hsla(0, 0%, 85%, 1)",
});

globalStyle(`${accordionGroupClass} > ${detailsClass}:first-child`, {
  borderRadius: "4px 4px 0px 0px",
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:last-child`, {
  borderRadius: "0px 0px 4px 4px",
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:first-child > summary`, {
  borderRadius: "4px 4px 0px 0px",
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:last-child > summary`, {
  borderRadius: "0px 0px 4px 4px",
});
globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:first-child):not(:last-child)`,
  {
    borderRadius: "0px 0px 0px 0px",
  }
);

globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:first-child):not(:last-child) > summary`,
  {
    borderRadius: "0px 0px 0px 0px",
  }
);
globalStyle(`${accordionGroupClass} > ${detailsClass}:not(:only-child)`, {
  borderBottom: "1px solid hsla(0, 0%, 85%, 1)",
});
globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:only-child) > summary`,
  {
    borderBottom: "1px solid hsla(0, 0%, 85%, 1)",
  }
);
