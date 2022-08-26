import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Badge } from "../Badge";
import { Flex } from "../Flex";
import {
  badgeStyles,
  contentStyles,
  extendingBorderStyle,
  iconStyles,
  tabsHeaderContainerRecipe,
  tabsRecipe,
  tabsVars,
} from "./tabs.css";
import { TabsObjectProps, TabsProps } from "./tabs.types";

const TabComponent: ForwardRefRenderFunction<HTMLDivElement, TabsProps> = (
  {
    defaultValue,
    orientation = "horizontal",
    value,
    color = "#2F80ED",
    backgroundColor = "#d7e9ff",
    outlineColor = "#EBECF0",
    onChange = () => {},
    grow = false,
    tabSize,
    textAlign = "center",
    tabsData,
    roundness = "4px",
    style,
    className,
    children,
    variant = "default",
    ...nativeProps
  },
  ref
) => {
  const [selectedTab, setSelectedTab] = useState<TabsObjectProps | null>(null);
  const [size, setSize] = useState<string>(tabSize as string);
  const tabsContainer = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (tabSize) {
      setSize(tabSize);
    } else {
      orientation === "vertical" ? setSize("fit-content") : setSize("40px");
    }
  }, [tabSize, orientation]);

  useEffect(() => {
    const activeValue = value || defaultValue;
    const tab = tabsData.find((tabItem) => tabItem.value === activeValue);
    tab && setSelectedTab(tab);
  }, [defaultValue, tabsData, value]);

  const internalOnClickHandler = (
    event: MouseEvent<HTMLDivElement>,
    tabItem: TabsObjectProps
  ) => {
    onChange(tabItem, event);
    !value && setSelectedTab(tabItem);
  };

  const tabsHeaderContainerClass = tabsHeaderContainerRecipe({
    orientation,
  });

  const getAlignment = () => {
    switch (textAlign) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  const selectPreviousTab = (tabIndex: number) => {
    if (tabIndex === 0) {
      let skipStep = 1;
      while (tabsData[tabsData.length - skipStep].disabled) {
        skipStep++;
      }
      focusAndSelectTab(tabsData[tabsData.length - skipStep]);
    } else {
      let skipStep = 1;
      while (tabsData[tabIndex - skipStep].disabled && skipStep < tabIndex) {
        skipStep++;
      }
      if (skipStep >= tabIndex && tabsData[0].disabled) {
        let altSkipStep = 1;
        while (tabsData[tabsData.length - altSkipStep].disabled) {
          altSkipStep++;
        }
        focusAndSelectTab(tabsData[tabsData.length - altSkipStep]);
      } else {
        focusAndSelectTab(tabsData[tabIndex - skipStep]);
      }
    }
  };

  const selectNextTab = (tabIndex: number) => {
    if (tabIndex === tabsData.length - 1) {
      let skipStep = 0;
      while (tabsData[skipStep].disabled) {
        skipStep++;
      }
      focusAndSelectTab(tabsData[skipStep]);
    } else {
      let skipStep = 1;
      while (
        tabsData[tabIndex + skipStep].disabled &&
        tabIndex + skipStep < tabsData.length - 1
      ) {
        skipStep++;
      }
      if (
        skipStep === tabsData.length - 1 - tabIndex &&
        tabsData[tabsData.length - 1].disabled
      ) {
        let altSkipStep = 0;
        while (tabsData[altSkipStep].disabled) {
          altSkipStep++;
        }
        focusAndSelectTab(tabsData[altSkipStep]);
      } else {
        focusAndSelectTab(tabsData[tabIndex + skipStep]);
      }
    }
  };

  const selectFirstTab = () => {
    !tabsData[0].disabled && focusAndSelectTab(tabsData[0]);
  };
  const selectLastTab = () => {
    !tabsData[tabsData.length - 1].disabled &&
      focusAndSelectTab(tabsData[tabsData.length - 1]);
  };

  const focusAndSelectTab: (tabData: TabsObjectProps) => void = (tabData) => {
    const tabsList = [
      ...tabsContainer.current.querySelectorAll("[role=tab]"),
    ] as HTMLElement[];
    setSelectedTab(tabData);
    tabsList.find((tab) => tab.ariaLabel === tabData.label)?.focus();
  };

  const internalKeydownHandler = (
    event: KeyboardEvent<HTMLDivElement>,
    tabIndex: number
  ) => {
    event.stopPropagation();
    event.preventDefault();
    switch (event.key) {
      case `${orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"}`:
        selectPreviousTab(tabIndex);
        break;
      case `${orientation === "horizontal" ? "ArrowRight" : "ArrowDown"}`:
        selectNextTab(tabIndex);
        break;
      case "Home":
        selectFirstTab();
        break;
      case "End":
        selectLastTab();
        break;
      default:
        break;
    }
  };

  return (
    <Flex
      ref={ref}
      flexDirection={orientation === "vertical" ? "row" : "column"}
      className={className}
      style={{
        ...assignInlineVars({
          [tabsVars.color]: color,
          [tabsVars.backgroundColor]: backgroundColor,
          [tabsVars.outlineColor]: outlineColor,
          [tabsVars.roundness]: roundness,
          [tabsVars.tabSize]: size,
        }),
        ...style,
      }}
      {...nativeProps}
    >
      <Flex
        flexDirection={orientation === "vertical" ? "column" : "row"}
        role={"tablist"}
        ref={tabsContainer}
        tabIndex={0}
        gap={variant === "pill" ? "8px" : "normal"}
        className={`${tabsHeaderContainerClass} hover-tabs-container`}
      >
        {tabsData.map((tabItem, ind) => {
          const tabClass = tabsRecipe({
            active: tabItem.value === selectedTab?.value,
            variant,
            disabled: tabItem.disabled,
            orientation,
          });
          return (
            <Flex
              ref={ref}
              role={"tab"}
              alignItems="center"
              justifyContent={getAlignment()}
              flexGrow={grow ? "1" : "0"}
              className={`${tabClass} hover-tab`}
              onClick={(event) =>
                !tabItem.disabled && internalOnClickHandler(event, tabItem)
              }
              onKeyDown={(event) => internalKeydownHandler(event, ind)}
              key={ind}
              aria-label={tabItem.label}
              tabIndex={!tabItem.disabled ? 0 : 1}
            >
              {tabItem.icon && (
                <Flex
                  alignItems="center"
                  justifyContent={"center"}
                  className={`${iconStyles}`}
                >
                  {tabItem.icon}
                </Flex>
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
        {variant !== "pill" && (
          <Flex
            flexGrow={grow ? "0" : "1"}
            className={`${extendingBorderStyle}`}
          ></Flex>
        )}
      </Flex>
      {selectedTab && (
        <div className={`${contentStyles} hover-content-container`}>
          {children(selectedTab)}
        </div>
      )}
    </Flex>
  );
};

export const Tabs = forwardRef(TabComponent);
