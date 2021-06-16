import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  isLoading: false,
  done: false,
  err: null,
  modList: [],
  isFulfilled: false,
  isRejected: false,
  message: ''
};

export const getModList = createAsyncThunk(
  'adminManage/getAdminList',
  async (data, api) => {
    try {
      api.dispatch(modManageSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_ALL_ADMIN + `?limit=${data.limit}&offset=${data.offset}`,
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

export const addMod = createAsyncThunk(
  'adminManage/addMod',
  async (data, api) => {
    try {
      api.dispatch(modManageSlice.actions.loading(true));
      const response = await axios.post(
        endpoints.ADD_MOD,
        {
          username: data.username,
          password: data.password
        },
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

export const disableMod = createAsyncThunk(
  'adminManage/disableMod',
  async (data, api) => {
    try {
      api.dispatch(modManageSlice.actions.loading(true));
      const response = await axios.post(
        endpoints.BAN_MOD,
        {
          username: data.username
        },
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

export const modManageSlice = createSlice({
  name: 'modManage',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state = { ...state, isLoading: action.payload };
    },
    clearState: (state) => {
      state.isRejected = false;
      state.isFulfilled = false;
    }
  },
  extraReducers: {
    [getModList.fulfilled]: (state, action) => {
      state.adminList = action.payload;
      state = { ...state, isLoading: false };
      state.done = true;
      state.err = null;
    },
    [getModList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [addMod.fulfilled]: (state) => {
      state.isLoading = false;
      // state.adminList = [...state.adminList, ...action.payload]
    },
    [addMod.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [disableMod.fulfilled]: (state) => {
      state.isLoading = false;
      // state.adminList = [...state.adminList, ...action.payload]
    },
    [disableMod.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});
