import { Breadcrumb } from "./Breadcrumb";
import React from "react";
import type { Story } from "@ladle/react";
import { IBreadcrumbProps } from "./breadcrumb.types";

export const Controls: Story<IBreadcrumbProps> = ({
  crumbs,
  separator = "/",
  className,
  ...nativeProps
}) => (
  <>
    <Breadcrumb crumbs={crumbs} separator={separator} {...nativeProps} />
  </>
);
const crumbs = [
  { title: "Hover" },
  { title: "Documantation", href: "#" },
  { title: "About", href: "#" },
];
const separator = ">";
Controls.args = {
  crumbs,
  separator,
};
