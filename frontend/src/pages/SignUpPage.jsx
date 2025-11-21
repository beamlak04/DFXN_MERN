import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Mail, Lock, User, Loader } from "lucide-react";

import { useUserStore } from "../stores/useUserStore";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    return <redirect to="/" />;
  };
  return (
    <div className="flex flex-col justify-center min-h-screen relative">
      <a
        href="/"
        className="absolute top-3 left-3 flex gap-1 hover:text-blue-500 hover:cursor-pointer"
      >
        <Home />
        Back to Home page
      </a>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center font-bold text-gray-800 text-2xl my-3">
          Create an account
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mt-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 mx-auto p-5 bg-slate-100 rounded-md shadow-md w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            {/* input for name */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <User />
                </span>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="John Doe"
                />
              </div>
            </div>
            {/* input for email */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <Mail />
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="John@example.com"
                />
              </div>
            </div>
            {/* input for password */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <Lock />
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="********"
                />
              </div>
            </div>
            {/* confirm password */}
            <div className="space-y-1">
              <label className="p-1" htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className="relative">
                <span className="absolute top-1 left-1 text-slate-400">
                  <Lock />
                </span>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="pl-9 py-1 w-full rounded-md focus:outline-none shadow"
                  placeholder="********"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="text-center text-white bg-gray-800 rounded w-full py-2 hover:bg-gray-700 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader
                      className="mx-auto animate-spin"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>Sign up</>
                )}
              </button>
              <p className="text-center mt-1">
                Already have an account ?
                <a href="/admin/login" className="text-gray-800 underline">
                  {" "}
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
