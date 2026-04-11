import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import LoadingSpinner from "./components/LoadingSpinner";
import { CartProvider } from "./pages/CartProvider";
import Analytics from "./pages/Analytics";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import EditCategory from "./pages/EditCategory";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import { useUserStore } from "./stores/useUserStore";
import AdminCategory from "./pages/AdminCategory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSettings from "./pages/AdminSettings";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const admin = user?.role === "admin";
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return <LoadingSpinner />;
  }
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/signup" element={<Navigate to="/admin/login" replace />} />
        <Route path="/signUp" element={<Navigate to="/admin/login" replace />} />
        <Route
          path="/admin/login"
          element={!admin ? <LogInPage /> : <Navigate to="/admin/dashboard" replace />}
        />
        <Route
          path="/admin"
          element={!admin ? <Navigate to="/admin/login" replace /> : <Navigate to="/admin/dashboard" replace />}
        />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route
          path="/admin/dashboard"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminDashboard />}
        />
        <Route
          path="/admin/products/:id/edit"
          element={!admin ? <Navigate to="/admin/login" /> : <EditProductPage />}
        />
        <Route
          path="/admin/products"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminProducts />}
        />
        <Route
          path="/admin/analytics"
          element={!admin ? <Navigate to="/admin/login" /> : <Analytics />}
        />
        <Route
          path="/admin/categories"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminCategory />}
        />
        <Route
          path="/admin/categories/:id/edit"
          element={!admin ? <Navigate to="/admin/login" /> : <EditCategory />}
        />
        <Route
          path="/admin/settings"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminSettings />}
        />
        <Route
          path="/admin/orders"
          element={!admin ? <Navigate to="/admin/login" /> : <Orders />}
        />
        <Route
          path="/admin/orders/:id"
          element={!admin ? <Navigate to="/admin/login" /> : <Order />}
        />
      </Routes>
      <Toaster />
    </CartProvider>
  );
}

export default App;
