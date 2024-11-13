/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray: {
    50: "#FAFAFA",
    100: "#F2F2F2",
    200: "#E8E8E8",
    300: "#D6D6D6",
    400: "#B0B0B0",
    500: "#858585",
    600: "#595959",
    700: "#3B3B3B",
    800: "#242424",
    900: "#1C1C1C",
  },
  brand: {
    blue: "#0070F8",
    orange: "#FF791B",
  },
  bgBase: "#161617",
  bgPrimary: "#000000",
  textPrimary: "black",
  textPrimaryWhite: "white",
  textSecondary: "#86868B",
};

// semanticTokens
// bgBase: { _light: "bgBase", _dark: "bgBase" },

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "var(--font-inter)",
  body: "var(--font-inter)",
};
const sizes = {
  container: {
    max: "1260px",
  },
};

export const theme = extendTheme({
  fonts,
  colors,
  // semanticTokens,
  config,
  sizes,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "bgBase",
        color: "textPrimaryWhite",
      },
    },
  },
  components: {
    Drawer: {
      parts: ["dialog", "header", "body"],
      variants: {
        small: {
          dialog: {
            maxW: "300px",
          },
        },
      },
    },
  },
});
