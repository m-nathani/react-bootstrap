import device from 'current-device';
import { getDataFromStorage } from './local-storage';

const isMobileDeviceByWidth = () => window.matchMedia(' (max-width: 672px) ').matches;

export const isMobileDevice = device.mobile() || isMobileDeviceByWidth();

export const isSmallMobileDevice =
  device.mobile() && window.matchMedia(' (max-width: 360px) ').matches;

export const largeDesktop = device.desktop() && window.matchMedia(' (min-width: 1440px) ').matches;

// To check if device only input events is touch
export const isMobileOrTablet = isMobileDevice || device.tablet();

export const isIE = () => /MSIE|Trident/.test(window?.navigator?.userAgent);

export const isSafari = () =>
  /^((?!chrome|android|crios|fxios).)*safari/i.test(window?.navigator?.userAgent);

export const isWebview = () =>
  getDataFromStorage('isWebview') ||
  /(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(
    window?.navigator?.userAgent
  );

export const isIOSWebView = () => isWebview() && getDataFromStorage('device') === 'iOS';

export { device };
