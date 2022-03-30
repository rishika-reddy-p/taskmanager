import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#899499",
  },
};

// move toggle here
export const ThemeContext = React.createContext(
  themes.dark
);
