import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header and home components', () => {
  render(<App />);
  
  // Check that the Header component is rendered
  const headerElement = screen.getByText('Elite Airlines');
  expect(headerElement).toBeInTheDocument();

  // Check that the Home component is rendered
  const homeElement = screen.getByTestId('home');
  expect(homeElement).toBeInTheDocument();
});
