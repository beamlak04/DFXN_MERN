import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";
import AdminNav from "../components/AdminNav";
import { ArrowLeft, Edit, Save, RotateCcw, Trash2 } from "lucide-react";

const orderStatus = [
  "processing",
  "shipped",
  "delivered",
  "canceled",
  "pending",
  "failed",
  "on hold",
  "returned",
];
const paymentStatus = ["pending", "paid", "failed"];

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { order, getOrderById, updateOrder } = useOrderStore();

  const [isEditing, setIsEditing] = useState(false);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    getOrderById(id);
  }, [getOrderById, id]);

  useEffect(() => {
    if (order) {
      const formattedOrder = {
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        orderStatus: order.orderStatus,
        totalAmount: order.totalAmount,
        customer: {
          name: order.customer.name,
          phoneNumber: order.customer.phoneNumber,
          email: order.customer.email,
          address: order.customer.address,
        },
        products: order.products,
      };
      setOrderData(formattedOrder);
    }
  }, [order]);

  if (!orderData) {
    return <p className="text-center py-10 text-gray-500">Loading order...</p>;
  }

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      customer: {
        ...orderData.customer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSelectChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteProduct = (index) => {
    const deletedProduct = orderData.products[index];
    orderData.totalAmount = orderData.totalAmount - (deletedProduct.price * deletedProduct.quantity);
    const updatedProducts = orderData.products.filter((_, i) => i !== index);
    setOrderData({
      ...orderData,
      products: updatedProducts,
    });    
  };

  const handleSave = () => {
    updateOrder(id, orderData);
    setIsEditing(false);
  };

  const handleReset = () => {
    setOrderData(order);
    setIsEditing(false);
  };

  return (
    <AdminNav page="orders">
      <div className="space-y-6">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-gray-200 hover:bg-gray-100 p-2 px-3 flex items-center gap-2"
          >
            <ArrowLeft className="w-5" />
            Go back
          </button>
          <h2 className="mx-auto font-semibold text-xl">Order Details</h2>
          <button
            onClick={() => {
              if (!isEditing) setIsEditing(true);
            }}
            className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition ml-auto"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Customer Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={orderData.customer.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={orderData.customer.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={orderData.customer.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={orderData.customer.address}
                onChange={handleChange}
                disabled={!isEditing}
                className={`p-2 px-3 w-full border rounded-lg ${
                  isEditing ? "bg-white" : "bg-gray-200"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Order Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="paymentStatus" className="block font-semibold">
                Payment status
              </label>
              <select
                name="paymentStatus"
                value={orderData.paymentStatus}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                {paymentStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="orderStatus" className="block font-semibold">
                Order status
              </label>
              <select
                name="orderStatus"
                value={orderData.orderStatus}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                {orderStatus.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={orderData.paymentMethod}
                onChange={handleSelectChange}
                disabled={!isEditing}
                className="p-2 px-3 w-full rounded-lg"
              >
                <option value="Telebirr">Telebirr</option>
                <option value="COD">Cash on Delivery</option>
              </select>
            </div>
          </div>
        </div>

        <div className="rounded bg-gray-100 p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Ordered Products</h3>
          <div className="hidden sm:flex justify-between font-semibold">
            <div className="w-2/3">Product</div>
            <div className="w-1/6 text-right">Quantity</div>
            <div className="w-1/6 text-right">Price</div>
            {isEditing && <div className="w-1/6 text-center">Action</div>}
          </div>
          <hr className="my-2 hidden sm:block" />
          {orderData.products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-2 gap-3 sm:gap-0"
            >
              <div className="flex items-center space-x-4 w-full sm:w-2/3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.product.name}</span>
              </div>
              <div className="flex justify-between sm:block w-full sm:w-1/6 text-right">
                <span className="sm:hidden font-semibold">Qty: </span>
                {item.quantity}
              </div>
              <div className="flex justify-between sm:block w-full sm:w-1/6 text-right">
                <span className="sm:hidden font-semibold">Price: </span>
                {item.price}
              </div>
              {isEditing && (
                <div className="flex justify-end sm:justify-center w-full sm:w-1/6">
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold">
            <div>Total</div>
            <div>{orderData.totalAmount}</div> 
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        )}
      </div>
    </AdminNav>
  );
};

export default Order;
