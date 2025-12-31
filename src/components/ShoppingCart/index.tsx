import { useState, useEffect } from "react";

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
  return (
    <div className="cart-card">
      <h2 className="header">Shopping Cart</h2>
      <div className="button-card">
        <button className="set-button" onClick={() => addToCart("Apple")}>
          Add Apple
        </button>
        <button className="set-button" onClick={() => addToCart("Banana")}>
          Add Banana
        </button>
        <button className="set-button" onClick={() => addToCart("Orange")}>
          Add Orange
        </button>
      </div>

      <h3 className="cart-items">Cart Items</h3>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
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
