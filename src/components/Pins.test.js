import { render } from '@testing-library/react';

import Pins from './Pins';

jest.mock('./MarkerIcon', () => () => {
  return <div>MarkerIcon</div>;
});

test('renders Pins', () => {
  const data = {
    pickup_eta: 0,
    drivers: [
      {
        driver_id: '0-p65zrtuet6e',
        location: {
          latitude: null,
          longitude: null,
          bearing: 200,
        },
      },
    ],
  };
  const location = { latitude: 51.5049375, longitude: -0.0964509 };
  const { container } = render(<Pins data={data} {...location} />);
  expect(container.textContent).toMatch('MarkerIcon MarkerIcon');
});
