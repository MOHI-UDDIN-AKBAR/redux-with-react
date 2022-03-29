import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Product from "./components/Product";
import Notification from "./components/Notification";
import { uiActions } from "./store/uiSlice";
let firstRender = true;
const App = () => {
  const cart = useSelector((store) => store.cart);
  const notification = useSelector((store) => store.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    const sendRequest = async () => {
      //when we are sending request
      dispatch(
        uiActions.showNotification({
          type: "warning",
          text: "request is sending",
          open: true,
        })
      );
      setTimeout(() => {
        dispatch(uiActions.showNotification({ open: false }));
      }, 6000);
      const response = await fetch(
        "https://redux-560ff-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      //when request sended already
      if (data) {
        dispatch(
          uiActions.showNotification({
            type: "success",
            text: "request has sended to database",
            open: true,
          })
        );
        setTimeout(() => {
          dispatch(uiActions.showNotification({ open: false }));
        }, 6000);
      }
    };
    sendRequest().catch((error) => {
      dispatch(
        uiActions.showNotification({
          type: "error",
          text: error,
          open: true,
        })
      );
      setTimeout(() => {
        dispatch(uiActions.showNotification({ open: false }));
      }, 6000);
    });
  }, [cart]);
  return (
    <>
      {notification && <Notification />}
      {/* <LoginForm /> */}
      <Product />
    </>
  );
};
export default App;
