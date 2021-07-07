import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';
const initialState = {
  isLoading: false,
  done: false,
  err: null,
  userList: [],
  noBanUserList: [],
  bannedUserList: [],
  newUser: {},
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
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getNoBanUserList = createAsyncThunk(
  'adminManage/getNoBanUserList',
  async (data, api) => {
    try {
      api.dispatch(userManageSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_NO_BAN_USER +
          `?limit=${data.limit}&offset=${data.offset}`,
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

export const getBannedUserList = createAsyncThunk(
  'adminManage/getBannedUserList',
  async (data, api) => {
    try {
      api.dispatch(userManageSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_BANNED_USER +
          `?limit=${data.limit}&offset=${data.offset}`,
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
    clearUserState: (state) => {
      state.isRejected = false;
      state.isFulfilled = false;
    }
  },
  extraReducers: {
    [getUserList.fulfilled]: (state, action) => {
      state.userList = [...state.userList, ...action.payload];

      state.done = true;
      state.err = null;
    },
    [getUserList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [getNoBanUserList.fulfilled]: (state, action) => {
      let newValues = [...state.noBanUserList, ...action.payload];
      state.noBanUserList = newValues.filter(
        (item, index, self) => self.findIndex((i) => i.id === item.id) === index
      );

      state.done = true;
      state.err = null;
    },
    [getNoBanUserList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [getBannedUserList.fulfilled]: (state, action) => {
      state.bannedUserList = [...state.bannedUserList, ...action.payload];

      state.done = true;
      state.err = null;
    },
    [getBannedUserList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [addUser.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.isLoading = false;
      state.userList = [...state.userList, action.payload];
      state.newUser = action.payload;
    },
    [addUser.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    },

    [disableUser.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
      state.isLoading = false;
    },
    [disableUser.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});

export const { clearUserState } = userManageSlice.actions;
