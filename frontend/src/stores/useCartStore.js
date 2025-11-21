// cartUtils.js

import toast from "react-hot-toast";

const CART_KEY = "cartItems";

// Get cart from local storage
export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

// Save cart to local storage
export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product) => {
  let cart = getCart();
  const existingItem = cart.find((item) => item._id === product._id);

  if (existingItem && existingItem.quantity < product.stock) {
    existingItem.quantity += 1;
    saveCart(cart);

  } else if (product.stock > 0) {
    cart.push({ ...product, quantity: 1 });
    saveCart(cart);
  } else {
    toast.error("out of stock");
  }
  return cart
};

// Remove item from cart
export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter((item) => item._id !== id);
  saveCart(cart);
  return cart;
};

// Update item quantity
export const updateQuantity = (id, quantity) => {
  let cart = getCart();
  const item = cart.find((item) => item._id === id);
  if (item) {
    item.quantity = quantity;
  }
  saveCart(cart);
  return cart;
};

// Clear cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
