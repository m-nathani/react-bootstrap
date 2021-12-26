import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import './Blocks.styles.scss';

export const Blocks = ({
  blockStyles = { height: '65px' },
  circle = false,
  numBlocks = 21,
  lines = ['45%', '75%', '60%'],
  className,
}) => (
  <div
    className={classnames('webrms-skeleton-loader-wrapper--blocks', className, {
      'has-circle': circle,
    })}
  >
    {[...Array(numBlocks)].map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="skeleton-loader" style={blockStyles} key={`loader-${index}`}>
        {circle ? (
          <Skeleton
            className="skeleton-circle"
            circle
            style={{ display: 'flex' }}
            height="50px"
            width="50px"
          />
        ) : null}
        <div className="skeleton-bars">
          {lines.map((width, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Skeleton width={width} key={`${width}-${i}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

Blocks.propTypes = {
  blockStyles: PropTypes.object,
  circle: PropTypes.bool,
  numBlocks: PropTypes.number,
  lines: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Blocks;
