import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionSummary,
  Flex,
  Switch
} from "@hover-design/react";
const AccordionAdvancedExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Accordion
        onToggle={(e) => {
          setOpen(e.target["open"]);
        }}
        open={open}
      >
        <AccordionSummary>This is summary</AccordionSummary>
        <AccordionContent>Hello</AccordionContent>
      </Accordion>
      <Flex gap={"12px"} justifyContent={"space-between"}>
        <Switch
          status={open}
          onChange={() => {
            setOpen((prevValue) => !prevValue);
          }}
        />
        <p>Accordion is {open ? "open" : "closed"}</p>
      </Flex>
    </div>
  );
};
export default AccordionAdvancedExample;
