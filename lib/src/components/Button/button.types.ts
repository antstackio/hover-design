import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonStyles } from "./button.styles.css";

export type ButtonProps = RecipeVariants<typeof buttonStyles> &
	JSX.IntrinsicElements["button"];

export type ButtonTheme = [
	string,
	{
		color: string;
		backgroundColor: string;
		borderColor: string;
		hoverColor: string;
		hoverBackgroundColor: string;
		hoverBorderColor: string;
		focusColor: string;
		focusBackgroundColor: string;
		focusBorderColor: string;
		disabledColor: string;
		disabledBackgroundColor: string;
		disabledBorderColor: string;
	}
];
