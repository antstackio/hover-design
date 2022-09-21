import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";
import type { Story } from "@ladle/react";

export const Controls: Story<BreadcrumbProps> = ({
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
