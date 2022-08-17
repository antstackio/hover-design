export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    resize?: boolean,
    statusBorder?: string,
}

export type TextAreaBorder = [string, { textAreaBorderColor: { statusBorderColor: string } }];