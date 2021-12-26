export const getDataFromStorage = (key = '') => {
  try {
    return JSON.parse(window?.localStorage?.getItem?.(key));
  } catch (error) {
    console.error('error parse data from localstorage');
    return null;
  }
};

export const setDataToStorage = (key = '', data = {}) => {
  try {
    if (window?.localStorage?.setItem) {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.error('error parse data from localstorage');
  }
};

export const getDataFromSessionStorage = (key = '') => {
  try {
    return JSON.parse(window?.sessionStorage?.getItem?.(key));
  } catch (error) {
    console.error('error parse data from sessionStorage');
    return null;
  }
};

export const setDataToSessionStorage = (key = '', data = {}) => {
  try {
    if (window?.sessionStorage?.setItem) {
      window.sessionStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.error('error saving data in sessionStorage');
  }
};

export const removeDataFromSessionStorage = (key = '') => {
  try {
    if (window?.sessionStorage?.removeItem) {
      window.sessionStorage.removeItem(key);
    }
  } catch (error) {
    console.error('error removing data from sessionStorage');
  }
};
