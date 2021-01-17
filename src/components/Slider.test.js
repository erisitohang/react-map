import { render, screen } from '@testing-library/react';
import Slider from './Slider';

test('renders Slider', () => {
  render(<Slider disable={false} count={1} />);
  const linkElement = screen.getByText(/Number of Drivers: 1/i);
  expect(linkElement).toBeInTheDocument();
});
