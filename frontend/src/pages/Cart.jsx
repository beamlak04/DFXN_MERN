import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import Navbar from "../components/Navbar";
import { Minus, Plus, Trash2, ScanLine } from "lucide-react"; // icons for elegant controls

const Cart = () => {
  const { cart, removeItem, clearCartItems, updateItemQuantity } =
    useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar page="cart" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        {cart.length > 0 && (
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Your Cart
          </h2>
        )}

        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product._id}
                className="flex items-center bg-white shadow-md rounded-lg p-4"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md mr-6"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <p className="text-gray-800 mt-2 font-medium">
                    ETB {product.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateItemQuantity(product._id, product.quantity - 1)
                    }
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                    disabled={product.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 font-semibold text-sm shadow-inner">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateItemQuantity(product._id, product.quantity + 1)
                    }
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                    disabled={product.quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove Item */}
                <button
                  onClick={() => removeItem(product._id)}
                  className="ml-4 p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            {/* Cart Footer */}
            <div className="flex justify-between items-center mt-8 bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-bold text-gray-800">
                Total: ETB {total.toFixed(2)}
              </h3>
              <button
                onClick={clearCartItems}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-center">
            <p className="mb-6">Your cart is empty</p>
            <a
              href="/products"
              className="rounded bg-gray-800 hover:bg-gray-700 text-white py-2 px-5"
            >
              Shop now
            </a>
          </div>
        )}
        {cart.length > 0 && (
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white rounded py-2 w-full my-5 md:w-1/5 active:scale-95"
            onClick={() => {
              window.location = "/place-order";
            }}
            disabled={cart.length === 0}
          >
            <span className="flex gap-2 justify-center items-center">
              <ScanLine /> Checkout
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
