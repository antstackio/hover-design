import { TProgressTheme } from "@hover-design/core";

export type IProgressProps = JSX.IntrinsicElements["div"] & {
  value: number;
  progressBaseStyles?: Partial<React.CSSProperties>;
  progressBaseClassName?: string;
  radius?: TProgressTheme[1]["radius"];
  size?: TProgressTheme[1]["progressStyleSize"];
  progressColor?: string;
};

export type IProgressRadius = "xs" | "sm" | "md" | "lg" | "xl";
