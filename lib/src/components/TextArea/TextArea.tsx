import React, { ForwardRefRenderFunction } from "react";
import { textAreaStyle, textAreaResize } from "./text-area.css";
import { TextAreaProps } from "./text-area.types";

const TextAreaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ 
    className,
    children,
    style,
    resize = false,
    ...nativeTextAreaProps
 }, ref) => {

  return (
    <textarea className={`${textAreaStyle} ${className} ${resize ? textAreaResize : null}`} style={style} ref={ref} {...nativeTextAreaProps}>
        {children}
    </textarea>
  );
};

const TextAreaWithRef = React.forwardRef(TextAreaComponent);
export { TextAreaWithRef as Textarea };