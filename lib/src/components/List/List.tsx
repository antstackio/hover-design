import React, { ForwardRefRenderFunction } from "react";

import { IListProps } from "./list.types";
import { listStyles, listThemeVars, listThemeClass } from "./list.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const ListComponent: ForwardRefRenderFunction<HTMLUListElement, IListProps> = (
  { children, variant, type, ...props },
  ref
) => {
  const listStyle = listStyles({
    variant: variant,
  });
  return (
    <ul
      style={assignInlineVars({
        [listThemeVars.listStyles.listStyleType]: type || "disc",
      })}
      className={`${listStyle} ${listThemeClass} ${props.className || ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  );
};

const ListWithRef = React.forwardRef(ListComponent);
export { ListWithRef as List };
