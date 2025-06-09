// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const DonateForm = () => {
//   const [formData, setFormData] = useState({
//     donorName: '',
//     donorEmail: '',
//     amount: '',
//     message: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('http://localhost:5000/api/donations', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         customerName: formData.donorName,
//         customerEmail: formData.donorEmail,
//         totalAmount: formData.amount,
//         status: 'Unpaid',
//       }),
//     });

//     const data = await res.json();
//     if (data._id) {
//       navigate(`/donate/${data._id}`);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Make a Donation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="donorName" placeholder="Your Name" required onChange={handleChange} className="w-full border p-2 rounded" />
//         <input type="email" name="donorEmail" placeholder="Email (optional)" onChange={handleChange} className="w-full border p-2 rounded" />
//         <input type="number" name="amount" placeholder="Amount (₹)" required onChange={handleChange} className="w-full border p-2 rounded" />
//         <textarea name="message" placeholder="Message (optional)" onChange={handleChange} className="w-full border p-2 rounded"></textarea>
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
//           Proceed to Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DonateForm;

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link } from "react-router-dom"
// import './donate.css';
// import { useLocation } from "react-router-dom";

const DonateForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  
  // ✅ Get amount from Link state
  const passedAmount = location.state?.amount || '';
  const passedCourse = location.state?.name || '';

  const [formData, setFormData] = useState({
    donorName: '',
    donorEmail: '',
    amount: passedAmount,
    message: '',
    coursename:passedCourse
    
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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5200/api/donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        donorName: formData.donorName,
        donorEmail: formData.donorEmail,
        amount: formData.amount,
        status: 'Unpaid',
      }),
    });

    const data = await res.json();
    if (data._id) {
      navigate(`/donate/${data._id}`, {
  state: {
    donorName: formData.donorName,
    donorEmail: formData.donorEmail,
    amount: formData.amount,
    // coursename:formData.coursename
  },
});
    }
  };



// return (
//   <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center ">
    
//     <div className="w-full max-w-3xl  bg-slate-200 shadow-lg rounded-lg p-8 border-[0.5px] border-gray-300 mb-50">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">
//         Course: {formData.coursename}
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Your donation helps us continue our mission. Every amount counts!
//       </p>
//       <form onSubmit={handleSubmit} method="POST" className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Full Name"
//           value={formData.donorName}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.donorEmail}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           name="amount"
//           placeholder="Donation Amount (INR)"
//           value={formData.amount}
//           disabled
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 opacity-60 cursor-not-allowed focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
//         >
//           Proceed to Pay
//         </button>
//       </form>
//     </div>
//   </div>
// );
// }


return (
  <div className="min-h-screen w-full bg-slate-50 relative">
    {/* Back Link */}
    <Link to="/home" className="absolute top-4 left-4 text-blue-600 hover:underline font-medium">
      ← Back to Home
    </Link>

    {/* Centered Form */}
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl bg-slate-200 shadow-lg rounded-lg p-8 border-[0.5px] border-gray-300 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Course: {formData.coursename}
        </h2>
        <p className="text-gray-600 mb-6">
          Your donation helps us continue our mission. Every amount counts!
        </p>
        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.donorName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.donorEmail}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (INR)"
            value={formData.amount}
            disabled
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 opacity-60 cursor-not-allowed focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
export default DonateForm;
