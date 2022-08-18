import { MutableRefObject, ReactNode } from "react";

export type IAvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarShapes = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarGaps = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarGroupProps = JSX.IntrinsicElements["div"] & {
  ref?: MutableRefObject<HTMLDivElement | null>;
  children?: ReactNode;
  gap?: string;
};

export type IAvatarGroupTheme = [
  string,
  { avatarStyleGap: IAvatarGaps | string }
];

export type IAvatarProps = JSX.IntrinsicElements["div"] & {
  src?: string;
  alt?: string;
  borderRadius?: string;
  size?: string;
  color?: string;
  textColor?: string;
  ref?: MutableRefObject<HTMLDivElement | null>;
  children?: ReactNode;
};

export type IAvatarTheme = [
  string,
  {
    avatarStyleColor: string;
    avatarStyleTextColor: string;
    avatarStyleBorderRadius: IAvatarShapes | string;
    avatarStyleSize: IAvatarSizes | string;
  }
];
