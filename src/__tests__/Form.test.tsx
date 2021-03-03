import React from "react";
import { withThemeProvider } from "helpers/tests";
import Form from "components/FundModule/FundForm/Form";
import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const WrappedComponent = withThemeProvider(Form);

describe("Form component test suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should change input value", () => {
    const { getByRole } = render(<WrappedComponent />);
    fireEvent.change(getByRole("spinbutton"), { target: { value: 12 } });
    expect(getByRole("spinbutton")).toHaveValue(12);
  });

  it("should call handleSubmit method once with changed input value", async () => {
    const promise = Promise.resolve();
    const submitHandlerMock = jest.fn(() => promise);
    const { getByRole } = render(
      <WrappedComponent submitHandler={submitHandlerMock} />
    );
    fireEvent.change(getByRole("spinbutton"), { target: { value: 42 } });
    const submitBtn = getByRole("button", { name: /give now/i });
    userEvent.click(submitBtn);
    await act(() => promise);
    expect(submitHandlerMock).toBeCalledTimes(1);
    expect(submitHandlerMock).toBeCalledWith(42);
  });
});
