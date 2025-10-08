
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// // import dotenv from 'dotenv';
// // dotenv.config();


// const DonatePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { donorName, donorEmail, amount } = location.state || {};
//   const [donation, setDonation] = useState(null);

//   useEffect(() => {
//     const fetchDonationAndInitPayment = async () => {
//       try {
//         // 1. Fetch donation (optional)
//         const res = await fetch(`http://localhost:5200/api/donations/${id}`);
//         const donationData = await res.json();
//         setDonation(donationData);

//         // 2. Create Razorpay order
//         const paymentRes = await fetch(`http://localhost:5200/api/donations/create-payment/${id}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           // body: JSON.stringify({ amount }),//AMOUNT IS PASSED FROM DONATEFORM
//         });
//         const paymentData = await paymentRes.json();

//         // 3. Razorpay options
//         const options = {
//           key: import.meta.env.VITE_RAZORPAY_KEY_ID,////////
//           amount: paymentData.amount,
//           currency: "INR",
//           name: "SmartPay Donations",
//           description: "Donation Payment",
//           order_id: paymentData.orderId,
//           prefill: {
//             name: donorName,
//             email: donorEmail,
//           },
//           theme: { color: "#3399cc" },
//           handler: async function (response) {
//             try {
//               const verifyRes = await fetch(`http://localhost:5200/api/donations/verify-payment`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                   donationId: id,
//                   razorpayOrderId: response.razorpay_order_id,
//                   razorpayPaymentId: response.razorpay_payment_id,
//                   razorpaySignature: response.razorpay_signature,
//                 }),
//               });

//               const verifyData = await verifyRes.json();
//               if (verifyData.success) {
//                 navigate("/thank-you",{
//                   state: {
//       donorName,
//       donorEmail,
//       amount,
//       paymentId: response.razorpay_payment_id,
//       orderId: response.razorpay_order_id,
//     },
//                 });
//               } else {
//                 navigate("/payment-failed");
//               }
//             } catch (error) {
//               console.error("Verification failed", error);
//               navigate("/payment-failed");
//             }
//           },
//           modal: {
//             ondismiss: () => {
//               // Optional: Update status as 'Failed' on cancel
//               fetch(`http://localhost:5200/api/donations/${id}/fail`, { method: "PUT" });
//               alert("Payment cancelled");
//               navigate("/payment-failed");
//             },
//           },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (err) {
//         console.error("Error in payment flow", err);
//         alert("Something went wrong");
//         navigate("/donate");
//       }
//     };

//     fetchDonationAndInitPayment();
//   }, [id, amount, donorName, donorEmail, navigate]);

//   return <p>Loading payment gateway...</p>;
// };

// export default DonatePage;

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

// --- Custom Modal Component for Cancellation ---
const CancelPromptModal = ({ onConfirm, onCancel }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-md rounded-2xl bg-gray-800/80 p-8 shadow-2xl ring-1 ring-white/10"
        >
            <h2 className="text-2xl font-bold text-white">Cancel Transaction?</h2>
            <p className="mt-4 text-gray-400">
                Are you sure you want to cancel your payment? This action cannot be undone.
            </p>
            <div className="mt-8 flex justify-end gap-4">
                <button
                    onClick={onCancel}
                    className="rounded-full bg-gray-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-600"
                >
                    Continue Payment
                </button>
                <button
                    onClick={onConfirm}
                    className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500"
                >
                    Yes, Cancel
                </button>
            </div>
        </motion.div>
    </motion.div>
);

// --- Back Button Confirmation Modal ---
const BackButtonConfirmModal = ({ onConfirm, onCancel }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md"
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-md rounded-2xl bg-gray-800/80 p-8 shadow-2xl ring-1 ring-white/10"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Leave Payment Page?</h2>
            </div>
            <p className="text-gray-400 mb-6">
                You're in the middle of a payment process. Are you sure you want to leave this page? Your payment progress will be lost.
            </p>
            <div className="flex justify-end gap-3">
                <button
                    onClick={onCancel}
                    className="rounded-full bg-gray-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-600"
                >
                    Stay on Page
                </button>
                <button
                    onClick={onConfirm}
                    className="rounded-full bg-yellow-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-500"
                >
                    Leave Page
                </button>
            </div>
        </motion.div>
    </motion.div>
);

