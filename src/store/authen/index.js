import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';
import localStorageKeys from '../../configs/localStorageKeys';

const initialState = {
  isValidating: false,
  isAdminValidAuthentication: false,
  loginUsername: localStorage.getItem(localStorageKeys.LOGIN_USERNAME) || '',
  adminToken: localStorage.getItem(localStorageKeys.TOKEN_ADMIN) || null,
  isLoggingIn: false,
  isFulfilled: false,
  isRejected: false,
  err: null
};

export const loginUsername = createAsyncThunk(
  'authen/loginUsername',
  async (data, api) => {
    localStorage.setItem(localStorageKeys.LOGIN_USERNAME, data.username);
    api.dispatch(adminAuthenSlice.actions.loginUsername(data.username));
    return data.username;
  }
);

export const adminLogin = createAsyncThunk(
  'adminAuthen/adminLogin',
  async (data, api) => {
    try {
      api.dispatch(adminAuthenSlice.actions.loggingIn());
      const response = await axios.post(endpoints.LOGIN_ADMIN, {
        username: data.username,
        password: data.password
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const changeAdminLoginUsername = createAsyncThunk(
  'authen/changeAdminLoginUsername',
  async (data, api) => {
    localStorage.removeItem(localStorageKeys.LOGIN_USERNAME);
    api.dispatch(adminAuthenSlice.actions.loginUsername(''));
    return '';
  }
);

export const verifyAdminAuthentication = createAsyncThunk(
  'adminAuthen/verifyAdminAuthentication',
  async (data, api) => {
    try {
      api.dispatch(adminAuthenSlice.actions.validating());
      if (data.adminToken) {
        return true;
      }
      return false;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const clearAuthentication = createAsyncThunk(
  'adminAuthen/clearAuthentication',
  async (data, api) => {
    try {
      const response = {};
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const adminAuthenSlice = createSlice({
  name: 'adminAuthen',
  initialState: initialState,
  reducers: {
    validating: (state) => {
      state.isValidating = true;
    },
    loggingIn: (state) => {
      state.isLoggingIn = true;
    },
    reset: (state) => {
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.adminToken = null;
      state.isLoggingIn = false;
      state.err = null;
    },
    loginUsername: (state, action) => {
      state.loginUsername = action.payload || '';
    },
    clearState: (state) => {
      state.isRejected = false;
      state.isFulfiled = false;
      state.isLoggingIn = false;
    }
  },
  extraReducers: {
    [adminLogin.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.isValidating = false;
      localStorage.setItem(
        localStorageKeys.TOKEN_ADMIN,
        action.payload.accessToken
      );
      state.isAdminValidAuthentication = true;
      state.isLoggingIn = false;
      state.adminToken = action.payload.accessToken;
      state.err = null;
    },
    [adminLogin.rejected]: (state, action) => {
      state.isLoggingIn = false;
      state.isRejected = true;
      state.err = action.payload;
    },
    [verifyAdminAuthentication.fulfilled]: (state, action) => {
      state.isValidating = false;
      state.isAdminValidAuthentication = action.payload;
      state.err = null;
    },
    [verifyAdminAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.adminToken = null;
      state.err = action.payload;
    },
    [clearAuthentication.fulfilled]: (state) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.adminToken = null;
      state.err = null;
    },
    [clearAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.adminToken = null;
      state.err = action.payload;
    },
    [loginUsername.fulfilled]: (state, action) => {
      state.loginUsername = action.payload;
    },
    [loginUsername.rejected]: (state, action) => {
      state.err = action.payload;
    },
    [changeAdminLoginUsername.fulfilled]: (state, action) => {
      state.loginUsername = action.payload;
    },
    [changeAdminLoginUsername.rejected]: (state, action) => {
      state.err = action.payload;
    }
  }
});

export const { clearState } = adminAuthenSlice.actions;
