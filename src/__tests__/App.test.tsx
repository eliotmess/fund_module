import React from "react";
import App from "App";
import { withThemeProvider } from "helpers/tests";
import { render } from "@testing-library/react";

describe("App component test suite", () => {
  it("should match snapshot", () => {
    const WrappedComponent = withThemeProvider(App);
    const { asFragment } = render(<WrappedComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
