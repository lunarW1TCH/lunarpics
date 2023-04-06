import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainNavigation from './MainNavigation';

test('renders list elements', async () => {
  render(
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>,
  );

  const listItemElements = await screen.findAllByRole('link');
  expect(listItemElements).not.toHaveLength(0);
});

test('renders home text', () => {
  render(
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>,
  );

  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});

test('renders planets text', () => {
  render(
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>,
  );

  const linkElement = screen.getByText(/Planets/);
  expect(linkElement).toBeInTheDocument();
});

test('renders stars text', () => {
  render(
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>,
  );

  const linkElement = screen.getByText(/Stars/);
  expect(linkElement).toBeInTheDocument();
});
