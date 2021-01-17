import { render } from '@testing-library/react';
import MarkerIcon from './MarkerIcon';

jest.mock('react-map-gl', () => ({
  Marker: () => <div>Marker</div>,
}));

test('renders MarkerIcon', () => {
  const location = { latitude: 0, longitude: 0 };
  const { container } = render(
    <MarkerIcon {...location} icon={''} color="#d00" />
  );
  expect(container.textContent).toMatch('Marker');
});
