import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { useOrderStore } from "../stores/useOrderStore";
import { Loader } from "lucide-react";

const PaymentResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const txRef = searchParams.get("tx_ref");
  const status = searchParams.get("status");
  const shouldVerifyOnReturn = import.meta.env.VITE_CHAPA_VERIFY_ON_RETURN === "true";

  const { clearCartItems } = useContext(CartContext);
  const { getPaymentResult, verifyPayment } = useOrderStore();

  const [result, setResult] = useState(null);
  const [isResolving, setIsResolving] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const isReturnSuccess = useMemo(() => {
    return String(status || "").toLowerCase() === "success";
  }, [status]);

  useEffect(() => {
    if (!txRef) return;

    const run = async () => {
      if (isReturnSuccess) {
        const confirmed = await verifyPayment(txRef);
        if (confirmed?.paid) {
          clearCartItems();
          setResult(confirmed);
        } else {
          setResult(
            confirmed || {
              paid: false,
              failed: true,
              pending: false,
              message: "Payment could not be confirmed",
            }
          );
        }

        setIsResolving(false);

        return;
      }

      const maxAttempts = 5;

      for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const initialResult = await getPaymentResult(txRef);

        if (initialResult?.paid) {
          clearCartItems();
          setResult(initialResult);
          setIsResolving(false);
          return;
        }

        if (isReturnSuccess || shouldVerifyOnReturn || initialResult?.pending) {
          await verifyPayment(txRef);
        }

        const refreshedResult = await getPaymentResult(txRef);
        if (refreshedResult?.paid) {
          clearCartItems();
          setResult(refreshedResult);
          setIsResolving(false);
          return;
        }

        setResult(refreshedResult);

        if (attempt < maxAttempts - 1) {
          await sleep(2000);
        }
      }

      setIsResolving(false);
    };

    run();
  }, [
    txRef,
    isReturnSuccess,
    shouldVerifyOnReturn,
    verifyPayment,
    getPaymentResult,
    clearCartItems,
  ]);

  if (!txRef) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar page="payment-result" />
        <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Payment Result</h1>
          <p className="text-gray-600 mt-3">Missing payment reference.</p>
          <button
            onClick={() => navigate("/place-order")}
            className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Back to Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar page="payment-result" />
      <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Payment Result</h1>

        {isResolving && !result ? (
          <div className="mt-6 flex flex-col items-center gap-3 text-gray-600">
            <Loader className="animate-spin" />
            <p>Checking payment status...</p>
          </div>
        ) : null}

        {!isResolving && result?.paid ? (
          <div className="mt-6">
            <p className="text-green-700 font-medium">Payment successful.</p>
            <p className="text-gray-600 mt-2">Your order has been confirmed.</p>
          </div>
        ) : null}

        {!isResolving && result?.failed ? (
          <div className="mt-6">
            <p className="text-red-700 font-medium">Payment failed.</p>
            <p className="text-gray-600 mt-2">Please try again or choose another method.</p>
          </div>
        ) : null}

        {!isResolving && result?.pending ? (
          <div className="mt-6">
            <p className="text-amber-700 font-medium">Payment pending confirmation.</p>
            <p className="text-gray-600 mt-2">Webhook confirmation is still in progress. Refresh shortly.</p>
          </div>
        ) : null}

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/place-order")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Back to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;
