import { MutableRefObject, ReactNode } from "react";

export type IAvatarGroupProps = JSX.IntrinsicElements["div"] & {
  ref?: MutableRefObject<HTMLDivElement | null>;
  children?: ReactNode;
  gap?: string;
};

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
