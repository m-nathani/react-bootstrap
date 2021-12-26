export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000';
export const API_ENDPOINT_PARTNER_V2 = `${API_ENDPOINT}${process.env.REACT_APP_API_ENDPOINT_PARTNER_V2}`;
export const API_END_POINT = process.env.REACT_APP_API_ENDPOINT;
export const API_ACCESS_TOKEN = process.env.REACT_APP_API_ACCESS_TOKEN;
export const APP_DOMAIN = process.env.REACT_APP_DOMAIN;

export const ASYNC_ACTION_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

export const FINAL_ASYNC_ACTION_STATUS = [
  ASYNC_ACTION_STATES.SUCCEEDED,
  ASYNC_ACTION_STATES.FAILED,
];

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_TIMEZONE = 'Asia/Singapore';
export const DEFAULT_CURRENCY = 'RM';
export const DEFAULT_COUNTRY = 'GB';

export const ENVIRONMENT = {
  LOCAL: 'LOCAL',
  DEV: 'DEV',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};
