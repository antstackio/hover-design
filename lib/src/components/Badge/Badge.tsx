import React from "react";

import {
  badges,
  badgeWrapper,
  badgeThemeClass,
  badgeThemeVars
} from "./badge.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { ReactNode } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type IBadgesProps = RecipeVariants<typeof badges> & {
  color?: string;
  textColor?: string;
  children: ReactNode;
  position?: "top-start" | "top-end" | "bottom-end" | "bottom-start"; //variants
  shape?: "rounded" | "rounded-circle"; //variants
  show?: boolean; //variants
};

const Badge: React.FC<IBadgesProps> = ({
  color = "red",
  textColor = "#fff",
  position,
  shape = "rounded-circle",
  show = true,
  children
}) => {
  const badgeStyle = badges({
    shape
  });

  return (
    <span className={`${badgeWrapper}`}>
      <small
        style={assignInlineVars({
          [badgeThemeVars.badgeStyleColor]: color,
          [badgeThemeVars.badgeStyleTextColor]: textColor
        })}
        className={`${badgeStyle}  ${badgeThemeClass}`}
      >
        {children}
      </small>
    </span>
  );
};

export { Badge };
