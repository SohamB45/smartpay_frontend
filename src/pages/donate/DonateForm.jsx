


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from "../../context/AuthContext";

// --- Mock Auth Hook to resolve the error ---
// This function replaces the need for an external AuthContext file in this isolated environment.
// In your actual project, you would remove this and use your real import.


// --- Main DonateForm Component ---
export default function DonateForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false); // <-- New state for loading

    const passedAmount = location.state?.amount || '';
    const passedCourse = location.state?.name || '';

    const [formData, setFormData] = useState({
        donorName: '',
        donorEmail: '',
        amount: passedAmount,
        coursename: passedCourse,
    });

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                donorName: user.name || '',
                donorEmail: user.email || '',
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // <-- Set loading to true

        try {
            const res = await fetch('https://smartpay-backend.onrender.com/api/donations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    donorName: formData.donorName,
                    donorEmail: formData.donorEmail,
                    status: 'Unpaid',
                    coursename: formData.coursename,
                }),
            });

            const data = await res.json();
            if (data._id) {
                navigate(`/donate/${data._id}`, {
                    state: {
                        donorName: formData.donorName,
                        donorEmail: formData.donorEmail,
                        coursename: formData.coursename,
                    },
                });
            }
        } catch (error) {
            console.error("Failed to submit donation:", error);
            // Optionally, show an error message to the user here
        } finally {
            setIsLoading(false); // <-- Set loading to false after API call completes
        }
    };

    return (
        <>
            {/* These styles can be moved to your main index.css file */}
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
                        <Link to="/home" className="flex items-center gap-3">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                SmartPay
                            </span>
                        </Link>
                    </div>
                </header>

                <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
                    <motion.div 
                        className="w-full max-w-2xl rounded-2xl bg-gray-900/70 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className="text-center">
                             <h2 className="text-3xl font-bold text-white">
                                Complete Your Enrollment
                            </h2>
                            <p className="text-gray-400 mt-2">
                                You're enrolling in: <strong className="text-emerald-400">{formData.coursename}</strong>
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="donorName"
                                    placeholder="Your Full Name"
                                    value={formData.donorName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border-none bg-gray-800/50 px-4 py-3 text-white ring-1 ring-white/10 transition focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="email"
                                    name="donorEmail"
                                    placeholder="Your Email"
                                    value={formData.donorEmail}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border-none bg-gray-800/50 px-4 py-3 text-white ring-1 ring-white/10 transition focus:ring-2 focus:ring-emerald-500"
                                />
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                                    <input
                                        type="number"
                                        name="amount"
                                        placeholder="Amount"
                                        value={formData.amount}
                                        disabled
                                        required
                                        className="w-full cursor-not-allowed rounded-lg border-none bg-gray-800/30 pl-8 pr-4 py-3 text-gray-400 ring-1 ring-white/10"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading} // <-- Disable button when loading
                                className="flex items-center justify-center w-full rounded-full bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    'Proceed to Pay'
                                )}
                            </button>
                        </form>
                         <div className="text-center mt-6">
                            <Link to="/home" className="text-sm text-gray-400 hover:text-white transition">
                                ← Go Back
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
