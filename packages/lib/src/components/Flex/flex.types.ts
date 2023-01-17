export interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  alignContent?: React.CSSProperties["alignContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  justifyContent?: React.CSSProperties["justifyContent"];
  justifyItems?: React.CSSProperties["justifyItems"];
  justifySelf?: React.CSSProperties["justifySelf"];
  flexDirection?: React.CSSProperties["flexDirection"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flexShrink?: React.CSSProperties["flexShrink"];
  flexGrow?: React.CSSProperties["flexGrow"];
  flexBasis?: React.CSSProperties["flexBasis"];
  gap?: React.CSSProperties["gap"];
  display?: "flex" | "inline-flex";
}
