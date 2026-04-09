import React, { useEffect } from "react";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { useUserStore } from "../stores/useUserStore";
import { useProductStore } from "../stores/useProductStore";
import { useOrderStore } from "../stores/useOrderStore";
import { adminInfo } from "../stores/useAdminStore";

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
  const { getAllCategories } = useCategoryStore();
  const { user } = useUserStore();
  const { getData, data } = adminInfo();

  const { products, fetchAllProducts } = useProductStore();
  const { orders, getAllOrders } = useOrderStore();

  useEffect(() => {
    getAllCategories();
    fetchAllProducts();
    getAllOrders();
    getData();
  }, [getAllCategories]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const todayOrders = orders.filter((order) => {
    const orderDate = new Date(order?.createdAt);
    return orderDate >= today && orderDate < tomorrow;
  });
  const revOrders = orders.filter((order) => {
    return (
      order?.paymentStatus === "paid" && order?.orderStatus === "delivered"
    );
  });

  let revenue = 0;
  revOrders.map((order) => {
    revenue += order.totalAmount;
  });

  function getStartOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    const diff = (day === 0 ? -6 : 1) - day; // shift so week starts Monday
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  const startOfWeek = getStartOfWeek(new Date());

  const recentOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return orderDate >= startOfWeek;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar & Top Nav */}
      <AdminNav activePage="dashboard">
        {/* Dashboard Content */}
        <div className="p-6 lg:ml-64">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <div className="bg-white rounded-full shadow px-4 py-2">
              <span className="text-gray-600">👋 Hello, </span>
              <span className="font-semibold text-gray-800">{user?.name}</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <Card title="Total Products" value={products.length} />
            <Card title="Orders Today" value={todayOrders.length} />
            <Card title="Revenue (ETB)" value={revenue} />
            <Card title="Customers" value="5,430" />
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
                  {recentOrders?.map((order) => (
                    <tr key={order._id} className="border-b hover:bg-gray-50">
                      <td className="py-2">{order?.customer.name}</td>
                      <td className="py-2">{order?.totalAmount}</td>
                      <td className="py-2">
                        <span
                          className={`p-1 rounded ${
                            orderStatus[order.orderStatus]
                          }`}
                        >
                          {order.orderStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Top Selling Shoes
              </h2>
              <ul className="space-y-3">
                {data.topSelling?.map((item) => (
                  <li key={item._id} className="flex justify-between items-center border-b pb-2">
                    <img src={item.productInfo.image} alt="" width={50} height={50}/>
                    <span>{item.productInfo.name}</span>
                    <span className="font-semibold">{item.totalSold} sold</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AdminNav>
    </div>
  );
};

/* Small reusable summary card */
const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

export default AdminDashboard;
