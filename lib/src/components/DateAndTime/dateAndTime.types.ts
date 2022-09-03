import React from "react"

export interface DateAndTimeProps extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> {
    type?: "date" | "datetime-local" | "month" | "week" | "time";
}