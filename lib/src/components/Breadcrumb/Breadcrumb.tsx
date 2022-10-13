import React, { forwardRef } from "react";
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
> = ({ crumbs, separator = "/", className, ...nativeProps }, ref) => {
  return (
    <div
      ref={ref}
      className={`${breadcrumbWrapper} ${className}`}
      {...nativeProps}
    >
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
const BreadcrumbWithRef = forwardRef(Breadcrumb);

export { BreadcrumbWithRef as Breadcrumb };
