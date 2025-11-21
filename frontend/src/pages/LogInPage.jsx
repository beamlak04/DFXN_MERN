import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Mail, Lock, Loader } from "lucide-react";

import { useUserStore } from "../stores/useUserStore";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useUserStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative">
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
          Login To Your Account
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  <>Login</>
                )}
              </button>
              <p className="text-center mt-1">
                Don't have an account ?
                <a href="/signup" className="text-gray-800 underline">
                  {" "}
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LogInPage;
