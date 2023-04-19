interface ITdProps {
  className?: string;
  alignContent?: "left" | "right" | "center";
  children: React.ReactNode;
}

export type TdProps = ITdProps & JSX.IntrinsicElements["td"];
