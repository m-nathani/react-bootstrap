export const prepareAdd = (value = {}) => ({
  payload: {
    ...value,
    isUpdated: false,
    isDeleted: false,
    isNew: true,
  },
});

export const prepareAddMany = (values = []) => ({
  payload: {
    ...values.map((val) => ({
      ...val,
      isUpdated: false,
      isDeleted: false,
      isNew: true,
    })),
  },
});

export const prepareSoftRemove = (value = {}) => ({
  payload: {
    ...value,
    changes: {
      isDeleted: true,
      isUpdated: false,
      ...(value?.changes || {}),
    },
  },
});

export const prepareUpdate = (value = {}) => ({
  payload: {
    ...value,
    changes: {
      isDeleted: false,
      isUpdated: !value?.isNew,
      ...(value?.changes || {}),
    },
  },
});

export const prepareUpsert = (value = {}) => ({
  payload: {
    ...value,
    isDeleted: false,
    isUpdated: !value?.isNew,
  },
});
