export type IProgressSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TProgressTheme = [
  string,
  {
    radius: IProgressSizes | string;
    progressStyleSize: IProgressSizes | string;
    progressColor: string;
    progressValue: string;
  }
];
