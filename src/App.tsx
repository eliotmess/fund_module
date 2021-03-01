import React from "react";
import styled, { ThemeProvider } from "theme/styled-components";
import theme from "theme/theme";
import FundModule from "components/FundModule/FundModule";

const FundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <FundContainer>
        <FundModule />
      </FundContainer>
    </ThemeProvider>
  );
};

export default App;
