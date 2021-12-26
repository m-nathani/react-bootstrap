import * as React from 'react';
import PropTypes from 'prop-types';

function ArrowBack({ width = 24, height = 16, color = '#000' }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.501.24a.818.818 0 011.395.568.8.8 0 01-.236.568L2.786 7.19H22.18a.812.812 0 01.823.8.822.822 0 01-.823.814H2.786l5.877 5.8a.818.818 0 11-1.162 1.154L.236 8.568a.8.8 0 010-1.135L7.501.24z"
        fill={color}
      />
    </svg>
  );
}

ArrowBack.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default ArrowBack;
