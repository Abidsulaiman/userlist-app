import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;
export const getUser = (state) => state.auth.user;

export default authSlice.reducer;