// --- Main DonatePage Component ---
export default function DonatePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { donorName, donorEmail, amount } = location.state || {};
    const [donation, setDonation] = useState(null);
    const [showCancelPrompt, setShowCancelPrompt] = useState(false);
    const [showBackConfirm, setShowBackConfirm] = useState(false);
    const [razorpayInstance, setRazorpayInstance] = useState(null);
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    // Handle browser back button and page refresh
    useEffect(() => {
        // Add a state to history stack
        const currentState = { page: 'payment', timestamp: Date.now() };
        window.history.replaceState(currentState, '', window.location.pathname);
        window.history.pushState(currentState, '', window.location.pathname);

        const handlePopState = (event) => {
            if (!paymentCompleted) {
                // Immediately push state back to prevent navigation
                window.history.pushState(currentState, '', window.location.pathname);
                setShowBackConfirm(true);
            }
        };

        const handleBeforeUnload = (event) => {
            if (!paymentCompleted) {
                const message = 'You are in the middle of a payment process. Are you sure you want to leave?';
                event.preventDefault();
                event.returnValue = message;
                return message;
            }
        };

        // Add event listeners
        window.addEventListener('popstate', handlePopState);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [paymentCompleted]);

    // Handle back button confirmation
    const handleBackConfirm = () => {
        setPaymentCompleted(true); // Allow navigation
        setShowBackConfirm(false);
        
        // Optional: Update status as 'Failed' on your backend
        fetch(`http://localhost:5200/api/donations/${id}/fail`, { method: "PUT" }).catch(console.error);
        
        // Navigate back after allowing navigation
        setTimeout(() => {
            navigate("/home");
        }, 50);
    };

    const handleBackCancel = () => {
        setShowBackConfirm(false);
        // The popstate handler will automatically maintain protection
    };

    // ✅ YOUR ORIGINAL LOGIC IS RESTORED HERE
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.head.appendChild(script);

        const fetchDonationAndInitPayment = async () => {
            await new Promise(resolve => script.onload = resolve);
            try {
                // 1. Fetch donation (optional)
                const res = await fetch(`https://smartpay-backend.onrender.com/api/donations/${id}`);
                const donationData = await res.json();
                setDonation(donationData);

                // 2. Create Razorpay order //CHNAGES IN FETCH LINK
                const paymentRes = await fetch(`https://smartpay-backend.onrender.com/api/donations/create-payment/${id}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
                const paymentData = await paymentRes.json();

                // 3. Razorpay options
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                    amount: paymentData.amount,
                    currency: "INR",
                    name: "SmartPay Donations",
                    description: "Donation Payment",
                    order_id: paymentData.orderId,
                    prefill: {
                        name: donorName,
                        email: donorEmail,
                    },
                    theme: { color: "#10b981" },
                    handler: async function (response) {
                        try {
                            setPaymentCompleted(true); // Allow navigation after successful payment
                            const verifyRes = await fetch(`https://smartpay-backend.onrender.com/api/donations/verify-payment`, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    donationId: id,
                                    razorpayOrderId: response.razorpay_order_id,
                                    razorpayPaymentId: response.razorpay_payment_id,
                                    razorpaySignature: response.razorpay_signature,
                                }),
                            });

                            const verifyData = await verifyRes.json();
                            if (verifyData.success) {
                                navigate("/thank-you", {
                                    state: {
                                        donorName,
                                        donorEmail,
                                        amount,
                                        paymentId: response.razorpay_payment_id,
                                        orderId: response.razorpay_order_id,
                                    },
                                });
                            } else {
                                navigate("/payment-failed");
                            }
                        } catch (error) {
                            console.error("Verification failed", error);
                            setPaymentCompleted(true); // Allow navigation on error
                            navigate("/payment-failed");
                        }
                    },
                    modal: {
                        ondismiss: () => {
                            setShowCancelPrompt(true); // Show our custom modal
                        },
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
                setRazorpayInstance(rzp); // Save instance to reopen if needed
            } catch (err) {
                console.error("Error in payment flow", err);
                alert("Something went wrong");
                setPaymentCompleted(true); // Allow navigation on error
                navigate("/home");
            }
        };

        fetchDonationAndInitPayment();

        return () => {
            document.head.removeChild(script);
            document.body.style.overflow = 'auto';
        };
    }, [id, amount, donorName, donorEmail, navigate]);
    
    const handleConfirmCancel = () => {
        setPaymentCompleted(true); // Allow navigation
        // Optional: Update status as 'Failed' on your backend
        fetch(`https://smartpay-backend.onrender.com/api/donations/${id}/fail`, { method: "PUT" }).catch(console.error);
        setShowCancelPrompt(false);
        navigate("/home");
    };
    
    const handleContinuePayment = () => {
        setShowCancelPrompt(false);
        if (razorpayInstance) {
            razorpayInstance.open(); // Re-open the Razorpay modal
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');
                body { 
                    font-family: 'Sora', sans-serif;
                    background-color: #030712;
                }
                .animated-gradient {
                    background: linear-gradient(300deg, #030712, #1f2937, #047857, #4f46e5);
                    background-size: 240% 240%;
                    animation: gradient-animation 16s ease infinite;
                }
                @keyframes gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>

            <div className="relative min-h-screen text-gray-200">
                <div className="animated-gradient fixed inset-0 -z-10"></div>
                
                <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/50 backdrop-blur-xl">
                    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Link 
                            to="/home" 
                            className="flex items-center gap-3"
                            onClick={(e) => {
                                if (!paymentCompleted) {
                                    e.preventDefault();
                                    setShowBackConfirm(true);
                                }
                            }}
                        >
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                SmartPay
                            </span>
                        </Link>
                    </div>
                </header>

                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <svg className=" animate-spin h-12 w-12 text-emerald-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <h2 className="mt-6 text-2xl font-bold text-white">Initializing Secure Payment</h2>
                        <p className="mt-2 text-gray-400">Please wait while we redirect you to the payment gateway...</p>
                        <div className="mt-6 text-sm text-yellow-400 bg-yellow-400/10 rounded-full px-4 py-2 inline-block">
                            ⚠️ Please do not navigate away from this page during payment
                        </div>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {showCancelPrompt && (
                        <CancelPromptModal
                            onConfirm={handleConfirmCancel}
                            onCancel={handleContinuePayment}
                        />
                    )}
                    {showBackConfirm && (
                        <BackButtonConfirmModal
                            onConfirm={handleBackConfirm}
                            onCancel={handleBackCancel}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
