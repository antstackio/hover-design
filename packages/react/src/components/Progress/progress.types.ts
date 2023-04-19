export type IProgressProps = JSX.IntrinsicElements["div"] & {
  value: number;
  progressBaseStyles?: Partial<React.CSSProperties>;
  progressBaseClassName?: string;
  radius?: IProgressTheme[1]["radius"];
  size?: IProgressTheme[1]["progressStyleSize"];
  progressColor?: string;
};
export type IProgressRadius = "xs" | "sm" | "md" | "lg" | "xl";
export type IProgressSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type IProgressTheme = [
  string,
  {
    radius: IProgressSizes | string;
    progressStyleSize: IProgressSizes | string;
    progressColor: string;
    progressValue: string;
  }
];
