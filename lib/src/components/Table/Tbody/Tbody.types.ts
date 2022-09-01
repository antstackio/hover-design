interface ITbodyProps {
  className?: string;
  children: React.ReactNode;
}

export type TBodyProps = ITbodyProps & JSX.IntrinsicElements["tbody"];
