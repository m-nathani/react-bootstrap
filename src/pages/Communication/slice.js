import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';
import { prepareAdd, prepareUpdate } from 'utils/prepare-reducer';
import { ASYNC_ACTION_STATES } from 'constants/app';

const communicationAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.temporary - a.temporary,
});

const handleRemoveCommunication = (state, templateId) => {
  communicationAdapter.removeOne(state, templateId);
  state.activeCommunicationId = null;
  state.saveStatus = ASYNC_ACTION_STATES.SUCCEEDED;
};

const communicationSlice = createSlice({
  name: 'communication',
  initialState: communicationAdapter.getInitialState({
    saveStatus: ASYNC_ACTION_STATES.IDLE,
    loadStatus: ASYNC_ACTION_STATES.IDLE,
    error: null,
    variables: [],
    activeCommunicationId: null,
  }),
  reducers: {
    addCommunication: {
      reducer: (state, action) => {
        const order = (state?.ids?.length || 0) + 1;
        const id = nanoid();
        communicationAdapter.addOne(state, {
          ...action,
          payload: {
            ...(action?.payload || {}),
            id,
            name: `New template ${order}`,
          },
        });
        state.activeCommunicationId = id;
      },
      prepare: prepareAdd,
    },
    removeCommunication: {
      reducer: (state, action) => {
        state.saveStatus = ASYNC_ACTION_STATES.LOADING;
        handleRemoveCommunication(state, action.payload);
      },
    },
    updateCommunication: {
      reducer: communicationAdapter.updateOne,
      prepare: prepareUpdate,
    },
    updateActiveCommunication: (state, action) => {
      state.activeCommunicationId = action.payload;
    },
    updateActiveCommunicationToFirstId: (state) => {
      const [firstId] = state.ids;
      state.activeCommunicationId = firstId;
    },
  },
});

export { communicationAdapter };
export const communicationActions = communicationSlice.actions;
export const communicationReducer = communicationSlice.reducer;
export default communicationSlice;
