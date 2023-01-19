import { Input, Label } from "@hover-design/react";
import React from "react";
import { useController } from "react-hook-form";
import { inputErrorStyles, inputStyles } from "./text-input.styles.css";
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
  const {} = useController({ control, name });
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    name
  });
  return (
    <Label htmlFor={name}>
      {label}
      <Input
        {...props}
        onWheel={(e) => e.currentTarget.blur()}
        style={style}
        placeholder={placeholder}
        className={`${className} ${inputStyles} ${
          error ? inputErrorStyles : ""
        }}`}
        id={name}
        disabled={isDisabled}
        autoComplete="off"
        {...field}
      ></Input>
    </Label>
  );
};

export default TextInput;
