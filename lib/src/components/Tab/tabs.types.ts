import { MouseEvent, MutableRefObject } from "react";

type divType = Omit<JSX.IntrinsicElements["div"], "children">;

export type TabsProps = divType & {
  children: (selectedTab: TabsObjectProps) => JSX.Element;
  ref?: MutableRefObject<HTMLDivElement | null>;
  orientation?: "vertical" | "horizontal";
  color?: string;
  backgroundColor?: string;
  outlineColor?: string;
  defaultValue?: string | number;
  value?: string | number;
  tabSize?: string;
  textAlign?: "left" | "center" | "right";
  onChange?: (
    value: TabsObjectProps,
    event: MouseEvent<HTMLDivElement>
  ) => void;
  tabsData: TabsObjectProps[];
  grow?: boolean;
  roundness?: string;
  variant?: "default" | "outline" | "pill";
};

export type TabsObjectProps = {
  label: string;
  value: string | number;
  icon?: JSX.Element;
  disabled?: boolean;
  badge?: string | JSX.Element;
  ref?: MutableRefObject<HTMLDivElement>;
};

export type TabTheme = [
  string,
  {
    color: string;
    backgroundColor: string;
    outlineColor: string;
    tabSize: string;
    roundness: string;
  }
];
