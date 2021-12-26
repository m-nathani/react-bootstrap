import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputLabel from './InputLabel';
import styles from './Input.module.scss';

const Input = forwardRef(
  (
    {
      id,
      value,
      onChange,
      type = 'text',
      title,
      className = '',
      width = '100%',
      placeholder = 'Enter details',
      minLength = '1',
      maxLength = '30',
      datalist = null,
      list = '',
      inputLabel,
      labelClassName,
      tooltip,
      bold,
      ...props
    },
    inputRef
  ) => (
    <>
      <InputLabel
        htmlFor={id}
        className={labelClassName}
        bold={bold}
        value={inputLabel}
        tooltip={tooltip}
      />
      <input
        ref={inputRef}
        className={classnames(styles.input, { [className]: !!className })}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        title={title}
        required
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        style={{
          width,
        }}
        list={list}
        {...props}
      />
      {datalist}
    </>
  )
);

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  inputLabel: PropTypes.node,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  datalist: PropTypes.node,
  list: PropTypes.string,
  labelClassName: PropTypes.string,
  tooltip: PropTypes.node,
  bold: PropTypes.bool,
};

export default memo(Input);
