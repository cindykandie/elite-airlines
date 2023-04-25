import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  test('renders the header with the text "Elite Airlines"', () => {
    render(<Header />);
  
    // Check that the header element is rendered
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();

    // Check that the header has the text "Elite Airlines"
    expect(headerElement).toHaveTextContent('Elite Airlines');
  });
});
