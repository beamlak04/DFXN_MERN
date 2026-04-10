import React, { useEffect, useMemo, useState } from "react";
import AdminNav from "../components/AdminNav";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useAdminStore } from "../stores/useAdminStore";

const STATUS_COLOR_MAP = {
  processing: "#F59E0B",
  "in progress": "#2563EB",
  pending: "#8B5CF6",
  shipped: "#0EA5E9",
  delivered: "#16A34A",
  canceled: "#DC2626",
  failed: "#7F1D1D",
  returned: "#9333EA",
  "on hold": "#F97316",
};

const STATUS_FALLBACK_COLORS = ["#111827", "#1F2937", "#374151", "#4B5563", "#6B7280"];

const getStatusColor = (status, index) => {
  const normalized = (status || "").toLowerCase();
  return STATUS_COLOR_MAP[normalized] || STATUS_FALLBACK_COLORS[index % STATUS_FALLBACK_COLORS.length];
};

const Analytics = () => {
  const [rangeDays, setRangeDays] = useState(30);
  const { analyticsData, analyticsLoading, fetchAnalytics } = useAdminStore();

  useEffect(() => {
    fetchAnalytics(rangeDays);
  }, [fetchAnalytics, rangeDays]);

  const totals = useMemo(() => {
    const totalRevenue = analyticsData.salesTrend.reduce(
      (sum, item) => sum + (item.revenue || 0),
      0
    );
    const totalOrders = analyticsData.salesTrend.reduce(
      (sum, item) => sum + (item.orders || 0),
      0
    );

    return {
      totalRevenue,
      totalOrders,
    };
  }, [analyticsData]);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage={"analytics"}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
            <select
              value={rangeDays}
              onChange={(e) => setRangeDays(Number(e.target.value))}
              className="border rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
              <option value={90}>Last 90 days</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Metric title="Revenue (Paid Orders)" value={`ETB ${totals.totalRevenue.toFixed(2)}`} />
            <Metric title="Orders In Range" value={totals.totalOrders} />
          </div>

          {analyticsLoading ? (
            <p className="text-gray-500">Loading analytics...</p>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow p-4 h-80">
                <h2 className="font-semibold mb-4">Revenue Trend</h2>
                <ResponsiveContainer width="100%" height="90%">
                  <LineChart data={analyticsData.salesTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" hide={analyticsData.salesTrend.length > 12} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#111827" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-4 h-80">
                  <h2 className="font-semibold mb-4">Order Status Distribution</h2>
                  <ResponsiveContainer width="100%" height="90%">
                    <PieChart>
                      <Pie
                        data={analyticsData.orderStatus}
                        dataKey="count"
                        nameKey="status"
                        outerRadius={90}
                        label
                      >
                        {analyticsData.orderStatus.map((entry, index) => (
                          <Cell
                            key={entry.status}
                            fill={getStatusColor(entry.status, index)}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl shadow p-4 h-80">
                  <h2 className="font-semibold mb-4">Payment Methods</h2>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={analyticsData.paymentMethods}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="method" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#1F2937" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-4 h-96">
                <h2 className="font-semibold mb-4">Category Performance</h2>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart data={analyticsData.categoryPerformance} layout="vertical" margin={{ left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="category" width={120} />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#111827" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

const Metric = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default Analytics;
