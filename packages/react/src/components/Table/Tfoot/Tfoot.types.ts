interface ITfootProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export type TfootProps = ITfootProps & JSX.IntrinsicElements["tfoot"];
