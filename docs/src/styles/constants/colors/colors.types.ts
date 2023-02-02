export interface IColorWeights {
  readonly 10: string;
  readonly 20: string;
  readonly 30: string;
  readonly 40: string;
  readonly 50: string;
  readonly 60: string;
  readonly 70: string;
  readonly 80: string;
  readonly 90: string;
  readonly 100: string;
}

export interface IColors {
  blue: IColorWeights & { readonly 1000: string };
  orange: IColorWeights & { readonly 1000: string };
  red: IColorWeights;
  green: IColorWeights;
  yellow: IColorWeights;
  gray: IColorWeights;
}
