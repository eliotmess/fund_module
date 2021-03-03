import React from "react";
import { withContextProvider, withThemeProvider } from "helpers/tests";
import FundForm from "components/FundModule/FundForm/FundForm";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

const WrappedComponent = withThemeProvider(FundForm);

describe("FundForm component test suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display initial (42) number of funders", () => {
    const { getByText } = render(<WrappedComponent />);
    expect(getByText(/42/i)).toBeInTheDocument();
  });

  it("should display incremented (43) number of funders", () => {
    const { getByText } = render(
      withContextProvider(WrappedComponent, { noOfFunders: 43 })
    );
    expect(getByText(/43/i)).toBeInTheDocument();
  });

  it("should have initially collapsed info container", () => {
    const { getByTestId } = render(<WrappedComponent />);
    expect(getByTestId("info-container")).toHaveStyleRule("max-height", "0");
  });

  it("should expand info container after click", () => {
    const { getByRole, getByTestId } = render(<WrappedComponent />);
    const textBtn = getByRole("button", { name: /why give \$50\?/i });
    userEvent.click(textBtn);
    expect(getByTestId("info-container")).toHaveStyleRule(
      "max-height",
      "300px"
    );
  });

  it("should call handleSubmit method once after click on submit button", async () => {
    const promise = Promise.resolve();
    const handleSubmitMock = jest.fn(() => promise);
    const { getByRole } = render(
      <WrappedComponent handleSubmitFund={handleSubmitMock} />
    );
    const submitBtn = getByRole("button", { name: /give now/i });
    userEvent.click(submitBtn);
    await act(() => promise);
    expect(handleSubmitMock).toBeCalledTimes(1);
    expect(handleSubmitMock).toBeCalledWith(50);
  });
});
