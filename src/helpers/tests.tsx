import { FormContext } from "FormContext";
import { ThemeProvider } from "theme/styled-components";
import theme from "theme/theme";

export const withThemeProvider = (Component: any) => {
  return (props: any) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

const formContextMock = {
  fundGoal: 500,
  noOfFunders: 42,
  setNoOfFunders: (v: number) => {},
  fundRaised: 57,
  setFundRaised: (v: number) => {},
  userFund: 50,
  setUserFund: (v: number) => {},
};

export const withContextProvider = (Component: any, contextValues: any) => {
  return (
    <FormContext.Provider value={{ ...formContextMock, ...contextValues }}>
      <Component />
    </FormContext.Provider>
  );
};
