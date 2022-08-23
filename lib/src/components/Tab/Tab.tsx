import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  forwardRef,
  ForwardRefRenderFunction,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { Badge } from "../Badge";
import { Flex } from "../Flex";
import {
  badgeStyles,
  contentStyles,
  iconStyles,
  tabHeaderContainerStyles,
  tabRecipe,
  tabVars,
} from "./tab.css";
import { TabsObjectProps, TabProps } from "./tab.types";

const TabComponent: ForwardRefRenderFunction<HTMLDivElement, TabProps> = (
  {
    defaultValue,
    value,
    color = "#2F80ED",
    background = "#d7e9ff",
    onChange = () => {},
    grow = false,
    height = "40px",
    tabData,
    style,
    className,
    children,
    ...nativeProps
  },
  ref
) => {
  const [selectedTab, setSelectedTab] = useState<TabsObjectProps | null>(null);

  useEffect(() => {
    const activeValue = value || defaultValue;
    const tab = tabData.find((tabItem) => tabItem.value === activeValue);
    tab && setSelectedTab(tab);
  }, [defaultValue, tabData, value]);

  const internalOnClickHandler = (
    event: MouseEvent<HTMLDivElement>,
    tabItem: TabsObjectProps
  ) => {
    onChange(tabItem, event);
    !value && setSelectedTab(tabItem);
  };

  return (
    <div ref={ref} {...nativeProps} className={className} style={style}>
      <Flex
        style={assignInlineVars({
          [tabVars.height]: height,
        })}
        className={`${tabHeaderContainerStyles}`}
      >
        {tabData.map((tabItem, ind) => {
          const tabClass = tabRecipe({
            active: tabItem.value === selectedTab?.value,
            disabled: tabItem.disabled,
          });
          return (
            <Flex
              alignItems="center"
              justifyContent="center"
              flexGrow={grow ? "1" : "0"}
              style={assignInlineVars({
                [tabVars.color]: color,
                [tabVars.background]: background,
              })}
              className={tabClass}
              onClick={(event) => internalOnClickHandler(event, tabItem)}
              key={ind}
            >
              {tabItem.icon && (
                <span className={`${iconStyles}`}>{tabItem.icon}</span>
              )}
              {tabItem.label && <span>{tabItem.label}</span>}
              {tabItem.badge && (
                <Badge
                  label={tabItem.badge}
                  className={`${badgeStyles}`}
                  shape={"rounded"}
                  color={"#DA2C2C"}
                />
              )}
            </Flex>
          );
        })}
      </Flex>
      {selectedTab && (
        <div className={`${contentStyles}`}>{children(selectedTab)}</div>
      )}
    </div>
  );
};

export const Tabs = forwardRef(TabComponent);
