import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { setError, setLoading } from './loadingSlice';
import { AppThunk } from '../store';
import { ISortableItem } from '../../models/data.model';

// Set initialState
const initialState: ISortableItem[] = [];

/*
 * Create fileSlice function with combined actions
 * Including: Set files
 */
const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    resetFiles: () => initialState,
    setFiles(state, action: PayloadAction<ISortableItem[]>) {
      action.payload.forEach((file: ISortableItem) => state.push(file));
    },
    orderFiles(state, action: PayloadAction<ISortableItem[]>) {
      action.payload.forEach((file: ISortableItem) => state.push(file));
    }
  }
});

// Export set file actions from fileSlice
export const setFiles =
  (files: ISortableItem[]): AppThunk =>
  (dispatch) => {
    try {
      // Map each file
      const setFile: ISortableItem[] = files.map((file) => ({
        id: file.id,
        name: file.name,
        data: {
          size: file.data.size,
          type: file.data.type,
          lastModified: file.data.lastModified
        },
        children: file.children
      }));
      // Dispatch files once finished mapping
      dispatch(fileSlice.actions.setFiles(setFile));
      dispatch(setLoading(false));
    } catch (err) {
      // Create error page if failed
      dispatch(setError(true));
    }
  };

export const orderFiles =
  (files: ISortableItem[]): AppThunk =>
  (dispatch) => {
    try {
      dispatch(fileSlice.actions.resetFiles());
      // Map each file
      const setFile: ISortableItem[] = files.map((file) => ({
        id: file.id,
        name: file.name,
        data: {
          size: file.data.size,
          type: file.data.type,
          lastModified: file.data.lastModified
        },
        children: file.children
      }));
      // Dispatch files once finished mapping
      dispatch(fileSlice.actions.orderFiles(setFile));
      dispatch(setLoading(false));
    } catch (err) {
      // Create error page if failed
      dispatch(setError(true));
    }
  };

// Export reducer
export default fileSlice.reducer;
