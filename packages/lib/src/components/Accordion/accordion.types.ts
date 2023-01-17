export interface IAccordionTypes {
  Summary: React.ReactNode;
}
export type IAccordionTheme = [
  string,
  { accordionTransition: string; accordionTransform: string }
];

export type IAccordionProps = JSX.IntrinsicElements["details"];
