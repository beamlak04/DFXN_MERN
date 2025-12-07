import { Route, Routes, Navigate } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import CategoryPage from "./pages/CategoryPage";
import EditProductPage from "./pages/EditProductPage";
import Analytics from "./pages/Analytics";
import AdminProducts from "./pages/AdminProducts";

import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import AdminCategory from "./pages/AdminCategory";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSettings from "./pages/AdminSettings";
import Orders from "./pages/Orders";
import EditCategory from "./pages/EditCategory";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";


import { CartProvider } from "./pages/CartProvider";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";


function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const admin = user?.role == "admin";
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
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route
          path="/signUp"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/login"
          element={!user ? <LogInPage /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={!admin ? <Navigate to="/admin/login" /> : <AdminDashboard/>}
        />
        <Route path="/category/:category" element={<CategoryPage/>} />
        {/* <Route path="/admin/" /> */}
        <Route path="/admin/dashboard" element={!admin ? <Navigate to="/admin/login"/> : <AdminDashboard/>} />
        <Route path="/admin/products/edit/:id" element = {!admin ? <LogInPage/> : <EditProductPage />} />
        <Route path="/admin/products" element={!admin ? <Navigate to="/admin/login" /> : <AdminProducts/>}/>
        <Route path="/admin/analytics" element={!admin ? <Navigate to="/admin/login" /> : <Analytics/>}/>
        <Route path="/admin/categories" element={!admin ? <Navigate to="/admin/login" /> : <AdminCategory/>} />
        <Route path="/admin/categories/edit/:id" element={!admin ? <Navigate to="/admin/login" /> : <EditCategory/>} />
        <Route path="/admin/settings" element={!admin ? <Navigate to="/admin/login" /> : <AdminSettings/>} />
        <Route path="/admin/orders" element={!admin ? <Navigate to="/admin/login" /> : <Orders/>} />
        <Route path="/admin/orders/:id" element={!admin ? <Navigate to="/admin/login" /> : <Order/>} />
      </Routes>
      <Toaster />
    </CartProvider>
  );
}

export default App;
