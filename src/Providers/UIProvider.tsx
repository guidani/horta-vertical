import React from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
