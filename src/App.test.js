import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero-component/Hero';

test('render navbar',() => {
  render(<Navbar />);
} )

// write more tests first then complete code
