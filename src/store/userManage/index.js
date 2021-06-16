import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';
const initialState = {
  isLoading: false,
  done: false,
  err: null,
  userList: [],
  message: '',
  isFulfilled: false,
  isRejected: false
};

export const getUserList = createAsyncThunk(
  'adminManage/getUserList',
  async (data, api) => {
    try {
      api.dispatch(userManageSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_ALL_USER + `?limit=${data.limit}&offset=${data.offset}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const addUser = createAsyncThunk(
  'userManage/addUser',
  async (data, api) => {
    try {
      api.dispatch(userManageSlice.actions.loading(true));
      const response = await axios.post(
        endpoints.ADD_USER,
        {
          email: data.email,
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

export const disableUser = createAsyncThunk(
  'adminManage/disableUser',
  async (data, api) => {
    try {
      api.dispatch(userManageSlice.actions.loading(true));
      const response = await axios.patch(
        endpoints.BAN_USER,
        {
          email: data.email,
          is_ban: true
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

export const userManageSlice = createSlice({
  name: 'userManage',
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    clearState: (state) => {
      state.isRejected = false;
      state.isFulfilled = false;
    }
  },
  extraReducers: {
    [getUserList.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.userList = action.payload;
      state = { ...state, isLoading: false };
      state.done = true;
      state.err = null;
    },
    [getUserList.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    },

    [disableUser.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [disableUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});
