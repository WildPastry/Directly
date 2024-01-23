import auth from '../slices/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import files from '../slices/fileSlice';
import loading from '../slices/loadingSlice';

const rootReducer = combineReducers({
  auth,
  files,
  loading
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
