import { createAsyncThunk } from '@reduxjs/toolkit';
import communicationAPI from 'apis/sample-api';

export const fetchAllSample = createAsyncThunk(
  'communication/fetchAll',
  async (_, { signal, rejectWithValue }) => {
    const source = communicationAPI.getCancellationTokenSource();
    const cancelSource = () => source.cancel();
    try {
      signal.addEventListener('abort', cancelSource, false);
      const communications = await communicationAPI.fetchTemplate({ cancelToken: source.token });

      return { ...communications, templates: handleCommunicationTemplates(communications) };
    } catch (err) {
      return rejectWithValue({ errorMessage: err?.message || err });
    } finally {
      signal.removeEventListener('abort', cancelSource, false);
    }
  }
);
