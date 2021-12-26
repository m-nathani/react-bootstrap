import { createAsyncThunk } from '@reduxjs/toolkit';
import todoAPI from 'apis/todo-api';

export const fetchAllSample = createAsyncThunk(
  'communication/fetchAll',
  async (_, { signal, rejectWithValue }) => {
    const source = todoAPI.getCancellationTokenSource();
    const cancelSource = () => source.cancel();
    try {
      signal.addEventListener('abort', cancelSource, false);
      const communications = await todoAPI.fetchTemplate({ cancelToken: source.token });

      return { ...communications, templates: communications };
    } catch (err) {
      return rejectWithValue({ errorMessage: err?.message || err });
    } finally {
      signal.removeEventListener('abort', cancelSource, false);
    }
  }
);
