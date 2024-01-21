import auth from '../slices/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import loading from '../slices/loadingSlice';

const rootReducer = combineReducers({
  auth,
  loading
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
