



import React, { useRef, useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Main PaymentSuccess Component ---
export default function PaymentSuccess() {
    const invoiceRef = useRef();
    const location = useLocation();
    const { paymentId, donorName, donorEmail, amount, orderId } = location.state || {};
    
    // State to control the confetti animation
    const [runConfetti, setRunConfetti] = useState(true);

    // useEffect(() => {
    //     // Stop the confetti after 10 seconds
    //     const timer = setTimeout(() => setRunConfetti(false), 10000);
    //     return () => clearTimeout(timer);
    // }, []);

    const downloadPDF = () => {
        const input = invoiceRef.current;
        // Temporarily change background for PDF generation to avoid transparency issues
        input.style.backgroundColor = '#111827'; 

        html2canvas(input, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#111827',
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`SmartPay_Invoice_${orderId || paymentId}.pdf`);
            
            // Revert background color after PDF is generated
            input.style.backgroundColor = ''; 
        }).catch((err) => {
            console.error('PDF download failed', err);
            // Revert background color even if there's an error
            input.style.backgroundColor = '';
        });
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
            
            

            <div className="relative min-h-screen flex flex-col items-center justify-center text-gray-200 p-4">
                <div className="animated-gradient fixed inset-0 -z-10"></div>

                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-white">Payment Successful!</h1>
                    <p className="mt-2 text-gray-400">Thank you, {donorName}! Your transaction has been completed.</p>
                </motion.div>

                <motion.div
                    ref={invoiceRef}
                    className="w-full max-w-2xl rounded-2xl bg-gray-900/70 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex justify-between items-center border-b border-white/10 pb-6">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">SmartPay</h2>
                            <p className="text-sm text-gray-400">Payment Receipt</p>
                        </div>
                        <div className="text-right text-sm">
                            <p className="font-semibold text-white">Invoice</p>
                            <p className="text-gray-400">{orderId || paymentId}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
                        <div>
                            <p className="text-gray-400 mb-1">Billed To</p>
                            <p className="font-semibold text-white">{donorName}</p>
                            <p className="text-gray-300">{donorEmail}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 mb-1">Payment Date</p>
                            <p className="font-semibold text-white">{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="pb-2 font-semibold text-white">Description</th>
                                    <th className="pb-2 text-right font-semibold text-white">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 text-gray-300">Course Enrollment / Donation</td>
                                    <td className="py-4 text-right font-medium text-white">₹{amount}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="border-t border-white/10 font-bold">
                                    <td className="pt-4 text-base text-white">Total Paid</td>
                                    <td className="pt-4 text-right text-base text-emerald-400">₹{amount}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex items-center gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button
                        onClick={downloadPDF}
                        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
                    >
                        Download Invoice
                    </button>
                    <Link to="/home" className="rounded-full bg-gray-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-600">
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </>
    );
};
