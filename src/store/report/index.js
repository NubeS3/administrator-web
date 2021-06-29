import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  isLoading: false,
  done: false,
  err: null,
  errLogs: [],
  reqLogCount: [],
  userBandwidth: [],
  systemBandwidth: [],
  message: '',
  isFulfilled: false,
  isRejected: false
};

const months = [
  {
    abbreviation: 'Jan',
    name: 'January'
  },
  {
    abbreviation: 'Feb',
    name: 'February'
  },
  {
    abbreviation: 'Mar',
    name: 'March'
  },
  {
    abbreviation: 'Apr',
    name: 'April'
  },
  {
    abbreviation: 'May',
    name: 'May'
  },
  {
    abbreviation: 'Jun',
    name: 'June'
  },
  {
    abbreviation: 'Jul',
    name: 'July'
  },
  {
    abbreviation: 'Aug',
    name: 'August'
  },
  {
    abbreviation: 'Sep',
    name: 'September'
  },
  {
    abbreviation: 'Oct',
    name: 'October'
  },
  {
    abbreviation: 'Nov',
    name: 'November'
  },
  {
    abbreviation: 'Dec',
    name: 'December'
  }
];

const lastDay = function (y, m) {
  return new Date(y, m + 1, 0).getDate();
};

const firstDay = function (y, m) {
  return new Date(y, m + 1, 1).getDate();
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

export const getSystemBandwidth = createAsyncThunk(
  'report/getSystemBandwidth',
  async (data, api) => {
    let temp = [];
    let curDate = new Date();

    try {
      // api.dispatch(bandwidthReportSlice.actions.loading());
      for (var i = 0; i < months.length; i++) {
        let firstDate = firstDay(curDate.getFullYear(), i);
        let lastDate = lastDay(curDate.getFullYear(), i);
        let firstMilestone =
          new Date(curDate.getFullYear(), i + 1, 1).getTime() / 1000;
        let lastMilestone =
          new Date(curDate.getFullYear(), i + 1, lastDate).getTime() / 1000;

        const response = await axios.get(
          endpoints.GET_SYSTEM_BANDWIDTH +
            `?from=${firstMilestone + 3600 * 24 * firstDate}&to=${
              lastMilestone + 3600 * 24 * lastDate
            }`,
          {
            headers: {
              Authorization: `Bearer ${data.authToken}`
            }
          }
        );
        temp.push({
          month: months[i].name.toString(),
          unit: 'MB',
          usage: Math.round((response.data * 100) / 8 / 1024 / 1024) / 100
        });
      }
      return temp;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getUserTotalBandwidth = createAsyncThunk(
  'report/getUserTotalBandwidth',
  async (data, api) => {
    try {
      api.dispatch(reportSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_ERROR_LOG + `?from=${data.from}&to=${data.to}`,
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
    },

    [getUserTotalBandwidth.fulfilled]: (state, action) => {
      state.errLogs = action.payload;
      state.done = true;
      state.err = null;
    },
    [getUserTotalBandwidth.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [getSystemBandwidth.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.systemBandwidth = action.payload;
      state.done = true;
      state.err = null;
    },
    [getSystemBandwidth.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});
