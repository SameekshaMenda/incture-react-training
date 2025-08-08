import {render, screen} from '@testing-library/react';
import App from './src/App';



// test('renders App component', () => {
//     render(<App/>); // we are rendering the app component in the test browser instead of the actual browser
//     const headingElement = screen.getByText(/React With Testing :/i);
//     expect(headingElement).toBeInTheDocument();  // we are expecting headingEement in the document, if yes testcase passed else no
// });

test('renders React heading', () => {
  render(<App/>);
  const headingElement = screen.getByText(/React/i);
  expect(headingElement).toBeInTheDocument();
});