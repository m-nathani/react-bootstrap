import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './SimpleForm.styles.scss';

export const SimpleForm = () => {
  const generateSkeletonLoaders = () => {
    const sections = Array.from(Array(4).keys());
    return sections.map((section, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="skeleton-loader" key={`loader-${index}`}>
        <Skeleton width={'45%'} />
        <Skeleton width={'75%'} />
        <Skeleton width={'60%'} />
      </div>
    ));
  };
  return (
    <div className="skeleton-loader-wrapper--simple-form">
      <div className="skeleton-loader">
        <Skeleton width={'45%'} />
        <Skeleton width={'75%'} />
        <Skeleton width={'60%'} />
        <Skeleton width={'60%'} />
      </div>
      {generateSkeletonLoaders()}
    </div>
  );
};

export default SimpleForm;
