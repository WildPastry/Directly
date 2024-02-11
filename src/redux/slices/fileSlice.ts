import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { ISortableItem } from '../../models/data.model';
import { UniqueIdentifier } from '@dnd-kit/core';
import { setError } from './loadingSlice';

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
    },
    removeFile(state, action: PayloadAction<UniqueIdentifier>) {
      return state.filter((file) => file.id !== action.payload);
    }
  }
});

/**
 * The `orderFiles` function takes an array of files, maps each file to a new object with selected
 * properties, and dispatches the ordered files to the state.
 * @param {ISortableItem[]} files - An array of objects of type ISortableItem.
 * @returns {void} - Dispatch new ordered files
 */
export const orderFiles =
  (files: ISortableItem[]): AppThunk =>
  (dispatch) => {
    try {
      dispatch(fileSlice.actions.resetFiles());
      // Map each file
      const setFile: ISortableItem[] = files.map((file) => ({
        id: file.id,
        arrayBuffer: file.arrayBuffer,
        name: file.name,
        data: {
          size: file.data.size,
          type: file.data.type,
          lastModified: file.data.lastModified
        },
        children: file.children,
        collapsed: file.collapsed
      }));
      // Dispatch files once finished mapping
      dispatch(fileSlice.actions.orderFiles(setFile));
    } catch (err) {
      // Create error page if failed
      dispatch(setError(true));
    }
  };

// Export actions
export const { setFiles, removeFile, resetFiles } = fileSlice.actions;

// Export reducer
export default fileSlice.reducer;
