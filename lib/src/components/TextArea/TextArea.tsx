import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { ForwardRefRenderFunction } from "react";
import { textAreaStyle, textAreaResize, textAreaColorClass, textAreaColorVars } from "./text-area.css";
import { TextAreaProps } from "./text-area.types";

const TextAreaComponent: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({ 
    className,
    children,
    style,
    fixedSize = false,
    statusBorder = '#082D59',
    ...nativeTextAreaProps
 }, ref) => {

  let textAreaBorder = assignInlineVars({
    [textAreaColorVars.textAreaBorderColor.statusBorderColor]: statusBorder
  });

  /**
   * It will overwrite the default styling with the user provided style 
   */
  Object.assign(textAreaBorder, style);

  return (
    <textarea 
      className={`${textAreaStyle} ${className} ${fixedSize ? textAreaResize : null} ${textAreaColorClass}`} 
      style={textAreaBorder}
      ref={ref} 
      {...nativeTextAreaProps}
      >
        {children}
    </textarea>
  );
};

const TextAreaWithRef = React.forwardRef(TextAreaComponent);
export { TextAreaWithRef as Textarea };