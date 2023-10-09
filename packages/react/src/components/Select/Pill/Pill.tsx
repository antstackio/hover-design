import { MouseEvent } from "react";
import { pillIconStyles, pillStyles } from "./pill.css";
import { Flex } from "../../Flex";
import { Clear } from "../../_internal/Icons/Clear";

type pillPropTypes = {
  value: string;
  clearValue: (event: MouseEvent<SVGElement>) => void;
};

export const Pill = ({ clearValue, value }: pillPropTypes) => {
  return (
    <Flex role="listitem" className={pillStyles} alignItems="center" gap="6px">
      <span>{value}</span>
      <Clear
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
