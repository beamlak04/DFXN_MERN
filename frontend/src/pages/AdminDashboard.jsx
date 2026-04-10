import React, { useEffect } from "react";
import AdminNav from "../components/AdminNav";
import { useUserStore } from "../stores/useUserStore";
import { useAdminStore } from "../stores/useAdminStore";

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

const AdminDashboard = () => {
  const { user } = useUserStore();
  const { fetchDashboard, dashboardData, dashboardLoading } = useAdminStore();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const { summary, topSelling, recentOrders } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar & Top Nav */}
      <AdminNav activePage="dashboard">
        {/* Dashboard Content */}
        <div className="p-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="bg-white rounded-full shadow px-4 py-2">
              <span className="text-gray-600">👋 Hello, </span>
              <span className="font-semibold text-gray-800">{user?.name}</span>
            </div>
          </div>

          {dashboardLoading ? (
            <p className="text-gray-500">Loading dashboard data...</p>
          ) : (
            <>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-8">
                <Card title="Total Products" value={summary.totalProducts} />
                <Card title="Total Orders" value={summary.totalOrders} />
                <Card title="Orders Today" value={summary.ordersToday} />
                <Card title="Revenue (ETB)" value={summary.totalRevenue} isCurrency />
                <Card title="Customers" value={summary.totalCustomers} />
              </div>

              {/* Main Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Recent Orders
                  </h2>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-500 border-b">
                        <th className="py-2">Customer</th>
                        <th className="py-2">Total</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders?.length ? (
                        recentOrders.map((order) => (
                          <tr key={order._id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{order?.customer?.name || "N/A"}</td>
                            <td className="py-2">ETB {Number(order?.totalAmount || 0).toFixed(2)}</td>
                            <td className="py-2">
                              <span
                                className={`p-1 rounded ${
                                  orderStatus[order.orderStatus] || "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {order.orderStatus}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td className="py-3 text-gray-500" colSpan={3}>
                            No recent orders available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Top Selling Products */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Top Selling Products
                  </h2>
                  <ul className="space-y-3">
                    {topSelling?.length ? (
                      topSelling.map((item) => (
                        <li key={item._id} className="flex justify-between items-center border-b pb-2 gap-3">
                          <img
                            src={item?.productInfo?.image}
                            alt={item?.productInfo?.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <span className="flex-1 text-sm">{item?.productInfo?.name}</span>
                          <span className="font-semibold text-sm">{item.totalSold} sold</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500">No top selling products yet.</li>
                    )}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

/* Small reusable summary card */
const Card = ({ title, value, isCurrency = false }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2">
      {isCurrency ? Number(value || 0).toFixed(2) : value}
    </p>
  </div>
);

export default AdminDashboard;
