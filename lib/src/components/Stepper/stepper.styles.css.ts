import { createTheme, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { TStepperTheme } from "./stepper.types";

export const stepperSizes: Record<
  TStepperTheme[1]["stepperStyleSize"],
  string
> = {
  xs: "16px",
  sm: "24px",
  md: "32px",
  lg: "40px",
  xl: "48px"
};

export const stepperBorderRadius: Record<
  TStepperTheme[1]["stepperStyleBorderRadius"],
  string
> = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px"
};

export const [stepperThemeClass, stepperThemeVars]: TStepperTheme = createTheme(
  {
    stepperStyleSize: stepperSizes.md,
    stepperStyleBorderRadius: stepperBorderRadius.xl,
    baseStyles: {
      color: "#495057",
      backgroundColor: "#ebf0f5",
      border: "none"
    },
    progressStyles: {
      color: "#495057",
      backgroundColor: "#ebf0f5",
      border: "2px solid green"
    },
    completedStyles: {
      color: "#fff",
      backgroundColor: "green",
      border: "none"
    }
  }
);

export const StepperDividerWrapperClass = recipe({
  base: { flexGrow: 1 },
  variants: {
    orientation: {
      vertical: {
        margin: "5px 0 0"
      },
      horizontal: {
        margin: " 0 0 0 5px"
      }
    }
  }
});

export const StepperStepIconClass = recipe({
  base: {
    fontWeight: "700",
    verticalAlign: "middle",
    overflow: "hidden",
    minWidth: stepperThemeVars.stepperStyleSize,
    minHeight: stepperThemeVars.stepperStyleSize,
    fontSize: "12px",
    width: stepperThemeVars.stepperStyleSize,
    height: stepperThemeVars.stepperStyleSize,
    backgroundColor: stepperThemeVars.baseStyles.backgroundColor,
    color: stepperThemeVars.baseStyles.color,
    borderRadius: stepperThemeVars.stepperStyleBorderRadius
  },
  variants: {
    stepState: {
      stepInactive: {
        backgroundColor: stepperThemeVars.baseStyles.backgroundColor,
        color: stepperThemeVars.baseStyles.color,
        border: stepperThemeVars.baseStyles.border
      },
      stepProgress: {
        backgroundColor: stepperThemeVars.progressStyles.backgroundColor,
        color: stepperThemeVars.progressStyles.color,
        border: stepperThemeVars.progressStyles.border
      },
      stepCompleted: {
        backgroundColor: stepperThemeVars.completedStyles.backgroundColor,
        color: stepperThemeVars.completedStyles.color,
        border: stepperThemeVars.completedStyles.border
      }
    }
  }
});
