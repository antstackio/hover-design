interface ITrProps {
  className?: string;
  children: React.ReactNode;
}

export type TrProps = ITrProps & JSX.IntrinsicElements["tr"];
