import React from "react";
import { data } from "../data/data";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
const Product = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  const showCartItems = useSelector((store) => store.cart.showCartItems);
  const dispatch = useDispatch();
  const handleEventListener = (id, name, image, price) => {
    dispatch(cartActions.addItem({ id, name, image, price }));
  };
  const showCart = () => {
    dispatch(cartActions.showItem());
  };

  return (
    <>
      <button type="button" className="cartButton" onClick={showCart}>
        {totalQuantity != 0 ? totalQuantity : 0} Items
      </button>
      <div className="productContainer">
        {data?.map((product, i) => {
          const { name, image, price } = product;
          return (
            <div className="product" key={i}>
              <img src={image} alt="image" />
              <span>{name}</span>
              <span>$ {price}</span>
              <button
                type="button"
                onClick={() => handleEventListener(i, name, image, price)}
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
      {showCartItems && <CartItems />}
    </>
  );
};

export default Product;
