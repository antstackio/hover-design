import React, { ForwardRefRenderFunction } from "react";
import { textAreaStyle } from "./text-area.css";
import { TextAreaProps } from "./text-area.types";

const TextAreaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ 
    className,
    children,
    style,
    ...nativeTextAreaProps
 }, ref) => {

  return (
    <textarea className={`${textAreaStyle} ${className}`} style={style} ref={ref} {...nativeTextAreaProps}>
        {children}
    </textarea>
  );
};

const TextAreaWithRef = React.forwardRef(TextAreaComponent);
export { TextAreaWithRef as Textarea };