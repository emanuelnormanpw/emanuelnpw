import { ThemeProvider } from "../theme-provider";
import type { GlobalProviderProps } from "./types";

const GlobalProvider = (props: GlobalProviderProps) => {
  const { children, theme } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalProvider;
