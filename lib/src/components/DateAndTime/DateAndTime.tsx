import React, { ForwardRefRenderFunction } from 'react';
import {DateAndTimeProps} from './dateAndTime.types';
import { Input } from '../Input';

const DateAndTimeComponent: ForwardRefRenderFunction<HTMLInputElement, DateAndTimeProps> = ({
    type = "datetime-local",
    ...props
}, ref) => {
    return (
        <Input type={type} {...props} ref={ref}/>
    )
}

const DateAndTimeWithRef = React.forwardRef(DateAndTimeComponent);
export { DateAndTimeWithRef as DateAndTime };