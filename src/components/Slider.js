import * as React from 'react';

function Slider(props) {
  const { count, disable } = props;
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="slider">
      <div key={'count'} className="input">
        <label>Number of Drivers: {count}</label>
        <input
          type="range"
          defaultValue={count}
          min={1}
          max={50}
          step={1}
          onChange={() => null}
          onMouseUp={(event) => handleChange(event)}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default React.memo(Slider);
