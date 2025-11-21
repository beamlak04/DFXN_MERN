import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useOrderStore } from "../stores/useOrderStore";
import { useNavigate } from "react-router-dom";

const orderStatus = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  canceled: "bg-red-100 text-red-700",
  pending: "bg-orange-100 text-orange-500",
  failed: "bg-gray-200 text-gray-600",
  "on hold": "bg-purple-100 text-purple-700",
  returned: "bg-pink-100 text-pink-500",
};

const Orders = () => {
  const { orders, loading, getAllOrders, deleteOrder } = useOrderStore();
  const [search, setSearch] = useState("");
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  // Filter orders by search query
  const filteredOrders = orders.filter((order) => {
    const query = search.toLowerCase();
    return (
      order._id.toLowerCase().includes(query) ||
      order.customer?.name?.toLowerCase().includes(query) ||
      order.orderStatus.toLowerCase().includes(query)
    );
  });

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // Shorten OrderId
  const getShortId = (id) => id.slice(0, 8) + "...";

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"orders"}>
        <div className="rounded border shadow-sm">
          <div className="px-4 py-3 border-b flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <h3 className="font-medium text-lg">Manage Orders</h3>
            {/* Search box */}
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-left">OrderId</th>
                  <th className="px-4 py-3 font-medium text-left">Customer</th>
                  <th className="px-4 py-3 font-medium text-left">Date</th>
                  <th className="px-4 py-3 font-medium text-left">Status</th>
                  <th className="px-4 py-3 font-medium text-left">Total</th>
                  <th className="px-4 py-3 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-slate-50 divide-y">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr
                      key={order._id}
                      onClick={() => navigate(`/admin/orders/${order._id}`)}
                      className="hover:bg-slate-100 hover:cursor-pointer"
                    >
                      {/* Shortened OrderId with toggle */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() =>
                            setExpandedOrderId(
                              expandedOrderId === order._id ? null : order._id
                            )
                          }
                          className="text-gray-800 font-mono text-xs underline"
                        >
                          {expandedOrderId === order._id
                            ? order._id
                            : getShortId(order._id)}
                        </button>
                      </td>

                      <td className="px-4 py-3">{order.customer?.name}</td>
                      <td className="px-4 py-3">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className={`px-4 py-3`}>
                        <span className={`p-1 rounded ${orderStatus[order.orderStatus]}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">ETB {order.totalAmount}</td>
                      <td className="px-4 py-3 text-center space-x-2">
                        <button
                          className="text-red-600 hover:text-red-900 text-xs"
                          onClick={() => {
                            deleteOrder(order._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No matching orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </AdminNav>
    </div>
  );
};

export default Orders;
