import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    student: {
      name: "",
      email: "",
    },
    isLoggedIn: false,
  },
  reducers: {
    name(state, action) {
      state.student.name = action.payload;
    },
    email(state, action) {
      state.student.email = action.payload;
    },
    login(state) {
      if (state.student.name && state.student.email) {
        state.student.name = "";
        state.student.email = "";
        state.isLoggedIn = true;
      }
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
