import React from "react";

type Props = {};

const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <details>{children}</details>;
};

Accordion.Summary = ({ children }: { children: React.ReactNode }) => {
  return <summary>{children}</summary>;
};

export { Accordion };
