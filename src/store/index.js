import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';

import { modManageSlice } from './modManage';
import { userManageSlice } from './userManage';
import { adminAuthenSlice } from './authen';
import { reportSlice } from './report';
// const rootPersistConfig = {
//   key: 'root',
//   storage
// };

const persistedReducer = combineReducers({
  authen: adminAuthenSlice.reducer,
  modManage: modManageSlice.reducer,
  userManage: userManageSlice.reducer,
  report: reportSlice.reducer
});

// const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

export default store;
