import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "./CartProvider";
import { useOrderStore } from "../stores/useOrderStore";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const {cart, clearCartItems} = useContext(CartContext);
  const { placeOrder, loading } = useOrderStore();
  const [customerDetail, setCustomerDetail] = useState({
    name: "",
    phoneNumber: "",
    email: "",    
    address: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (number) => {
    // Regex for a 10-digit number, optionally starting with '09'
    const phoneRegex = /^(09|\+2519|07|\+2517)\d{8}$/;
    if (!phoneRegex.test(number)) {
      setPhoneError(
        "Please enter a valid 10-digit phone number (e.g., 09xxxxxxxx or 07xxxxxxxx)"
      );
      return false;
    }
    return true;
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(cart)
    // Handle form submission logic here
    if (validatePhoneNumber(phoneNumber)) {
      const orderData = { customer: customerDetail, cart: cart };
      if(cart.length > 0){
        console.log(orderData.customer)
        await placeOrder(orderData);
        clearCartItems();
      }else{
        toast.error("cart is empty")
      }
      
      // Proceed with form submission logic (e.g., API call)
    } else {
      console.log("Form submission failed due to validation errors.");
    }
    console.log();
  };

  return (
    <div className="bg-gray-50 ">
      <Navbar page="place-order" />
      <div className="w-full max-w-md mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Place Your Order 🛒
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({ ...customerDetail, name: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({ ...customerDetail, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNo"
              required
              placeholder="e.g., 0911111111"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setCustomerDetail({...customerDetail, phoneNumber: e.target.value});
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition duration-150 ease-in-out"
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              required
              placeholder="Your full address"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none transition duration-150 ease-in-out"
              onChange={(e) => {
                setCustomerDetail({
                  ...customerDetail,
                  address: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition duration-200 ease-in-out focus:outline-none"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin mx-auto" />
              </>
            ) : (
              <>Place Order</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
