import React from "react";
import { Card, Flex } from "@hover-design/react";
import { cardBox, cardTitle } from "./card-details.styles.css";
import EasyToUse from "./icons/easytouse.svg";
import FocusOnWhatMatters from "./icons/focusonwhatmatters.svg";
import PlatformAgnostic from "./icons/platformagnostic.svg";
import Themeing from "./icons/themeing.svg";

const CardData = [
  {
    icon: <EasyToUse />,
    title: "Easy To Use",
    data: "Hover focuses on easy to use betteries included method, so use it as you would use a native element, no need to learn fancy complex apis to do simple things"
  },
  {
    icon: <FocusOnWhatMatters />,
    title: "Focus On What Matters",
    data: "Easily extend the components and use it to conform to your brand identity."
  },
  {
    icon: <PlatformAgnostic />,
    title: "Platform agnostic",
    data: "Hover focuses on easy to use betteries included method, so use it as you would use a native element, no need to learn fancy complex apis to do simple things"
  },
  {
    icon: <Themeing />,
    title: "Themeing",
    data: "Hover focuses on easy to use betteries included method, so use it as you would use a native element, no need to learn fancy complex apis to do simple things"
  }
];

const CardDetails = (props) => {
  return (
    <Card variant="outline" margin="small" className={cardBox}>
      <h3 className={cardTitle}>
        {props.icon}
        {props.title}
      </h3>
      <p>{props.details}</p>
    </Card>
  );
};

const CardRow = () => {
  return (
    <Flex justifyContent={"center"}>
      {CardData.map((object, i) => (
        <CardDetails
          title={object.title}
          details={object.data}
          icon={object.icon}
        />
      ))}
    </Flex>
  );
};

export { CardRow };
