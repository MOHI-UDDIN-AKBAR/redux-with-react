import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    showCartItems: false,
    totalPrice: "",
    totalQuantity: "",
  },
  reducers: {
    addItem(state, action) {
      //   const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        // existingItem.price = existingItem.quantity * action.payload.price;
        existingItem.totalPrice += action.payload.price;
      } else {
        // console.log(action.payload);
        state.cartItems.push({
          name: action.payload.name,
          id: action.payload.id,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.totalQuantity = state.cartItems.length;
    },
    increment(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id == action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },
    decrement(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id == action.payload
      );
      if (existingItem.quantity == 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        existingItem.quantity--;
        state.totalQuantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    showItem(state, action) {
      state.showCartItems = !state.showCartItems;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
