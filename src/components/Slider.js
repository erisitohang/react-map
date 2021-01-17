import * as React from 'react';

function Slider(props) {
  const { count, disable } = props;
  const [previewCount, setPreviewCount] = React.useState(count);
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  const handleSlide = (event) => {
    setPreviewCount(event.target.value);
  };

  return (
    <div className="slider">
      <div key={'count'} className="input">
        <label>Number of Drivers: {previewCount}</label>
        <input
          type="range"
          defaultValue={count}
          min={1}
          max={50}
          step={1}
          onChange={(event) => handleSlide(event)}
          onMouseUp={(event) => handleChange(event)}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default React.memo(Slider);
