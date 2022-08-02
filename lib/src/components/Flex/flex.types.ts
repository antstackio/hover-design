export interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
    alignContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'flex-start' | 'flex-end' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset',
    alignItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset',
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justifyContent?: 'normal' | 'left' | 'right' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset',
    flexShrink?: number,
    flexGrow?: number,
    flexBasis?: string | 'auto' | 'max-content' | 'min-content' | 'fit-content' | 'content' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset',
}