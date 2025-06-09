
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
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const invoiceRef = useRef();
  const location = useLocation();
  const { paymentId, donorName, donorEmail, amount } = location.state || {};

  const downloadPDF = () => {
    const input = invoiceRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('SkillGive_Invoice.pdf');
    }).catch((err) => {
      console.error('PDF download failed', err);
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div
        ref={invoiceRef}
        className="w-full max-w-2xl shadow-xl rounded-lg p-10 border bg-slate-100"
        style={{ color: '#1f2937' }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold" style={{ color: '#2563eb' }}>SkillGive</h1>
          <p className="text-lg  mt-1">Donation Payment Receipt</p>
        </div>

        <div className="border-t pt-6 text-base space-y-4">
          <p><strong>Donor Name:</strong> {donorName}</p>
          <p><strong>Email:</strong> {donorEmail}</p>
          <p><strong>Payment ID (UTR):</strong> {paymentId}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <div className="mt-8 border-t pt-6">
          <table className="w-full text-left ">
            <thead>
              <tr>
                <th className="pb-2">Description</th>
                <th className="pb-2 text-right">Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Donation</td>
                <td className="py-1 text-right">₹{amount}</td>
              </tr>
              <tr className="border-t">
                <td className="pt-2 font-semibold">Total</td>
                <td className="pt-2 font-semibold text-right">₹{amount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center text-sm">
          This receipt confirms your payment was successfully processed.
        </div>
      </div>

      <button
        onClick={downloadPDF}
        className="mt-6 bg-blue-600 text-white text-base font-medium px-6 py-2 rounded cursor-pointer"
        style={{ backgroundColor: '#2563eb' }}
      >
        Download Invoice as PDF
      </button>

      <Link to="/" className="mt-4 text-blue-500 underline text-sm">Go to Home</Link>
    </div>
  );
};

export default PaymentSuccess;

