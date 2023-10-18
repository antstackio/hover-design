export type TCheckboxSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxBorderRadius = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export type TCheckboxTheme = [
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
    indeterminateStyles: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
    checkboxStyleSize: TCheckboxSizes | string;
    checkboxStyleBorderRadius: TCheckboxBorderRadius | string;
  }
];

export type TCheckboxGroupTheme = [
  string,
  { checkboxGroupStyleSpacing: TCheckboxSpacing | string }
];
