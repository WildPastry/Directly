import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Set initialState
const initialState = {
  isAuthenticated: false
};

/*
 * Create authSlice with combined actions
 * Including: App auth state
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    }
  }
});

// Export auth actions from authSlice
export const { setAuth } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
