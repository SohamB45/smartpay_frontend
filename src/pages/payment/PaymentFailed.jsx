import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-800 text-center p-4">
      <h1 className="text-3xl font-bold mb-2">❌ Payment Failed</h1>
      <p className="mb-4">Something went wrong. Please try again or contact help</p>
      <Link to="/" className="text-blue-600 underline">Try Again</Link>
    </div>
  );
};

export default PaymentFailed;
