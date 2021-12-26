import * as React from 'react';
import PropTypes from 'prop-types';

function Info({ width = 14, height = 14, color = '#000000' }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" stroke={color} />
      <path
        d="M6.273 11h1.459V4.789H6.273V11zM7 3.975a.8.8 0 00.814-.791A.8.8 0 007 2.387a.8.8 0 00-.809.8.8.8 0 00.809.788z"
        fill={color}
      />
    </svg>
  );
}

Info.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default Info;
