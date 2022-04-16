// theme.js
import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: ThemeComponentProps) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "black")(props),
        overflow: "hidden",
        bg: mode("blue.200", "blue.900")(props),
        lineHeight: "base",
      },
    }),
  },
});
