import device from 'current-device';
import { isIOSWebView, isIE } from './devices';

export function OpenNewWindow(url = '', name = '') {
  this.windowObjectReference = null;
  this.openNewWindow = () => {
    /* if the pointer to the window object in memory does not exist
     or if such pointer exists but the window was closed */
    if (this.windowObjectReference == null || this.windowObjectReference?.closed) {
      // always open a new tab for IE and apple device for the first time.
      if (isIE() || device.ios() || device.macos()) {
        this.windowObjectReference = window.open(url, `${name}-${new Date().toString()}`);
        return;
      }
      this.windowObjectReference = window.open(url, name);
      /* then create it. The new window will be created and
         will be brought on top of any other window. */
    } else {
      // close and repoen the tab for IE and apple device because window.focus is not working..
      if (isIE() || device.ios() || device.macos()) {
        this.windowObjectReference.close();
        this.windowObjectReference = window.open(url, name);
        if (this.windowObjectReference?.focus) this.windowObjectReference.focus();
        return;
      }
      this.windowObjectReference = window.open(url, name);
      if (this.windowObjectReference?.focus) this.windowObjectReference.focus();
      /* else the window reference must exist and the window
         is not closed; therefore, we can bring it back on top of any other
         window with the focus() method. There would be no need to re-create
         the window or to reload the referenced resource. */
    }
  };

  return () => {
    if (isIOSWebView()) {
      window.location.hash = `#umai-ios-link=${url}`;
      return;
    }
    this.openNewWindow(url, name);
  };
}
