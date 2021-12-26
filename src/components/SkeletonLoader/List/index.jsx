import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import './List.styles.scss';

export const List = ({ lines = 10, circle = false }) => {
  const generateSkeletonLoaders = () => {
    const sections = Array.from(Array(lines).keys());
    return sections.map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="skeleton-loader" key={`loader-${index}`}>
        {circle ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Skeleton count={1} height={40} width={40} circle />
            <div className="skeleton-bars">
              <Skeleton width={'45%'} />
              <Skeleton width={'60%'} />
            </div>
          </div>
        ) : (
          <>
            <Skeleton width={'45%'} />
            <Skeleton width={'75%'} />
            <Skeleton width={'60%'} />
          </>
        )}
      </div>
    ));
  };
  return (
    <div
      className={classnames('webrms-skeleton-loader-wrapper--list', { 'has-circle': circle })}
      data-testid="skeleton-loader"
    >
      {generateSkeletonLoaders()}
    </div>
  );
};

List.propTypes = {
  lines: PropTypes.number,
  circle: PropTypes.bool,
};

export default List;
