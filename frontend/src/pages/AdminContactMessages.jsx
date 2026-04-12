import React, { useEffect, useMemo, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useAdminStore } from "../stores/useAdminStore";

const STATUS_OPTIONS = ["all", "new", "reviewed", "closed"];

const badgeClassByStatus = {
  new: "bg-blue-100 text-blue-700",
  reviewed: "bg-yellow-100 text-yellow-700",
  closed: "bg-green-100 text-green-700",
};

const formatDate = (value) => {
  if (!value) {
    return "-";
  }
  return new Date(value).toLocaleString();
};

const AdminContactMessages = () => {
  const {
    fetchContactMessages,
    contactMessages,
    contactMessagesLoading,
    contactMessagesPagination,
    updateContactMessageStatus,
  } = useAdminStore();

  const [statusFilter, setStatusFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchInput.trim());
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    fetchContactMessages({
      page,
      limit: 20,
      status: statusFilter,
      search: searchTerm,
    });
  }, [fetchContactMessages, page, statusFilter, searchTerm]);

  const hasPagination = useMemo(
    () => Number(contactMessagesPagination.totalPages || 1) > 1,
    [contactMessagesPagination.totalPages]
  );

  const handleStatusUpdate = async (messageId, status) => {
    const success = await updateContactMessageStatus(messageId, status);
    if (success && statusFilter !== "all") {
      fetchContactMessages({
        page,
        limit: 20,
        status: statusFilter,
        search: searchTerm,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav activePage="contacts">
        <div className="rounded border shadow-sm bg-white">
          <div className="px-4 py-3 border-b flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <h2 className="text-lg font-semibold">Customer Complaints</h2>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search by name, email, subject"
                className="px-3 py-2 border rounded-lg text-sm w-full sm:w-72"
              />
              <select
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value);
                  setPage(1);
                }}
                className="px-3 py-2 border rounded-lg text-sm"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status === "all" ? "All statuses" : status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Sender</th>
                  <th className="px-4 py-3 text-left">Subject</th>
                  <th className="px-4 py-3 text-left">Received</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {contactMessagesLoading ? (
                  <tr>
                    <td className="px-4 py-6 text-gray-500" colSpan={5}>
                      Loading contact messages...
                    </td>
                  </tr>
                ) : contactMessages.length ? (
                  contactMessages.map((message) => (
                    <React.Fragment key={message._id}>
                      <tr className="hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <p className="font-medium">{message.name}</p>
                          <p className="text-xs text-gray-600">{message.email}</p>
                        </td>
                        <td className="px-4 py-3">{message.subject || "General inquiry"}</td>
                        <td className="px-4 py-3 text-xs text-gray-600">{formatDate(message.createdAt)}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${badgeClassByStatus[message.status] || "bg-gray-100 text-gray-700"}`}
                          >
                            {message.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 space-x-2">
                          <button
                            className="text-xs text-gray-700 underline"
                            onClick={() =>
                              setExpandedId((prev) => (prev === message._id ? "" : message._id))
                            }
                          >
                            {expandedId === message._id ? "Hide" : "View"}
                          </button>
                          {message.status !== "reviewed" && (
                            <button
                              className="text-xs text-yellow-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "reviewed")}
                            >
                              Mark Reviewed
                            </button>
                          )}
                          {message.status !== "closed" && (
                            <button
                              className="text-xs text-green-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "closed")}
                            >
                              Close
                            </button>
                          )}
                          {message.status !== "new" && (
                            <button
                              className="text-xs text-blue-700 underline"
                              onClick={() => handleStatusUpdate(message._id, "new")}
                            >
                              Reopen
                            </button>
                          )}
                        </td>
                      </tr>
                      {expandedId === message._id && (
                        <tr className="bg-slate-50">
                          <td className="px-4 py-3" colSpan={5}>
                            <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                            <p className="text-xs text-gray-500 mt-2">
                              Source: {message.sourcePage || "home"}
                            </p>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-6 text-gray-500" colSpan={5}>
                      No contact messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {hasPagination && (
            <div className="px-4 py-3 border-t flex items-center justify-between">
              <p className="text-xs text-gray-600">
                Page {contactMessagesPagination.page} of {contactMessagesPagination.totalPages}
              </p>
              <div className="space-x-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page <= 1}
                  className="px-3 py-1 text-xs border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setPage((prev) =>
                      Math.min(prev + 1, Number(contactMessagesPagination.totalPages || 1))
                    )
                  }
                  disabled={page >= Number(contactMessagesPagination.totalPages || 1)}
                  className="px-3 py-1 text-xs border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </AdminNav>
    </div>
  );
};

export default AdminContactMessages;