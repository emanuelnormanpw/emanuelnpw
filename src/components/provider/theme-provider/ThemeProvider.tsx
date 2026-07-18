import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { DEFAULT_THEME } from "./foundations";
import GlobalStyle from "./styles/app";
import type { Theme, ThemeProviderProps } from "./types";

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = DEFAULT_THEME } = props;

  return (
    <EmotionThemeProvider theme={theme}>
      {children}
      <GlobalStyle {...(theme as Theme)} />
    </EmotionThemeProvider>
  );
};

export { ThemeProvider };
