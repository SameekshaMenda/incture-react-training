import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

test("render Calculator Component", () => {
    render(<Calculator/>);
    fireEvent.change(screen.getByTestId("Num1"), {target : {value : "5"}});
    fireEvent.change(screen.getByTestId("Num2"), {target : {value : "5"}});
    fireEvent.click(screen.getByText(/Add/i));
    fireEvent.change(screen.getByTestId("Result"));

    expect(screen.getByTestId("Result")).toHaveTextContent("Result : 10");

})