import { createSelector } from '@reduxjs/toolkit';
import { FINAL_ASYNC_ACTION_STATUS, ASYNC_ACTION_STATES } from 'constants/app';
import { communicationAdapter } from './slice';

// Rename the exports for readability in component usage
export const {
  selectById: selectCommunicationById,
  selectIds: selectCommunicationIds,
  selectEntities: selectCommunicationEntities,
  selectAll: selectAllCommunications,
  selectTotal: selectTotalCommunications,
} = communicationAdapter.getSelectors((state) => state.communication);

export const selectFilteredCommunicationIds = createSelector(
  [(_, locale) => locale, selectCommunicationIds, selectAllCommunications],
  (locale, communicationIds, communications) => {
    if (!locale) return communicationIds;
    return communications.filter((c) => c?.message?.[locale]?.length).map((c) => c.id);
  }
);

export const selectIsSaved = (state) =>
  FINAL_ASYNC_ACTION_STATUS.includes(state.communication.saveStatus);

export const selectIsSaving = (state) =>
  ASYNC_ACTION_STATES.LOADING === state.communication.saveStatus;

export const selectLoadStatus = (state) => state.communication.loadStatus;

export const selectIsLoaded = createSelector(selectLoadStatus, (loadStatus) =>
  FINAL_ASYNC_ACTION_STATUS.includes(loadStatus)
);

export const selectActiveCommunicationId = (state) => state.communication.activeCommunicationId;

export const selectActiveCommunication = createSelector(
  [(state) => state, selectActiveCommunicationId],
  (state, id) => selectCommunicationById(state, id) || {}
);

export const selectActiveCommunicationMessage = createSelector(
  [(_, lang) => lang, selectActiveCommunication],
  (lang, communication) => ({
    message: communication.message?.[lang],
    messageEditable: communication.messageEditable?.[lang],
  })
);

export const selectVariables = (state) => state.communication.variables;
