interface ITableCaptionProps {
  children: React.ReactNode;
  className?: string;
  placement?: "top" | "bottom";
}

export type TableCaptionProps = ITableCaptionProps &
  JSX.IntrinsicElements["caption"];
