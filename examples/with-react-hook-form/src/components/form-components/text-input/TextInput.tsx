import { Input, Label } from "@hover-design/react";
import React from "react";
import { useController } from "react-hook-form";
import {
  FieldLabel,
  FieldLabelContainer,
  FieldLabelFilled,
  inputErrorStyles,
  inputStyles
} from "./text-input.styles.css";
import { ITextInputProps } from "./text-input.types";

const TextInput = <T extends Record<string, any>>({
  control,
  label = "",
  name,
  className = "",
  placeholder = "Input here",
  isDisabled = false,
  style = {},
  viewMode = false,
  ...props
}: ITextInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    name
  });
  return (
    <div className={FieldLabelContainer}>
      <Label
        className={`${FieldLabel} ${
          field.value?.length ? FieldLabelFilled : ""
        }`}
        htmlFor={name}
      >
        {label}
      </Label>

      <Input
        {...props}
        style={style}
        placeholder={""}
        className={`${className} ${inputStyles} ${
          error ? inputErrorStyles : ""
        }}`}
        id={name}
        disabled={isDisabled}
        autoComplete="off"
        {...field}
      ></Input>
    </div>
  );
};

export { TextInput };
