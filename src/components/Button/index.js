import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ disabled, className, label, icon = null, onClick }) => (
  <button
    className={classnames(styles.button, { [className]: !!className })}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {icon} {label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
