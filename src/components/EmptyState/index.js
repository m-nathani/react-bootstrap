import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './EmptyState.module.scss';

const EmptyState = ({
  marginTop = '0',
  img,
  title = '',
  description = '',
  link,
  linkName,
  className,
}) => (
  <div
    className={classnames(styles.templateEmptyStateWrapper, { [className]: !!className })}
    style={{ marginTop }}
  >
    {img ? <div>{img}</div> : null}
    {title ? <div className={styles.title}>{title}</div> : null}
    {description ? <div className={styles.description}>{description}</div> : null}
    {link && linkName ? (
      <Link className={styles.emptyStateLinkTo} to={link}>
        {linkName}
      </Link>
    ) : null}
  </div>
);

EmptyState.propTypes = {
  img: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  link: PropTypes.string,
  linkName: PropTypes.node,
  marginTop: PropTypes.string,
  className: PropTypes.string,
};

export default memo(EmptyState);
