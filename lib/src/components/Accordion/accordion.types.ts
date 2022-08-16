export interface IAccordionTypes {
  Summary: React.FC<{}>;
}
export type IAccordionTheme = [
  string,
  { accordionTransition: string; accordionTransform: string }
];

export type IAccordionProps = IHoverAccordion &
  JSX.IntrinsicElements["details"];
interface IHoverAccordion {
  open?: boolean;
  onToggle?: React.ReactEventHandler<HTMLDetailsElement>;
  children: React.ReactNode;
}
