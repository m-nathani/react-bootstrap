import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PencilIcon from 'assets/icons/pencil';
import InputLabel from './InputLabel';
import InputData from './InputData';

const Input = ({
  id,
  value,
  onChange,
  title,
  className,
  width,
  placeholder,
  minLength,
  maxLength,
  list,
  datalist,
  inputLabel,
  labelClassName,
  tooltip,
  bold,
  showInputOnly = false,
  showLabelOnly = false,
}) => {
  const inputRef = useRef();
  const [showInput, setShowInput] = useState(showInputOnly);

  const handleShowInput = () => {
    setShowInput(true);
  };

  const handleShowLabel = () => {
    if (showInputOnly) return;
    setShowInput(false);
  };

  useEffect(() => {
    setShowInput(showInputOnly);
  }, [showInputOnly]);

  useEffect(() => {
    if (showInput && inputRef.current?.focus) inputRef.current.focus();
  }, [showInput]);

  const renderLabel = () => (
    <InputLabel
      htmlFor={id}
      className={labelClassName}
      bold={bold}
      value={
        <>
          {value} {!showLabelOnly && <PencilIcon />}
        </>
      }
      tooltip={tooltip}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(!showLabelOnly && { onClick: handleShowInput, onFocus: handleShowInput })}
    />
  );

  if (showLabelOnly) {
    return renderLabel();
  }

  if (showInput)
    return (
      <InputData
        ref={inputRef}
        className={className}
        id={id}
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
        datalist={datalist}
        labelClassName={labelClassName}
        bold={bold}
        inputLabel={inputLabel}
        onBlur={handleShowLabel}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleShowLabel();
          }
        }}
      />
    );

  return renderLabel();
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
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
  showInputOnly: PropTypes.bool,
  showLabelOnly: PropTypes.bool,
};

export default memo(Input);
