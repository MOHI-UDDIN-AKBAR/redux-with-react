import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const increment = (id) => {
    dispatch(cartActions.increment(id));
  };
  const decrement = (id) => {
    dispatch(cartActions.decrement(id));
  };
  const remove = (id) => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <>
      {cartItems?.map((cartItem, i) => {
        const { image, name, totalPrice, price, quantity, id } = cartItem;
        return (
          <div className="cartItems" key={i}>
            <img src={image} alt="image" />
            <span>{name}</span>
            <span>$ {totalPrice}</span>
            <span>{quantity}</span>
            <button type="button" onClick={() => increment(id)}>
              +
            </button>
            <button type="button" onClick={() => decrement(id)}>
              -
            </button>
            <button type="button" onClick={() => remove(id)}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
