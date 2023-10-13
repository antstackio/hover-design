import { globalStyle } from "@vanilla-extract/css";
import {
  accordionGroupClass,
  accordionThemeVars,
  detailsClass
} from "./accordion.styles.css";

globalStyle(`${detailsClass} > summary::-webkit-details-marker`, {
  display: "none"
});
globalStyle(`${detailsClass} > summary`, {
  listStyle: "none"
});
globalStyle(`${detailsClass}[open] > summary > [data-attribute="chevron"]`, {
  transform: accordionThemeVars.accordionTransform
});

globalStyle(`${detailsClass}[open] > summary`, {
  backgroundColor: "hsla(216, 17%, 17%, 0.1)",
  borderBottom: "1px solid hsla(0, 0%, 85%, 1)"
});

globalStyle(`${accordionGroupClass} > ${detailsClass}:first-child`, {
  borderRadius: "4px 4px 0px 0px"
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:last-child`, {
  borderRadius: "0px 0px 4px 4px"
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:first-child > summary`, {
  borderRadius: "4px 4px 0px 0px"
});
globalStyle(`${accordionGroupClass} > ${detailsClass}:last-child > summary`, {
  borderRadius: "0px 0px 4px 4px"
});
globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:first-child):not(:last-child)`,
  {
    borderRadius: "0px 0px 0px 0px"
  }
);

globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:first-child):not(:last-child) > summary`,
  {
    borderRadius: "0px 0px 0px 0px"
  }
);
globalStyle(`${accordionGroupClass} > ${detailsClass}:not(:only-child)`, {
  borderBottom: "1px solid hsla(0, 0%, 85%, 1)"
});
globalStyle(
  `${accordionGroupClass} > ${detailsClass}:not(:only-child) > summary`,
  {
    borderBottom: "1px solid hsla(0, 0%, 85%, 1)"
  }
);
