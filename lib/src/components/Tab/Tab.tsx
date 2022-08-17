import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useEffect, useState } from "react";
import { Badge } from "../Badge";
import {
  badgeStyles,
  contentStyles,
  iconStyles,
  tabHeaderContainerStyles,
  tabRecipe,
  tabVars,
} from "./tab.css";
import { TabsObjectProps, TabProps } from "./tab.types";

export const Tab = ({
  defaultValue,
  value,
  color = "#2F80ED",
  background = "#d7e9ff",
  onChange = () => {},
  grow = false,
  height = "40px",
  tabs,
  style,
  className,
  children,
  ...nativeProps
}: TabProps) => {
  const [selectedTab, setSelectedTab] = useState<TabsObjectProps>(
    {} as TabsObjectProps
  );

  useEffect(() => {
    const comparator = value || defaultValue;
    const tab = tabs.find((arr) => arr.value === comparator);
    tab && setSelectedTab(tab);
  }, [defaultValue, tabs, value]);

  return (
    <div>
      <div
        style={assignInlineVars({
          [tabVars.height]: height,
        })}
        className={`${tabHeaderContainerStyles}`}
      >
        {tabs.map((arr, ind) => {
          const tabClass = tabRecipe({
            active: arr.value === selectedTab.value,
            grow,
            disabled: arr.disabled,
          });
          return (
            <div
              style={{
                ...assignInlineVars({
                  [tabVars.color]: color,
                  [tabVars.background]: background,
                }),
                ...style,
              }}
              className={`${tabClass} ${className}`}
              onClick={(event) => {
                onChange(arr, event);
                !value && setSelectedTab(arr);
              }}
              {...nativeProps}
              key={ind}
            >
              {arr.icon && <span className={`${iconStyles}`}>{arr.icon}</span>}
              {arr.label && <span>{arr.label}</span>}
              {arr.badge && (
                <Badge
                  label={arr.badge}
                  className={`${badgeStyles}`}
                  shape={"rounded"}
                  color={"#DA2C2C"}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={`${contentStyles}`}>{children(selectedTab)}</div>
    </div>
  );
};
