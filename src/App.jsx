import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Product from "./components/Product";
import Notification from "./components/Notification";
import { uiActions } from "./store/uiSlice";
// import { sendDataToFirebase } from "./store/cartSlice";
import { fetchData, sendDataToFirebase } from "./store/cartActions";
let firstRender = true;
const App = () => {
  const cart = useSelector((store) => store.cart);
  const notification = useSelector((store) => store.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    dispatch(sendDataToFirebase(cart));
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
