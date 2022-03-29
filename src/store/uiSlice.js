import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: "" },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        type: action.payload.type,
        text: action.payload.text,
        open: action.payload.open,
      };
    },
    // closeNotification(state, action) {
    //   state.notification.open = action.payload;
    // },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
