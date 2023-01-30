import { Colors } from "src/styles/colors";
import { createTheme } from "@vanilla-extract/css";

export type Theme = [
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

export const [defaultTheme, defaultVars]: Theme = createTheme({
	color: Colors.white,
	backgroundColor: Colors.defaultBackground,
	borderColor: "none",
	hoverBackgroundColor: Colors.defaultHover,
	hoverColor: Colors.white,
	hoverBorderColor: "none",
	focusBackgroundColor: Colors.defaultFocus,
	focusColor: Colors.white,
	focusBorderColor: Colors.defaultFocusBorder,
	disabledBackgroundColor: Colors.defaultDisabledBlue,
	disabledColor: Colors.white,
	disabledBorderColor: "none",
});

export const [lightTheme, lightVars]: Theme = createTheme({
	color: Colors.defaultBackground,
	backgroundColor: Colors.lightBackground,
	borderColor: Colors.lightBorder,
	hoverBackgroundColor: Colors.lightHover,
	hoverColor: Colors.defaultHover,
	hoverBorderColor: "none",
	focusBackgroundColor: Colors.lightBackground,
	focusColor: Colors.defaultBackground,
	focusBorderColor: Colors.defaultFocusBorder,
	disabledBackgroundColor: Colors.lightBackground,
	disabledColor: Colors.defaultBackground,
	disabledBorderColor: Colors.lightBorder,
});

export const [ghostTheme, ghostVars]: Theme = createTheme({
	color: Colors.defaultBackground,
	backgroundColor: "none",
	borderColor: "none",
	hoverBackgroundColor: "#0000000D",
	hoverColor: Colors.defaultHover,
	hoverBorderColor: "none",
	focusBackgroundColor: "none",
	focusColor: Colors.defaultBackground,
	focusBorderColor: Colors.defaultFocusBorder,
	disabledBackgroundColor: "none",
	disabledColor: Colors.defaultBackground,
	disabledBorderColor: "",
});

export const [hallowTheme, hallowVars]: Theme = createTheme({
	color: Colors.defaultBackground,
	backgroundColor: "none",
	borderColor: Colors.defaultBackground,
	hoverBackgroundColor: "none",
	hoverColor: Colors.defaultBackground,
	hoverBorderColor: Colors.hallowHover,
	focusBackgroundColor: "none",
	focusColor: Colors.hallowFocus,
	focusBorderColor: Colors.defaultFocusBorder,
	disabledBackgroundColor: "none",
	disabledColor: Colors.hallowDisabled,
	disabledBorderColor: Colors.hallowDisabledBorder,
});
