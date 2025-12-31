import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "./styles.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState<string[]>(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: string) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart");
  };

  const showTotalItems = () => {
    toast.success(`Total items in cart: ${cart.length}`);
  };

  return (
    <div className="cart-card">
      <h2 className="header">Shopping Cart</h2>

      <div className="button-cards">
        <button className="set-button" onClick={() => addToCart("Apple")}>
          Add Apple
        </button>
        <button className="set-button" onClick={() => addToCart("Banana")}>
          Add Banana
        </button>
        <button className="set-button" onClick={() => addToCart("Orange")}>
          Add Orange
        </button>
        <button className="set-button" onClick={showTotalItems}>
          Show Total Items
        </button>
      </div>

      <h3 className="cart-items">Cart Items</h3>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="list">
              {item}{" "}
              <button onClick={() => removeFromCart(index)} className="remove">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button onClick={clearCart} className="clear">
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
