import React, { ForwardRefRenderFunction } from 'react';
import {DateTimePickerProps} from './date-time-picker.types';
import { Input } from '../Input';

const DateTimePickerComponent: ForwardRefRenderFunction<HTMLInputElement, DateTimePickerProps> = ({
    type = "datetime-local",
    style,
    ...props
}, ref) => {
    const dandtStyle = {
        width: '290px',
        borderRadius: '4px',
        padding: '8px'
    }
    /**
     * If user passes style object it will merge with current style
     */
     Object.assign(dandtStyle, style);

    return (
        <Input type={type} {...props} ref={ref} style={dandtStyle}/>
    )
}

const DateTimePickerWithRef = React.forwardRef(DateTimePickerComponent);
export { DateTimePickerWithRef as DateTimePicker };