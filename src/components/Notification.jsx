import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { uiActions } from "../store/uiSlice";
const Notification = () => {
  const notification = useSelector((store) => store.ui.notification);
  const dispatch = useDispatch();
  const handleEventListener = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <>
      {console.log(notification.open)}
      {notification.open && (
        <Alert severity={notification.type} onClose={handleEventListener}>
          {notification.text}
        </Alert>
      )}
    </>
  );
};

export default Notification;
