"use client";
import React, { useContext, useState } from "react";
import {
  ShoppingCart,
  LogOut,
  Lock,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useUserStore } from "../stores/useUserStore";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../pages/CartProvider";



const Navbar = ({page}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useUserStore();
  const admin = user?.role === "admin";
  const {cart} = useContext(CartContext);

  const NavLinks = () => (
    <>
      <Link to="/" className={page === "home"? "font-semibold text-gray-800" : "text-gray-700 hover:text-gray-600"}>
        Home
      </Link>
      <HashLink smooth to="#About" className="text-gray-800 hover:text-gray-600">
        About
      </HashLink>
      <HashLink smooth to="#Contact" className="text-gray-800 hover:text-gray-600">
        Contact
      </HashLink>
      <Link to="/products" className={page === "products"? "font-semibold text-gray-800" : "text-gray-700 hover:text-gray-600"}>Products</Link>
    </>
  );

  return (
    <header>
      {/* Desktop Navbar */}
      <nav className="flex justify-between pt-5 px-5 xs:px-10 sm:px-14 lg:px-20 items-center xl:px-32 xxl:px-40">
        {/* Logo */}
        <Link to="/" className="flex flex-col text-center md:px-10">
          <span className="text-3xl lg:text-5xl font-primary">DFXN</span>
          <span className="text-sm lg:text-sm font-primary">DEFIANT EXILE</span>
        </Link>

        {/* Right Side */}
        <div className="flex gap-3 items-center">
          {/* Main Links */}
          <div className="hidden md:flex gap-4 items-center">
            <ul className="md:flex gap-5">
              <NavLinks />
            </ul>
            {admin && (
              <Link
                to="/admin/dashboard"
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-700 text-white bg-gray-800 p-2 rounded-md"
              >
                <Lock size={15} />
                <span className="md:text-sm">Dashboard</span>
              </Link>
            )}
          </div>

          {/* Auth / Logout */}
          {admin && (
            <button
              onClick={logout}
              className="hidden md:flex gap-2 items-center active:scale-95 hover:bg-gray-800 bg-slate-600 text-white p-2 rounded-md"
            >
              <LogOut size={15} />
              <span className="text-sm">Log out</span>
            </button>
          )}

          {/* Cart */}

          <Link to="/cart" className="relative flex gap-2 items-center active:scale-95 rounded-md hover:text-gray-800">
            <ShoppingCart />
            {cart && <span className="absolute -top-3 -left-2 bg-gray-800 text-white rounded-full py-0.5 px-2 text-xs">
              {cart.length}
            </span>}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 bg-white transition-all z-50 w-full overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-3 px-5 sm:p-4 sm:px-5">
            <Link to="/" className="flex flex-col text-center md:px-5">
              <span className="text-3xl font-primary">DFXN</span>
              <span className="text-sm font-primary">DEFIANT EXILE</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XIcon />
            </button>
          </div>

          <hr className="w-96 mx-auto my-3" />

          {/* Links */}
          <div className="flex flex-col gap-4 items-center mt-10">
            <NavLinks />
            {admin && (
              <Link
                to="/admin/dashboard"
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-700 text-white bg-gray-800 p-2 rounded-md"
              >
                <Lock size={15} />
                <span>Dashboard</span>
              </Link>
            )}

            {admin && (
              <button
                onClick={logout}
                className="flex gap-1 items-center active:scale-95 hover:bg-gray-800 text-white bg-gray-700 p-2 rounded-md"
              >
                <LogOut size={15} />
                <span>Log out</span>
              </button>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
