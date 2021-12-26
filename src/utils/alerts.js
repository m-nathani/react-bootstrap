import React from 'react';
import { toast } from 'react-toastify';
import { isWebview, isMobileDevice } from './devices';
import { ReactComponent as OfflineIcon } from '../assets/icons/offline.svg';
import { ReactComponent as OnlineIcon } from '../assets/icons/online.svg';
import '../styles/alerts.style.scss';

const onlineNetworkToastId = 'webrms_onlineNetworkToastId';
const offlineNetworkToastId = 'webrms_offlineNetworkToastId';

const toastrConfig = {
  closeButton: true,
  position: 'top-right',
  autoClose: 8000,
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
    {isWebview() ? null : (
      <button
        className="reload-after-online"
        type="button"
        onClick={() => {
          if (window?.location?.reload) window?.location?.reload();
        }}
      >
        Reload
      </button>
    )}
  </>
);

export const showErrorMessage = (message) => {
  toast.error(message, toastrConfig);
};

export const showSuccessMessage = (message) => {
  toast.success(message, toastrConfig);
};

export const showInformation = (message) => {
  toast.info(message, toastrConfig);
};

export const showOnline = () => {
  // dismiss all toast and queue to show online connected message
  toast.clearWaitingQueue();
  toast.dismiss();
  toast.success(OnlineComponent, {
    ...toastrConfig,
    toastId: onlineNetworkToastId,
    closeOnClick: true,
    autoClose: false,
    draggable: true,
    icon: <OnlineIcon />,
  });
};

export const showOffline = () => {
  // dismiss all toast and queue to show offline network toast
  toast.dismiss();
  toast.clearWaitingQueue();
  toast.error('No internet connection', {
    ...toastrConfig,
    toastId: offlineNetworkToastId,
    closeButton: false,
    closeOnClick: false,
    autoClose: false,
    draggable: false,
    icon: <OfflineIcon />,
  });
};

export const configureToast = () => {
  toast.configure({ limit: isMobileDevice ? 2 : 4 });
};

export { toast } from 'react-toastify';
