import { recipe } from "@vanilla-extract/recipes";
import { createTheme } from "@vanilla-extract/css";
import { ButtonTheme } from "./button.types";

export const [defaultButtonTheme, defaultButtonVars]: ButtonTheme = createTheme(
	{
		color: "#FFFFFF",
		backgroundColor: "#1AB5EB",
		borderColor: "none",
		hoverBackgroundColor: "#008FCB",
		hoverColor: "#FFFFFF",
		hoverBorderColor: "none",
		focusBackgroundColor: "#1AB5EB40",
		focusColor: "#FFFFFF",
		focusBorderColor: "#C6EDFB",
		disabledBackgroundColor: "#8CDAF5",
		disabledColor: "#FFFFFF",
		disabledBorderColor: "none",
	}
);

export const [lightButtonTheme, lightButtonVars]: ButtonTheme = createTheme({
	color: "#1AB5EB",
	backgroundColor: "#F9F9F9",
	borderColor: "#DDDDDD",
	hoverBackgroundColor: "#F0F0F0",
	hoverColor: "#008FCB",
	hoverBorderColor: "none",
	focusBackgroundColor: "#F9F9F9",
	focusColor: "#1AB5EB",
	focusBorderColor: "#C6EDFB",
	disabledBackgroundColor: "#F9F9F9",
	disabledColor: "#1AB5EB",
	disabledBorderColor: "#DDDDDD",
});

export const [ghostButtonTheme, ghostButtonVars]: ButtonTheme = createTheme({
	color: "#1AB5EB",
	backgroundColor: "none",
	borderColor: "none",
	hoverBackgroundColor: "#0000000D",
	hoverColor: "#008FCB",
	hoverBorderColor: "none",
	focusBackgroundColor: "none",
	focusColor: "#1AB5EB",
	focusBorderColor: "#C6EDFB",
	disabledBackgroundColor: "none",
	disabledColor: "#1AB5EB",
	disabledBorderColor: "",
});

export const [hallowButtonTheme, hallowButtonVars]: ButtonTheme = createTheme({
	color: "#1AB5EB",
	backgroundColor: "none",
	borderColor: "#1AB5EB",
	hoverBackgroundColor: "none",
	hoverColor: "#1AB5EB",
	hoverBorderColor: "#AAAAAA",
	focusBackgroundColor: "none",
	focusColor: "#101010",
	focusBorderColor: "#C6EDFB",
	disabledBackgroundColor: "none",
	disabledColor: "#878787",
	disabledBorderColor: "#EEEEEE",
});

export const buttonStyles = recipe({
	base: {
		borderRadius: 4,
		color: "white",
		cursor: "pointer",
	},

	variants: {
		variant: {
			default: {
				background: defaultButtonVars.backgroundColor,
				color: defaultButtonVars.color,
				borderColor: defaultButtonVars.borderColor,
				border: 0,
				":hover": {
					background: defaultButtonVars.hoverBackgroundColor,
					color: defaultButtonVars.hoverColor,
					borderColor: defaultButtonVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: defaultButtonVars.focusBackgroundColor,
					color: defaultButtonVars.focusColor,
					borderColor: defaultButtonVars.focusBorderColor,
				},
				":disabled": {
					background: defaultButtonVars.disabledBackgroundColor,
					color: defaultButtonVars.disabledColor,
					borderColor: defaultButtonVars.disabledBorderColor,
				},
			},
			light: {
				background: lightButtonVars.backgroundColor,
				color: lightButtonVars.color,
				border: "1px solid",
				borderColor: lightButtonVars.borderColor,
				":hover": {
					background: lightButtonVars.hoverBackgroundColor,
					color: lightButtonVars.hoverColor,
					borderColor: lightButtonVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: lightButtonVars.focusBackgroundColor,
					color: lightButtonVars.focusColor,
					borderColor: lightButtonVars.focusBorderColor,
				},
				":disabled": {
					background: lightButtonVars.disabledBackgroundColor,
					color: lightButtonVars.disabledColor,
					borderColor: lightButtonVars.disabledBorderColor,
				},
			},
			ghost: {
				background: ghostButtonVars.backgroundColor,
				border: 0,
				color: ghostButtonVars.color,
				":hover": {
					background: ghostButtonVars.hoverBackgroundColor,
					color: ghostButtonVars.hoverColor,
					borderColor: ghostButtonVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: ghostButtonVars.focusBackgroundColor,
					color: ghostButtonVars.focusColor,
					borderColor: ghostButtonVars.focusBorderColor,
				},
				":disabled": {
					background: ghostButtonVars.disabledBackgroundColor,
					color: ghostButtonVars.disabledColor,
					borderColor: ghostButtonVars.disabledBorderColor,
				},
			},
			hallow: {
				background: hallowButtonVars.backgroundColor,
				border: "1px solid",
				color: hallowButtonVars.color,
				borderColor: hallowButtonVars.borderColor,
				":hover": {
					background: hallowButtonVars.hoverBackgroundColor,
					color: hallowButtonVars.hoverColor,
					borderColor: hallowButtonVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: hallowButtonVars.focusBackgroundColor,
					color: hallowButtonVars.focusColor,
					borderColor: hallowButtonVars.focusBorderColor,
				},
				":disabled": {
					background: hallowButtonVars.disabledBackgroundColor,
					color: hallowButtonVars.disabledColor,
					borderColor: hallowButtonVars.disabledBorderColor,
				},
			},
		},
		padding: {
			default: { padding: 0 },
			small: { padding: "8px 16px" },
			medium: { padding: "8px 16px" },
			large: { padding: 24 },
		},
		fontSize: {
			small: { fontSize: 14 },
			medium: { fontSize: 16 },
			large: { fontSize: 24 },
		},
		margin: {
			default: { margin: 0 },
			small: { margin: 12 },
			medium: { margin: 16 },
			large: { margin: 24 },
		},
		isBlock: {
			true: { width: "100%" },
			false: { width: "auto" },
		},
	},
});
