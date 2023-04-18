interface ITheadProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export type TheadProps = ITheadProps & JSX.IntrinsicElements["thead"];

export type ITheadThemeVars = [
  string,
  {
    customBackgroundColor: string;
  }
];
