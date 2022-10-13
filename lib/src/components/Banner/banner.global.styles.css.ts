import { globalStyle } from "@vanilla-extract/css";
import { bannerContainerStyles } from "./banner.styles.css";

globalStyle(
  `${bannerContainerStyles} .hover-banner-not-left-aligned .hover-alert-description`,
  {
    marginLeft: 0,
  }
);
