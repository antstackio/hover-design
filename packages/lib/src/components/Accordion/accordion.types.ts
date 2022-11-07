export interface IAccordionTypes {
  Summary: React.FC<{}>;
}
export type IAccordionTheme = [
  string,
  { accordionTransition: string; accordionTransform: string }
];

export type IAccordionProps = JSX.IntrinsicElements["details"];
