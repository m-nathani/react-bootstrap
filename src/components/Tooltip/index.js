/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const Tooltip = ({
  triggerComponent,
  children,
  trigger = ['hover'],
  placement = 'bottom',
  arrowStyles = {},
  controlledVisible = false,
  setControlledVisible,
  zIndex = 1,
  ...props
}) => {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      trigger,
      placement,
      ...(setControlledVisible && {
        visible: controlledVisible,
        onVisibleChange: setControlledVisible,
      }),
      ...props,
    });

  return (
    <>
      <div ref={setTriggerRef}>{triggerComponent}</div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: 'tooltip-container',
            style: {
              background: '#ffffff',
              padding: '0',
              boxShadow: '2px 2px 6px 4px #00000029',
              borderRadius: '8px',
              '--tooltipBorder': 'transparent',
              zIndex,
            },
          })}
        >
          {children}
          <div {...getArrowProps({ className: 'tooltip-arrow', style: arrowStyles })} />
        </div>
      )}
    </>
  );
};

Tooltip.propTypes = {
  triggerComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placement: PropTypes.string,
  arrowStyles: PropTypes.object,
  controlledVisible: PropTypes.bool,
  setControlledVisible: PropTypes.func,
  zIndex: PropTypes.number,
};

export default memo(Tooltip);
