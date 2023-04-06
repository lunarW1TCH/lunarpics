import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders copyright text', () => {
  render(<Footer />);

  const footerElement = screen.getByText(/Copyright © 2023 Adrian Żegnałek/);
  expect(footerElement).toBeInTheDocument();
});
