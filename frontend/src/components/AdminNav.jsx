import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  PlusCircle,
  Menu,
  Search,
  LogOut,
  X,
} from "lucide-react";
import clsx from "clsx";
import { useUserStore } from "../stores/useUserStore";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: Home, to: "/admin/dashboard" },
  { id: "products", label: "Products", icon: Package, to: "/admin/products" },
  { id: "orders", label: "Orders", icon: ShoppingCart, to: "/admin/orders" },
  { id: "categories", label: "Categories", icon: Users, to: "/admin/categories" },
  { id: "analytics", label: "Analytics", icon: BarChart3, to: "/admin/analytics" },
  { id: "settings", label: "Settings", icon: Settings, to: "/admin/settings" },
];

export default function AdminNav({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const {logout} = useUserStore();

  // const Title = NAV.find((n) => (n.to === location.pathname)?.label) || "Admin";
  const Title = NAV.find((n) => location.pathname.includes(n.to))?.label || "Admin";
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="flex flex-col text-center">
              <span className="text-xl lg:text-3xl font-primary">DFXN</span>
            </Link>
            <span className="hidden sm:inline-flex text-sm text-gray-500">
              / Admin / {Title}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100">
              <Search className="h-4 w-4" />
              <input
                placeholder="Search…"
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>
            <button className="p-2 rounded-xl hover:bg-gray-100" title="Create">
              <PlusCircle className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-xl hover:bg-gray-100"
              title="Log out"
              onClick={logout}
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-6">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        {/* Content */}
        <main>{children}</main>
      </div>

      {/* Mobile sidebar */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white border-r shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Menu</span>
              <button
                className="p-2 rounded-xl hover:bg-gray-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Sidebar onSelect={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ onSelect }) {
  return (
    <nav className="space-y-1">
      {NAV.map(({ id, label, icon: Icon, to }) => (
        <NavLink
          key={id}
          to={to}
          onClick={onSelect}
          className={({ isActive }) =>
            clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-sm transition",
              isActive
                ? "bg-gray-900 text-white shadow"
                : "hover:bg-gray-100 text-gray-700"
            )
          }
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
