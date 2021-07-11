import axios from 'axios';
import { createSlice, createAsyncThunk, isRejected } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  isLoading: false,
  done: false,
  err: null,
  modList: [],
  bannedModList: [],
  newMod: {},
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
      const response = await axios.patch(
        endpoints.BAN_MOD,
        {
          username: data.username,
          disable: true
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

export const enableMod = createAsyncThunk(
  'adminManage/enableMod',
  async (data, api) => {
    try {
      api.dispatch(modManageSlice.actions.loading(true));
      const response = await axios.patch(
        endpoints.BAN_MOD,
        {
          username: data.username,
          disable: false
        },
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return { username: data.username };
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
    clearModState: (state) => {
      state.isRejected = false;
      state.isFulfilled = false;
    }
  },
  extraReducers: {
    [getModList.fulfilled]: (state, action) => {
      state.modList = action.payload.filter((mod) => mod.is_disabled === false);
      state.bannedModList = action.payload.filter(
        (mod) => mod.is_disabled === true
      );

      state.done = true;
      state.err = null;
    },
    [getModList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [addMod.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.isLoading = false;
      state.modList = [...state.modList, action.payload];
      state.newMod = {};
    },
    [addMod.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    },
    [disableMod.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.modList = state.modList.filter(
        (mod) => mod.id !== action.payload.data.id
      );
      state.isLoading = false;
    },
    [disableMod.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    },
    [enableMod.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.bannedModList = state.bannedModList.filter(
        (mod) => mod.username !== action.payload.username
      );
      state.isLoading = false;
    },
    [enableMod.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});

export const { clearModState } = modManageSlice.actions;
