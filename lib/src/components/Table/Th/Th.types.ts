interface IThProps {
  className?: string;
  alignHeading?: "left" | "right" | "center";
  children: React.ReactNode;
}

export type ThProps = IThProps & JSX.IntrinsicElements["th"];
