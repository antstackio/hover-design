import React, { ForwardRefRenderFunction } from "react";
import { textAreaStyle } from "./text-area.css";
import { TextAreaProps } from "./text-area.types";

const TextAreaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ 
    id,
    name,
    autoComplete = 'off',
    autoCorrect = 'off',
    autoFocus,
    cols = 35,
    rows = 5,
    disabled,
    form,
    maxLength,
    minLength,
    placeHolder = 'Placeholder',
    readOnly,
    required,
    spellCheck,
    wrap = 'soft',
    value,
    className,
    children,
    style
 }, ref) => {

  return (
    <textarea className={`${textAreaStyle} ${className}`} style={style} ref={ref}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        cols={cols}
        disabled={disabled}
        form={form}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeHolder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        spellCheck={spellCheck}
        value={value}
        wrap={wrap}
    >
        {children}
    </textarea>
  );
};

const TextAreaWithRef = React.forwardRef(TextAreaComponent);
export { TextAreaWithRef as TextArea };