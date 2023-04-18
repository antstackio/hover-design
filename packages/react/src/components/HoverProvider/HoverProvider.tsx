import { createContext, useContext } from "react";
import { IHoverProviderProps, IHoverThemeContext } from "./HoverProvider.types";

export const HoverContext = createContext<
  IHoverThemeContext<unknown | undefined>
>({ theme: undefined });

export const HoverProvider = <T,>({
  value,
  children
}: IHoverProviderProps<T>) => {
  return (
    <HoverContext.Provider value={value}>{children}</HoverContext.Provider>
  );
};

export const useHoverTheme = <T,>(): IHoverThemeContext<T> => {
  const { theme } = useContext(HoverContext);
  return { theme } as IHoverThemeContext<T>;
};
