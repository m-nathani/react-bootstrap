export const getErrorMessage = (err) => {
  console.error(err);
  const errorStatus = err?.status;
  const errorData = err?.data;
  const SERVER_IS_DOWN =
    "We can't reach our servers. They should be back up shortly - if you are experiencing this issue for a prolonged time please contact your UMAI account manager.";
  const INTERNAL_SERVER_ERROR =
    "You've found an unexpected error. Sorry about that. If you experience it repeatedly then please contact your UMAI account manager";

  let errorMessage = INTERNAL_SERVER_ERROR;
  if (errorStatus === 500 || errorStatus === 404) {
    errorMessage = INTERNAL_SERVER_ERROR;
  }
  if (errorStatus === 502) {
    errorMessage = SERVER_IS_DOWN;
  }
  // eslint-disable-next-line no-prototype-builtins
  if (errorData?.hasOwnProperty('error')) {
    errorMessage = errorData?.error || '';
  }
  // eslint-disable-next-line no-prototype-builtins
  if (errorData?.hasOwnProperty('errors')) {
    if (Array.isArray(errorData?.errors))
      errorMessage = errorData?.errors?.length ? errorData?.errors?.join(', ') : '';
    if (typeof errorData?.errors === 'string') errorMessage = errorData?.errors || '';
  }

  if (typeof errorData === 'string') {
    errorMessage = errorData;
  }
  if (typeof err === 'string') {
    errorMessage = err;
  }

  if (errorMessage === 'Network Error') errorMessage = SERVER_IS_DOWN;

  return errorMessage;
};

export const hasError = (errors) => {
  if (typeof errors === 'object' && Object.keys(errors).length > 0) return true;
  return false;
};
