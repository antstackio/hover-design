interface ITheadProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export type TheadProps = ITheadProps & JSX.IntrinsicElements["thead"];
