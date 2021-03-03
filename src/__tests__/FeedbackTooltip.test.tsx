import React from "react";
import { withContextProvider, withThemeProvider } from "helpers/tests";
import FeedbackTooltip from "components/FundModule/FeedbackTooltip/FeedbackTooltip";
import { render } from "@testing-library/react";
import theme from "theme/theme";
import "jest-styled-components";

const WrappedComponent = withThemeProvider(FeedbackTooltip);

describe("Feedback Tooltip component test suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display black tooltip with message about $443 still needed", () => {
    const { getByText, getByTestId } = render(
      <WrappedComponent fundSubmitted={false} />
    );
    expect(getByText(/\$443/iu)).toBeInTheDocument();
    expect(getByTestId("tooltip")).toHaveStyleRule(
      "background-color",
      theme.colors.lightBlack
    );
  });

  it("should display green tooltip with thank you message if fund was just submitted", () => {
    const { getByText, getByTestId } = render(
      <WrappedComponent fundSubmitted={true} />
    );
    expect(getByText("Thank you for your payment!")).toBeInTheDocument();
    expect(getByTestId("tooltip")).toHaveStyleRule(
      "background-color",
      theme.colors.green
    );
  });

  it("should display black tooltip with message about $200 still needed", () => {
    const { getByText, getByTestId } = render(
      withContextProvider(WrappedComponent, { fundGoal: 500, fundRaised: 300 })
    );
    expect(getByText(/still needed for this project/i)).toBeInTheDocument();
    expect(getByTestId("tooltip")).toHaveStyleRule(
      "background-color",
      theme.colors.lightBlack
    );
  });

  it("should display green tooltip with message that fund goal was achieved", () => {
    const { getByText, getByTestId } = render(
      withContextProvider(WrappedComponent, { fundGoal: 500, fundRaised: 600 })
    );
    expect(getByText(/but can be more!/i)).toBeInTheDocument();
    expect(getByTestId("tooltip")).toHaveStyleRule(
      "background-color",
      theme.colors.green
    );
  });
});
