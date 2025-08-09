import { render, screen } from "@testing-library/react";
import App from "../App";


test('App test', () => {
    render(<App/>);
    const headingElement = screen.getByText(/React with testing.../i);
    expect(headingElement).toBeInTheDocument();
})