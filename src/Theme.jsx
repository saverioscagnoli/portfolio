import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "whiteAlpha.900")(props),
      bg: mode("#F0E7DB", "#202023")(props),
    },
  }),
};

const components = {
  Drawer: {
    baseStyle: (props) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
