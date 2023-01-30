import { recipe } from "@vanilla-extract/recipes";

import { defaultVars, lightVars, ghostVars, hallowVars } from "src/themes";

export const buttonStyles = recipe({
	base: {
		borderRadius: 4,
		color: "white",
		cursor: "pointer",
	},

	variants: {
		variant: {
			default: {
				background: defaultVars.backgroundColor,
				color: defaultVars.color,
				borderColor: defaultVars.borderColor,
				border: 0,
				":hover": {
					background: defaultVars.hoverBackgroundColor,
					color: defaultVars.hoverColor,
					borderColor: defaultVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: defaultVars.focusBackgroundColor,
					color: defaultVars.focusColor,
					borderColor: defaultVars.focusBorderColor,
				},
				":disabled": {
					background: defaultVars.disabledBackgroundColor,
					color: defaultVars.disabledColor,
					borderColor: defaultVars.disabledBorderColor,
				},
			},
			light: {
				background: lightVars.backgroundColor,
				color: lightVars.color,
				border: "1px solid",
				borderColor: lightVars.borderColor,
				":hover": {
					background: lightVars.hoverBackgroundColor,
					color: lightVars.hoverColor,
					borderColor: lightVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: lightVars.focusBackgroundColor,
					color: lightVars.focusColor,
					borderColor: lightVars.focusBorderColor,
				},
				":disabled": {
					background: lightVars.disabledBackgroundColor,
					color: lightVars.disabledColor,
					borderColor: lightVars.disabledBorderColor,
				},
			},
			ghost: {
				background: ghostVars.backgroundColor,
				border: 0,
				color: ghostVars.color,
				":hover": {
					background: ghostVars.hoverBackgroundColor,
					color: ghostVars.hoverColor,
					borderColor: ghostVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: ghostVars.focusBackgroundColor,
					color: ghostVars.focusColor,
					borderColor: ghostVars.focusBorderColor,
				},
				":disabled": {
					background: ghostVars.disabledBackgroundColor,
					color: ghostVars.disabledColor,
					borderColor: ghostVars.disabledBorderColor,
				},
			},
			hallow: {
				background: hallowVars.backgroundColor,
				border: "1px solid",
				color: hallowVars.color,
				borderColor: hallowVars.borderColor,
				":hover": {
					background: hallowVars.hoverBackgroundColor,
					color: hallowVars.hoverColor,
					borderColor: hallowVars.hoverBorderColor,
				},
				":focus": {
					borderWidth: "2px",
					background: hallowVars.focusBackgroundColor,
					color: hallowVars.focusColor,
					borderColor: hallowVars.focusBorderColor,
				},
				":disabled": {
					background: hallowVars.disabledBackgroundColor,
					color: hallowVars.disabledColor,
					borderColor: hallowVars.disabledBorderColor,
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
