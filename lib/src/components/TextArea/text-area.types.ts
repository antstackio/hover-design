export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
    fixedSize?: boolean,
    statusBorder?: string,
}

export type TextAreaBorder = [string, { textAreaBorderColor: { statusBorderColor: string } }];