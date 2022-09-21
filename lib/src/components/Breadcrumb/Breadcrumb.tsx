import React from "react";
import {
  breadcrumbWrapper,
  crumbSeparator,
  crumbTitle,
} from "./breadcrumb.css";

type crumb = {
  title: string;
  href?: string;
};

export interface BreadcrumbProps {
  crumbs: Array<crumb>;
  separator?: string | React.ReactNode;
  className?: string;
}

const Breadcrumb: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BreadcrumbProps
> = ({ crumbs, separator = "/", className, ...nativeProps }) => {
  console.log(separator);
  return (
    <div className={`${breadcrumbWrapper} ${className}`} {...nativeProps}>
      {crumbs.map((b, index, arr) => {
        return (
          <React.Fragment key={index}>
            <a className={`${crumbTitle}`} href={b.href}>
              {b.title}
            </a>
            {arr.length - 1 !== index && (
              <span className={`${crumbSeparator}`}>{separator}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export { Breadcrumb };
