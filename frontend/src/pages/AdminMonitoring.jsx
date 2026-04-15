import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const AdminMonitoring = () => {
  const { monitoringData, monitoringLoading, fetchMonitoring } = useAdminStore();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState("all");
  const [actorRole, setActorRole] = useState("all");
  const [search, setSearch] = useState("");
  const [route, setRoute] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      fetchMonitoring({ page, limit, status, actorRole, search, route });
    }, 250);

    return () => window.clearTimeout(timer);
  }, [page, limit, status, actorRole, search, route, fetchMonitoring]);

  useEffect(() => {
    setPage(1);
  }, [limit, status, actorRole, search, route]);

  const pagination = monitoringData.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  const summaryCards = [
    { label: "Total Events", value: monitoringData.summary.totalEvents },
    { label: "Successful", value: monitoringData.summary.successEvents },
    { label: "Failures", value: monitoringData.summary.failureEvents },
    {
      label: "Filtered Events",
      value: monitoringData.filteredSummary.totalEvents,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="monitoring">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Monitoring</h1>
              <p className="text-sm text-gray-500">
                Review audit events, server health, and master/admin activity.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Showing {monitoringData.filteredSummary.totalEvents} events across {pagination.totalPages} pages
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {summaryCards.map((card) => (
              <MetricCard key={card.label} label={card.label} value={card.value} />
            ))}
          </div>

          <section className="bg-white rounded-xl shadow p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
              <FilterSelect label="Status" value={status} onChange={setStatus} options={[
                { label: "All statuses", value: "all" },
                { label: "Success", value: "success" },
                { label: "Failure", value: "failure" },
              ]} />
              <FilterSelect label="Actor" value={actorRole} onChange={setActorRole} options={[
                { label: "All actors", value: "all" },
                { label: "Admin", value: "admin" },
                { label: "Master", value: "master" },
              ]} />
              <FilterInput label="Search" value={search} onChange={setSearch} placeholder="Action, route, name..." />
              <FilterInput label="Route" value={route} onChange={setRoute} placeholder="/admin/products" />
              <FilterSelect label="Page Size" value={String(limit)} onChange={(value) => setLimit(Number(value))} options={[
                { label: "10 / page", value: "10" },
                { label: "25 / page", value: "25" },
                { label: "50 / page", value: "50" },
              ]} />
            </div>
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
            <section className="bg-white rounded-xl shadow overflow-hidden">
              <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between gap-3">
                <h2 className="font-semibold text-gray-800">Audit Events</h2>
                <span className="text-sm text-gray-500">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
              </div>

              {monitoringLoading ? (
                <div className="p-4 text-sm text-gray-500">Loading monitoring data...</div>
              ) : monitoringData.recentEvents.length > 0 ? (
                <div className="divide-y">
                  {monitoringData.recentEvents.map((event) => (
                    <article key={event._id} className="p-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-gray-900">{event.action}</h3>
                          <StatusPill status={event.status} code={event.statusCode} />
                        </div>
                        <p className="text-sm text-gray-600">
                          {event.actor.name}{event.actor.email ? ` · ${event.actor.email}` : ""}{event.actor.role ? ` · ${event.actor.role}` : ""}
                        </p>
                        <p className="text-sm text-gray-500">
                          {event.method} {event.route}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(event.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 md:text-right">
                        <p>{event.resource || "resource not set"}</p>
                        {event.metadata?.durationMs !== undefined && <p>{event.metadata.durationMs} ms</p>}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-sm text-gray-500">No events match the current filters.</div>
              )}

              <div className="px-4 py-3 border-t bg-gray-50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="px-3 py-2 rounded-md border disabled:opacity-50"
                  onClick={() => setPage((current) => Math.max(current - 1, 1))}
                  disabled={pagination.page <= 1 || monitoringLoading}
                >
                  Previous
                </button>
                <span className="text-sm text-gray-500">
                  {pagination.total === 0 ? "No records" : `${pagination.total} records`}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 rounded-md border disabled:opacity-50"
                  onClick={() => setPage((current) => Math.min(current + 1, pagination.totalPages))}
                  disabled={pagination.page >= pagination.totalPages || monitoringLoading}
                >
                  Next
                </button>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="bg-white rounded-xl shadow p-4">
                <h2 className="font-semibold text-gray-800 mb-3">Top Routes</h2>
                <div className="space-y-3">
                  {monitoringData.routeBreakdown.length > 0 ? (
                    monitoringData.routeBreakdown.map((item) => (
                      <div key={item.route} className="flex items-center justify-between gap-3 text-sm border-b pb-2">
                        <div>
                          <p className="font-medium text-gray-900">{item.route || "unknown"}</p>
                          <p className="text-gray-500">{item.failures} failures</p>
                        </div>
                        <span className="font-semibold text-gray-700">{item.count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No route activity for the current filter set.</p>
                  )}
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-4">
                <h2 className="font-semibold text-gray-800 mb-3">Top Actors</h2>
                <div className="space-y-3">
                  {monitoringData.actorBreakdown.length > 0 ? (
                    monitoringData.actorBreakdown.map((item) => (
                      <div key={`${item.name}-${item.email}`} className="flex items-center justify-between gap-3 text-sm border-b pb-2">
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-500">{item.email || "No email"}</p>
                        </div>
                        <span className="font-semibold text-gray-700">{item.count}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No actor breakdown available.</p>
                  )}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </AdminNav>
    </div>
  );
};

const MetricCard = ({ label, value }) => (
  <div className="bg-white rounded-xl shadow p-5">
    <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
    <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
  </div>
);

const FilterSelect = ({ label, value, onChange, options }) => (
  <label className="block text-sm">
    <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full border rounded-md px-3 py-2 bg-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

const FilterInput = ({ label, value, onChange, placeholder }) => (
  <label className="block text-sm">
    <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</span>
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-md px-3 py-2"
    />
  </label>
);

const StatusPill = ({ status, code }) => (
  <span
    className={`text-xs px-2 py-1 rounded-full ${
      status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
    }`}
  >
    {status} {code}
  </span>
);

export default AdminMonitoring;
