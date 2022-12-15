export type PortalType = {
  children: React.ReactNode;
  element?: keyof HTMLElementTagNameMap;
} & JSX.IntrinsicElements["div"];
