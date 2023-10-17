export type IAvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarShapes = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarGaps = "xs" | "sm" | "md" | "lg" | "xl";

export type IAvatarTheme = [
  string,
  {
    avatarStyleColor: string;
    avatarStyleTextColor: string;
    avatarStyleBorderRadius: IAvatarShapes | string;
    avatarStyleSize: IAvatarSizes | string;
  }
];

export type IAvatarGroupTheme = [
  string,
  { avatarStyleGap: IAvatarGaps | string }
];
