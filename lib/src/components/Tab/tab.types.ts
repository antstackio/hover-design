export type TabProps = JSX.IntrinsicElements["div"] & {
  children: (selectedTab: TabsObjectProps) => JSX.Element;
  color?: string;
  background?: string;
  defaultValue: string | number;
  value: string | number;
  height?: string;
  onChange: (
    value: TabsObjectProps,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
  tabs: TabsObjectProps[];
  grow?: boolean;
};

export type TabsObjectProps = {
  label: string;
  value: string | number;
  icon?: JSX.Element;
  disabled?: boolean;
  badge?: string | JSX.Element;
};

export type TabTheme = [
  string,
  {
    color: string;
    background: string;
    height: string;
  }
];
