export interface GridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  gap?: React.CSSProperties["gap"];
  columnGap?: React.CSSProperties["columnGap"];
  rowGap?: React.CSSProperties["rowGap"];
  display?: "grid" | "inline-grid" | "block grid" | "inline grid";
  gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows?: React.CSSProperties["gridTemplateRows"];
  gridTemplateAreas?: React.CSSProperties["gridTemplateAreas"];
  gridAutoColumns?: React.CSSProperties["gridAutoColumns"];
  gridAutoRows?: React.CSSProperties["gridAutoRows"];
  gridAutoFlow?: React.CSSProperties["gridAutoFlow"];
  grid?: React.CSSProperties["grid"];
  gridArea?: React.CSSProperties["gridArea"];
  gridColumn?: React.CSSProperties["gridColumn"];
  gridColumnStart?: React.CSSProperties["gridColumnStart"];
  gridColumnEnd?: React.CSSProperties["gridColumnEnd"];
  gridRow?: React.CSSProperties["gridRow"];
  gridRowStart?: React.CSSProperties["gridRowStart"];
  gridRowEnd?: React.CSSProperties["gridRowEnd"];
  gridTemplate?: React.CSSProperties["gridTemplate"];
  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];
  placeItems?: React.CSSProperties["placeItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignContent?: React.CSSProperties["alignContent"];
  justifySelf?: React.CSSProperties["justifySelf"];
  alignSelf?: React.CSSProperties["alignSelf"];
  placeSelf?: React.CSSProperties["placeSelf"];
  placeContent?: React.CSSProperties["placeContent"];
}
