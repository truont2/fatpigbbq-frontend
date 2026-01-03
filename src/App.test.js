import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  // Check for the brand name which should be always present
  const brandElements = screen.getAllByText(/Fat Pig BBQ/i);
  expect(brandElements.length).toBeGreaterThan(0);
  expect(brandElements[0]).toBeInTheDocument();
});
