import { type Context, useContext } from "react";
import { ThemeContext as EmotionThemeContext } from "@emotion/react";

import type { Dict, UseThemeReturn } from "./types";

export const useTheme = <T extends object = Dict>() => {
  const context = useContext(
    EmotionThemeContext as unknown as Context<T | undefined>,
  );

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context as UseThemeReturn;
};
