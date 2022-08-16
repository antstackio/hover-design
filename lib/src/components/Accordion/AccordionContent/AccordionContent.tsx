import { accordionContentClass } from "../accordion.styles.css";

export const AccordionContent: React.FC<{}> = ({ children }) => {
  return <div className={accordionContentClass}>{children}</div>;
};
