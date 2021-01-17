import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Number of Drivers', () => {
  render(<App />);
  const linkElement = screen.getByText(/Number of Drivers/i);
  expect(linkElement).toBeInTheDocument();
});
