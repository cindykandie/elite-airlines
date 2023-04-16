import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

// Mock the data.json file
jest.mock('../data.json', () => ({
  airlines: [
    { id: 1, name: 'Airline A' },
    { id: 2, name: 'Airline B' },
    { id: 3, name: 'Airline C' },
  ]
}));

test('renders the item list with data from the JSON file', () => {
  // Render the component
  render(<ItemList />);
  
  // Check if the item list container is rendered
  const itemListContainer = screen.getByTestId('item-list');
  expect(itemListContainer).toHaveAttribute('class', 'item-list');

  // Check if each airline from the JSON data is rendered
  const airlines = ['Airline A', 'Airline B', 'Airline C'];
  airlines.forEach((airline) => {
    const airlineName = screen.getByText(airline);
    expect(airlineName).toBeInTheDocument();
  });
});
