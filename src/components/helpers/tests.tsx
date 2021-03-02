import { ThemeProvider } from "theme/styled-components";
import theme from "theme/theme";

export const withProviders = (Component: any) => {
  return (props: any) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
