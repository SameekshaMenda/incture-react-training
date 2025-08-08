import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from './Counter';

test("renders Counter Component", () => {
    render(<Counter/>);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement); //simulates button click functionality
    const updatedCount = screen.getByText(/You Clicked Button 1 Times./i);
    expect(updatedCount).toBeInTheDocument();
});

test("Checking Button Functionality", async() => {
    render(<Counter/>);
    expect(screen.getByText(/Count : 0/i)).toBeInTheDocument();
    const button = screen.getByRole("button", {name: /Click me/i});

    await userEvent.click(button);
    expect(screen.getByText(/Count : 1/i)).toBeInTheDocument();
    
})