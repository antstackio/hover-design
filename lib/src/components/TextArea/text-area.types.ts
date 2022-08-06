import React from "react";

export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    id?: string | undefined,
    name?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['name'],
    autoComplete?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['autoComplete'],
    autoCorrect?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['autoCorrect'],
    autoFocus?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['autoFocus'],
    cols?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['cols'],
    rows?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['rows'],
    disabled?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['disabled'],
    form?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['form'],
    maxLength?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['maxLength'],
    minLength?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['minLength'],
    placeHolder?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['placeholder'],
    readOnly?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['readOnly'],
    required?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['required'],
    spellCheck?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['spellCheck'],
    wrap?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['wrap'],
    value?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'],
    onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'],
}