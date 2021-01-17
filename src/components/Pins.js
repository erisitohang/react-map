import * as React from 'react';
import { Marker } from 'react-map-gl';

const ICON =
  'M 549 159C 568 162 572 170 572 183C 572 183 572 223 572 223C 572 223 661 225 661 225C 694 223 723 234 741 273C 741 273 805 434 805 434C 852 446 872 480 873 508C 873 508 873 719 873 719C 873 719 811 719 811 719C 811 719 811 790 811 790C 814 857 704 860 701 789C 701 789 700 719 700 719C 700 719 300 719 300 719C 300 719 299 789 299 789C 296 860 186 857 189 790C 189 790 189 719 189 719C 189 719 127 719 127 719C 127 719 127 508 127 508C 128 480 148 446 195 434C 195 434 259 273 259 273C 277 234 306 223 339 225C 339 225 428 223 428 223C 428 223 428 183 428 183C 428 170 432 162 451 159C 451 159 549 159 549 159M 305 309C 305 309 260 430 260 430C 260 430 741 431 741 431C 741 431 695 306 695 306C 683 281 672 281 646 281C 646 281 355 280 355 280C 352 280 350 280 347 280C 327 280 312 285 305 309C 305 309 305 309 305 309M 194 545C 194 574 217 597 246 597C 274 597 298 574 298 545C 298 517 274 493 246 493C 217 493 194 517 194 545C 194 545 194 545 194 545M 705 545C 705 574 728 597 757 597C 786 597 809 574 809 545C 809 517 786 493 757 493C 728 493 705 517 705 545C 705 545 705 545 705 545';
function Pins(props) {
  const { data, count } = props;
  const { drivers } = data;

  return !drivers.length
    ? []
    : drivers.slice(0, count).map((driver) => (
        <Marker
          key={driver.driver_id}
          longitude={driver.location.longitude}
          latitude={driver.location.latitude}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={ICON} />
          </svg>
        </Marker>
      ));
}

export default React.memo(Pins);
