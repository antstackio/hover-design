import React, { ForwardRefRenderFunction } from "react";
import { IListItemProps } from "./list-item.types";

const ListItemComponent: ForwardRefRenderFunction<
  HTMLLIElement,
  IListItemProps
> = ({ children, ...props }, ref) => {
  return (
    <li className={`${props?.className || ""}`} ref={ref} {...props}>
      {children}
    </li>
  );
};

const ListItemWithRef = React.forwardRef(ListItemComponent);
export { ListItemWithRef as ListItem };
