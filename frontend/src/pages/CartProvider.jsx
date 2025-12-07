// CartContext.js
import React, { createContext, useState, useEffect } from "react";
import {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../stores/useCartStore.js";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addItem = (product) => {
    const updatedCart = addToCart(product);
    setCart(updatedCart);
    toast.success(`${product.name} added to cart`)
  };

  const removeItem = (id) => {
    const updatedCart = removeFromCart(id);
    setCart(updatedCart);
  };

  const updateItemQuantity = (id, quantity) => {
      const updatedCart = updateQuantity(id, quantity);
      setCart(updatedCart);
  };

  const clearCartItems = () => {
    clearCart();
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItemQuantity, clearCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
