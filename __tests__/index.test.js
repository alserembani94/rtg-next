import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, act } from "@testing-library/react";

describe("Calculator Layout", () => {
  it("renders the footer", () => {
    render(<Home />);

    const currentYear = new Date().getFullYear();

    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toHaveTextContent(`Made in boredom 🥱 by Atif Aiman | ${currentYear}`);
  });
});

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);

    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("sub")).toBeInTheDocument();
    expect(screen.getByTestId("mul")).toBeInTheDocument();
    expect(screen.getByTestId("div")).toBeInTheDocument();
  });

  it("adds numbers", () => {
    render(<Home />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "10" } });

    act(() => {
      addButton.click();
    });

    expect(resultArea).toHaveTextContent("15");
  });

  it("subtracts numbers", () => {
    render(<Home />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const subButton = screen.getByTestId("sub");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "10" } });
    fireEvent.change(num2Input, { target: { value: "5" } });

    act(() => {
      subButton.click();
    });

    expect(resultArea).toHaveTextContent("5");
  });

  it("multiplies numbers", () => {
    render(<Home />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const mulButton = screen.getByTestId("mul");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "10" } });
    fireEvent.change(num2Input, { target: { value: "5" } });

    act(() => {
      mulButton.click();
    });

    expect(resultArea).toHaveTextContent("50");
  });

  it("divides numbers", () => {
    render(<Home />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const divButton = screen.getByTestId("div");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "10" } });
    fireEvent.change(num2Input, { target: { value: "5" } });

    act(() => {
      divButton.click();
    });

    expect(resultArea).toHaveTextContent("2");
  });
});
