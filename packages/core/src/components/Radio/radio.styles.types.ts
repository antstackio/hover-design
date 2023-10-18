export type TRadioSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TRadioGroupTheme = [
  string,
  { radioGroupStyleSpacing: TRadioSpacing | string }
];

export type TRadioTheme = [
  string,
  {
    disabledStyles: {
      borderColor: string;
      backgroundColor: string;
    };
    baseStyles: {
      borderColor: string;
      backgroundColor: string;
    };
    selectedStyles: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    radioStyleSize: TRadioSizes | string;
  }
];
