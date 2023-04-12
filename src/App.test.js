import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar/navbar.component';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render navbar',() => {
  render(<Navbar />);
} )

test('renders location section', () => {
  render(<App />);
  const linkElement = screen.getByText(/Location/i);
  expect(linkElement).toBeInTheDocument();
});

// write more tests first then complete code
