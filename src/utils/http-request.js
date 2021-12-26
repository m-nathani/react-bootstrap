import axios from 'axios';
import humps from 'humps';
import { getErrorMessage } from './errors';
import { showErrorMessage } from './alerts';

const getDefaultHeaders = () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${getAuthToken()}`,
  };
  return headers;
};

class HttpRequest {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
    });

    this.axios.CancelToken = axios.CancelToken;
    this.axios.isCancel = axios.isCancel;

    this.reponseInterceptor();
    this.requestInterceptor();
  }

  reponseInterceptor() {
    // Add a response interceptor
    this.axios.interceptors.response.use(
      (response) =>
        // Do something with response data
        humps.camelizeKeys(response.data),

      (error) => {
        if (this.isCancel(error)) {
          return Promise.reject(error);
        }
        const errorMessage = getErrorMessage(error?.response || error?.message);
        showErrorMessage(errorMessage);
        return Promise.reject(errorMessage);
      }
      // Do something with response error
    );
  }

  requestInterceptor() {
    this.axios.interceptors.request.use(
      (config) => {
        config.headers = {
          ...(config?.headers || {}),
          ...getDefaultHeaders(),
        };

        config.params = {
          ...(config?.params || {}),
        };

        // decamelize parameters since server expected it in underscore format variable_name
        config.params = humps.decamelizeKeys(config.params);
        config.data = humps.decamelizeKeys(config.data);
        return config;
      },
      (error) =>
        // Do something with request error
        Promise.reject(error)
    );
  }

  getCancellationTokenSource() {
    return this.axios.CancelToken.source();
  }

  isCancel(error) {
    return this.axios.isCancel(error);
  }

  fetch(url, params, config = {}) {
    return this.axios.get(url, {
      params,
      ...config,
      cancelToken: config && config.cancelToken,
    });
  }

  create(url, data, config = {}) {
    return this.axios.post(url, data, {
      ...config,
    });
  }

  update(url, data, config = {}) {
    return this.axios.put(url, data, {
      ...config,
    });
  }

  patch(url, data, config = {}) {
    return this.axios.patch(url, data, {
      ...config,
    });
  }

  remove(url, params, config = {}) {
    return this.axios.delete(url, {
      params,
      ...config,
    });
  }
}

export default HttpRequest;
