import React, { useEffect } from "react";
import AdminNav from "../components/AdminNav";
import { useCategoryStore } from "../stores/useCategoryStore";
import { useUserStore } from "../stores/useUserStore";

const AdminDashboard = () => {
  const { getAllCategories } = useCategoryStore();
  const { user } = useUserStore();

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar & Top Nav */}
      <AdminNav activePage="dashboard" >

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
          <Card title="Total Products" value="1,245" />
          <Card title="Orders Today" value="128" />
          <Card title="Revenue (ETB)" value="45,600" />
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
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">#1021</td>
                  <td className="py-2">Abel T.</td>
                  <td className="py-2">ETB 2,300</td>
                  <td className="py-2 text-green-600 font-semibold">
                    Completed
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-2">#1022</td>
                  <td className="py-2">Mimi L.</td>
                  <td className="py-2">ETB 1,100</td>
                  <td className="py-2 text-yellow-600 font-semibold">
                    Pending
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2">#1023</td>
                  <td className="py-2">Sam K.</td>
                  <td className="py-2">ETB 3,000</td>
                  <td className="py-2 text-red-600 font-semibold">
                    Cancelled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Top Selling Products */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Top Selling Shoes
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-b pb-2">
                <span>Nike Air Zoom</span>
                <span className="font-semibold">320 sold</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>Adidas Ultraboost</span>
                <span className="font-semibold">280 sold</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Puma Suede Classic</span>
                <span className="font-semibold">190 sold</span>
              </li>
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
 