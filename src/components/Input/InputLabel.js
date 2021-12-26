import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Tooltip } from 'components';
import { ViewportContext } from 'contexts/viewport';
import InfoIcon from 'assets/icons/info';
import styles from './Input.module.scss';

const InputLabel = ({
  htmlFor,
  value,
  className = '',
  tooltip = false,
  bold = true,
  onClick,
  onFocus,
}) => {
  const { mobile } = useContext(ViewportContext);

  if (!value) return null;

  return (
    <span className={styles.inputLabel}>
      <span
        className={classnames({
          [styles.clickLabel]: !!onClick,
          [className]: !!className,
        })}
        onClick={onClick}
        onFocus={onFocus}
      >
        <label
          className={classnames(styles.name, {
            [styles.nameBold]: bold,
          })}
          htmlFor={htmlFor}
        >
          {value}
        </label>
      </span>
      {tooltip ? (
        <Tooltip
          trigger="hover"
          placement="bottom"
          triggerComponent={
            <span className={styles.labelTooltip}>
              <InfoIcon />
            </span>
          }
          offset={[mobile ? 0 : 70, 0]}
        >
          <span className={styles.tooltip}>{tooltip}</span>
        </Tooltip>
      ) : null}
    </span>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.node.isRequired,
  className: PropTypes.string,
  tooltip: PropTypes.node,
  bold: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

export default memo(InputLabel);
