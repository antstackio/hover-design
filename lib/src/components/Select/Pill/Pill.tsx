import { MouseEvent } from "react";
import { Flex } from "src/components/Flex";
import CloseIcon from "src/components/_internal/Icons/Close";
import { pillIconStyles, pillStyles } from "./pill.css";

type pillPropTypes = {
  value: string;
  clearValue: (event: MouseEvent<SVGSVGElement>) => void;
};

export const Pill = ({ value, clearValue = () => {} }: pillPropTypes) => {
  return (
    <Flex className={pillStyles} alignItems="center" gap="8px">
      <span>{value}</span>
      <CloseIcon
        className={pillIconStyles}
        width={14}
        height={14}
        onClick={(event) => {
          event.stopPropagation();
          clearValue(event);
        }}
      />
    </Flex>
  );
};
