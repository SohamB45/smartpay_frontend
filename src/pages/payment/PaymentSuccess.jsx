
// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { useLocation, Link } from 'react-router-dom';

// const PaymentSuccess = () => {
//   const invoiceRef = useRef();
//   const location = useLocation();
//   const { paymentId, donorName, donorEmail, amount } = location.state || {};

// const downloadPDF = async () => {
//   const input = invoiceRef.current;

//   if (!input) return;

//   // Wait for layout to render completely
//   await new Promise((resolve) => setTimeout(resolve, 100));

//   html2canvas(input, { scale: 3, useCORS: true }).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     const width = pdf.internal.pageSize.getWidth();
//     const height = (canvas.height * width) / canvas.width;
//     pdf.addImage(imgData, 'PNG', 0, 0, width, height);
//     pdf.save('SmartPay_Invoice.pdf');
//   });
// };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-10">
//       <div
//         ref={invoiceRef}
//         className="bg-white w-full max-w-4xl p-10 rounded-xl shadow-xl border border-gray-300"
//         style={{ fontFamily: 'Arial, sans-serif' }}
//       >
//         <div className="mb-8 border-b pb-6 text-center">
//           <h1 className="text-4xl font-bold text-blue-700">🧾 SmartPay Invoice</h1>
//           <p className="text-lg text-gray-500 mt-2">Official Payment Receipt</p>
//         </div>

//         <div className="text-gray-800 text-lg space-y-4">
//           <div className="flex justify-between">
//             <span className="font-semibold">Donor Name:</span>
//             <span>{donorName}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Email:</span>
//             <span>{donorEmail}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Amount Paid:</span>
//             <span className="text-green-700 font-bold text-xl">₹{amount}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Payment ID (UTR):</span>
//             <span>{paymentId}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Date of Payment:</span>
//             <span>{new Date().toLocaleDateString()}</span>
//           </div>
//         </div>

//         <div className="mt-10 text-center text-sm text-gray-500 border-t pt-6">
//           <p>This is a system-generated invoice from SmartPay Donations.</p>
//           <p>No signature required. Keep this as your official record.</p>
//         </div>
//       </div>

//       <button
//         onClick={downloadPDF}
//         className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
//       >
//         📄 Download Invoice as PDF
//       </button>

//       <Link to="/" className="mt-4 text-blue-600 underline text-lg">Go to Home</Link>
//     </div>
//   );
// };

// export default PaymentSuccess;
// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { useLocation, Link } from 'react-router-dom';

// const PaymentSuccess = () => {
//   const invoiceRef = useRef();
//   const location = useLocation();
//   const { paymentId, donorName, donorEmail, amount } = location.state || {};

//   const downloadPDF = () => {
//     const input = invoiceRef.current;
//     html2canvas(input, {
//       scale: 2,
//       useCORS: true,
//     }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const width = pdf.internal.pageSize.getWidth();
//       const height = (canvas.height * width) / canvas.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, width, height);
//       pdf.save('SkillGive_Invoice.pdf');
//     }).catch((err) => {
//       console.error('PDF download failed', err);
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8">
//       <div
//         ref={invoiceRef}
//         className="w-full max-w-2xl shadow-xl rounded-lg p-10 border bg-slate-100"
//         style={{ color: '#1f2937' }}
//       >
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold" style={{ color: '#2563eb' }}>SkillGive</h1>
//           <p className="text-lg  mt-1">Donation Payment Receipt</p>
//         </div>

//         <div className="border-t pt-6 text-base space-y-4">
//           <p><strong>Donor Name:</strong> {donorName}</p>
//           <p><strong>Email:</strong> {donorEmail}</p>
//           <p><strong>Payment ID (UTR):</strong> {paymentId}</p>
//           <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
//         </div>

//         <div className="mt-8 border-t pt-6">
//           <table className="w-full text-left ">
//             <thead>
//               <tr>
//                 <th className="pb-2">Description</th>
//                 <th className="pb-2 text-right">Amount (INR)</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-1">Donation</td>
//                 <td className="py-1 text-right">₹{amount}</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="pt-2 font-semibold">Total</td>
//                 <td className="pt-2 font-semibold text-right">₹{amount}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-10 text-center text-sm">
//           This receipt confirms your payment was successfully processed.
//         </div>
//       </div>

//       <button
//         onClick={downloadPDF}
//         className="mt-6 bg-blue-600 text-white text-base font-medium px-6 py-2 rounded cursor-pointer"
//         style={{ backgroundColor: '#2563eb' }}
//       >
//         Download Invoice as PDF
//       </button>

//       <Link to="/" className="mt-4 text-blue-500 underline text-sm">Go to Home</Link>
//     </div>
//   );
// };

// export default PaymentSuccess;



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