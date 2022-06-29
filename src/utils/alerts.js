import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ReactComponent as OfflineIcon } from '../assets/icons/offline.svg';
import { ReactComponent as OnlineIcon } from '../assets/icons/online.svg';
import '../styles/alerts.style.scss';

const onlineNetworkToastId = 'webrms_onlineNetworkToastId';
const offlineNetworkToastId = 'webrms_offlineNetworkToastId';

const toasterConfig = {
  closeButton: true,
  position: 'top-right',
  autoClose: 7000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: true,
  theme: 'colored',
  icon: false,
};

const OnlineComponent = () => (
  <>
    Internet connection is back
    <button
      className="reload-after-online"
      type="button"
      onClick={() => {
        window?.location?.reload?.();
      }}
    >
      Reload
    </button>
  </>
);

export const showErrorMessage = (message, config = {}) => {
  /* NOTE: toastId is kept to message to avoid duplicate toast of the same error message.
   * read here for more info: https://fkhadra.github.io/react-toastify/prevent-duplicate
   */
  toast.error(message, { ...toasterConfig, toastId: message, ...config });
};

export const showSuccessMessage = (message, config = {}) => {
  toast.success(message, { ...toasterConfig, ...config });
};

export const showInformation = (message, config = {}) => {
  toast.info(message, { ...toasterConfig, ...config });
};

export const showOnline = () => {
  // dismiss all toast and queue to show online connected message
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.success(OnlineComponent, {
    ...toasterConfig,
    toastId: onlineNetworkToastId,
    closeOnClick: true,
    autoClose: false,
    draggable: true,
    icon: <OnlineIcon />,
  });
};

export const showOffline = () => {
  // dismiss all toast and queue to show offline network toast
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.error('No internet connection', {
    ...toasterConfig,
    toastId: offlineNetworkToastId,
    closeButton: false,
    closeOnClick: false,
    autoClose: false,
    draggable: false,
    icon: <OfflineIcon />,
  });
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const AlertContainer = (props) => <ToastContainer limit={1} {...props} />;

export { toast, ToastContainer } from 'react-toastify';
