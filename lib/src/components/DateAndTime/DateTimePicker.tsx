import React, { ForwardRefRenderFunction } from 'react';
import {DateTimePickerProps} from './date-time-picker.types';
import { Input } from '../Input';

const DateTimePickerComponent: ForwardRefRenderFunction<HTMLInputElement, DateTimePickerProps> = ({
    type = "datetime-local",
    ...props
}, ref) => {
    return (
        <Input type={type} {...props} ref={ref}/>
    )
}

const DateTimePickerWithRef = React.forwardRef(DateTimePickerComponent);
export { DateTimePickerWithRef as DateTimePicker };