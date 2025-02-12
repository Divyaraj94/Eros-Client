// src/components/CartSidebar.jsx
import React from "react";
import "../style/Shop.css";

const CartSidebar = ({
  cartItems,
  onIncrease,
  onDecrease,
  deliveryOption,
  setDeliveryOption,
}) => {
  // const subtotal = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  const subtotal = (cartItems || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <div className="cart-toggle">
          <button
            className={deliveryOption === "delivery" ? "active" : ""}
            onClick={() => setDeliveryOption("delivery")}
          >
            <span role="img" aria-label="delivery">
              🚚
            </span>{" "}
            Delivery
          </button>
          <button
            className={deliveryOption === "pickup" ? "active" : ""}
            onClick={() => setDeliveryOption("pickup")}
          >
            <span role="img" aria-label="pickup">
              🏠
            </span>{" "}
            Pick-up
          </button>
        </div>
      </div>

      <div className="cart-items">
        {(cartItems || []).map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name}
              {item.selectedWeight ? ` (${item.selectedWeight})` : ""}
            </p>
            <p>
              ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
            </p>
            <div className="quantity-controls">
              <button onClick={() => onDecrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <hr />
      <p className="subtotal">Subtotal: ₹{subtotal}</p>
      <button className="checkout-button">Checkout ₹{subtotal}</button>
    </div>
  );
};

export default CartSidebar;
