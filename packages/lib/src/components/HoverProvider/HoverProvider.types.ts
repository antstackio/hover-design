export interface IHoverThemeContext<T> {
  theme: T | undefined;
}

export interface IHoverProviderProps<T> {
  value: IHoverThemeContext<T>;
  children: React.ReactNode;
}
