import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  isLoading: false,
  done: false,
  err: null,
  errLogs: [],
  newUser: {},
  message: '',
  isFulfilled: false,
  isRejected: false
};

export const getSystemErrorLogs = createAsyncThunk(
  'report/getSystemErrorLogs',
  async (data, api) => {
    try {
      api.dispatch(reportSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_ERROR_LOG + `?limit=${data.limit}&offset=${data.offset}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const reportSlice = createSlice({
  name: 'report',
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    clearReportState: (state) => {
      state.isRejected = false;
      state.isFulfilled = false;
    }
  },
  extraReducers: {
    [getSystemErrorLogs.fulfilled]: (state, action) => {
      state.errLogs = action.payload;
      state.done = true;
      state.err = null;
    },
    [getSystemErrorLogs.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});
