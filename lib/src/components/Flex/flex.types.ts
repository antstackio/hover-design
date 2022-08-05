export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
    alignContent?: React.CSSProperties['alignContent'],
    alignItems?: React.CSSProperties['alignItems'],
    flexDirection?: React.CSSProperties['flexDirection'],
    flexWrap?: React.CSSProperties['flexWrap'],
    justifyContent?: React.CSSProperties['justifyContent'],
    flexShrink?: React.CSSProperties['flexShrink'],
    flexGrow?: React.CSSProperties['flexGrow'],
    flexBasis?: React.CSSProperties['flexBasis'],
    gap?:React.CSSProperties['gap'],
}