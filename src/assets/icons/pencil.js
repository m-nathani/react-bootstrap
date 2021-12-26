import * as React from 'react';
import PropTypes from 'prop-types';

function PencilIcon({ width = 15, height = 15, color = '#5D6572' }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.348 13.58a.885.885 0 01-.207.1l-4.118 1.3a.444.444 0 01-.448-.11l-.444-.444a.444.444 0 01-.11-.448l1.3-4.118a.882.882 0 01.219-.361L10.518.52a1.776 1.776 0 012.514 0l1.447 1.447a1.778 1.778 0 010 2.514L5.5 13.457a.89.89 0 01-.153.123zm.086-1.312l5.936-5.936-2.7-2.7-5.936 5.936a3.785 3.785 0 012.7 2.7zm-3.923-.056c.522.317.96.755 1.278 1.278l1.86-.587a2.89 2.89 0 00-2.551-2.551l-.587 1.86zM.95 13.988l.063.063.9-.283a2.902 2.902 0 00-.676-.676l-.287.896zm12.9-10.135a.89.89 0 000-1.257l-1.45-1.45a.889.889 0 00-1.256 0l-.521.52 2.7 2.7.527-.513zM10 2.295l-.7.7 2.7 2.7.7-.7-2.7-2.7zM7.91 5.352a.444.444 0 01.628.628l-3.11 3.11a.444.444 0 11-.628-.628l3.11-3.11zm1.11 1.11a.444.444 0 01.629.629l-3.11 3.11a.444.444 0 11-.628-.628l3.11-3.11z"
        fill={color}
      />
    </svg>
  );
}

PencilIcon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

export default PencilIcon;
