import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
export const fetchData = () => {
  return async (dispatch) => {
    const handleFatch = async () => {
      const response = await fetch(
        "https://redux-560ff-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await handleFatch();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
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
    }
  };
};

export const sendDataToFirebase = (cart) => {
  return async (dispatch) => {
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
    try {
      await sendRequest();
    } catch (error) {
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
    }
  };
};
