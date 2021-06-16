import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';
import localStorageKeys from '../../configs/localStorageKeys';

const initialState = {
  isValidating: false,
  isAdminValidAuthentication: false,
  authToken: localStorage.getItem(localStorageKeys.TOKEN_ADMIN) || null,
  isLoggingIn: false,
  err: null,
  isFulfiled: false,
  isRejected: false
};

export const adminLogin = createAsyncThunk(
  'adminAuthen/adminLogin',
  async (data, api) => {
    try {
      api.dispatch(adminAuthenSlice.actions.loggingIn());
      const response = await axios.post(endpoints.LOGIN_ADMIN, {
        username: data.username,
        password: data.password
      });
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
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

export const loginEmail = createAsyncThunk(
  'authen/loginEmail',
  async (data, api) => {
    localStorage.setItem(localStorageKeys.LOGIN_EMAIL, data.email);
    api.dispatch(adminAuthenSlice.actions.loginEmail(data.email));
    return data.email;
  }
);

export const changeLoginEmail = createAsyncThunk(
  'authen/changeLoginEmail',
  async (data, api) => {
    localStorage.removeItem(localStorageKeys.LOGIN_EMAIL);
    api.dispatch(adminAuthenSlice.actions.loginEmail(''));
    return '';
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
    reset: (state, action) => {
      state.isValidating = false;
      state.isValidAuthentication = false;
      state.authToken = null;
      state.isLoggingIn = false;
      state.err = null;
    },
    loginEmail: (state, action) => {
      state.loginEmail = action.payload || '';
    },
    clearState: (state) => {
      state.isRejected = false;
      state.isFulfiled = false;
      state.isLoggingIn = false;
    }
  },
  extraReducers: {
    [adminLogin.fulfilled]: (state, action) => {
      localStorage.setItem(
        localStorageKeys.TOKEN_ADMIN,
        action.payload.accessToken
      );
      state.isFulfiled = true;
      state.isAdminValidAuthentication = true;
      state.isLoggingIn = false;
      state.authToken = action.payload.accessToken;
      state.err = null;
    },
    [adminLogin.rejected]: (state, action) => {
      state.isLoggingIn = false;
      state.err = action.payload;
    },
    [verifyAdminAuthentication.fulfilled]: (state, action) => {
      state.isRejected = true;
      state.isValidating = false;
      state.isAdminValidAuthentication = action.payload;
      state.err = null;
    },
    [verifyAdminAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.authToken = null;
      state.err = action.payload;
    },
    [clearAuthentication.fulfilled]: (state) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.authToken = null;
      state.err = null;
    },
    [clearAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN_ADMIN);
      state.isValidating = false;
      state.isAdminValidAuthentication = false;
      state.authToken = null;
      state.err = action.payload;
    }
  }
});

export const { clearState, login } = adminAuthenSlice.reducer;
