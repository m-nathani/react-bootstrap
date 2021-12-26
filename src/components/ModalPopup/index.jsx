import React from 'react';
import Modal from 'react-modal';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import './ModalPopup.style.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');

const ModalPopup = ({
  children,
  modalIsOpen = false,
  onRequestClose = () => {},
  onHideClose = null,
  onAfterClose = () => {},
  hideClose = false,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  customClasses = '',
  style = {},
  ...restOfProps
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={onRequestClose}
    onAfterClose={onAfterClose}
    style={{ ...customStyles, ...style }}
    portalClassName={classnames(customClasses, 'umaiReactModalPortal')}
    shouldCloseOnEsc={shouldCloseOnEsc}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restOfProps}
  >
    <>
      {!hideClose && onRequestClose ? (
        <button
          type="button"
          onClick={onHideClose || onRequestClose}
          className="close-popup"
          aria-label="Close"
          data-testid="close-react-modal"
        >
          <CloseIcon />
        </button>
      ) : null}
      {children}
    </>
  </Modal>
);

ModalPopup.propTypes = {
  children: PropTypes.node.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  hideClose: PropTypes.bool,
  customClasses: PropTypes.string,
  onHideClose: PropTypes.func,
  onAfterClose: PropTypes.func,
  shouldCloseOnEsc: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  style: PropTypes.object,
};

export default ModalPopup;
