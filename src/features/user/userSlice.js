import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "John Doe",
  email: "john@example.com",
  password: "qwerty",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      prepare(email, password) {
        return {
          payload: { email, password },
        };
      },
      reducer(state, action) {
        if (
          action.payload.email === FAKE_USER.email &&
          action.payload.password === FAKE_USER.password
        ) {
          state.user = FAKE_USER;
          state.isAuthenticated = true;
        } else {
          return;
        }
      },
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
