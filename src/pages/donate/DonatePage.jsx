// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const DonatePage = () => {
//   const { id } = useParams();
//   const [donation, setDonation] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5200/api/donations/${id}`)
//       .then((res) => res.json())
//       .then((data) => setDonation(data))
//       .catch((err) => console.error("Error fetching donation", err));
//   }, [id]);

//   const handlePayment = async () => {
//     const res = await fetch(`http://localhost:5200/api/donations/create-payment/${id}`, {
//       method: "POST",
//     });
//     const data = await res.json();

//     const options = {
//       key: "YOUR_KEY_ID", // Replace this with your Razorpay Key ID
//       amount: data.amount,
//       currency: "INR",
//       name: "SmartPay Donations",
//       description: "Donation Payment",
//       order_id: data.orderId,
//       handler: async function (response) {
//         // Update backend status
//         await fetch(`http://localhost:5200/api/donations/${id}`, {
//           method: "PUT",
//         });
//         alert("Payment Successful!");
//         window.location.reload();
//       },
//       prefill: {
//         name: donation?.donorName || "",
//         email: donation?.email || "",
//       },
//       theme: { color: "#3399cc" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!donation) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Donate to: {donation.donorName}</h1>
//       <p>Amount: ₹{donation.amount}</p>
//       <p>Status: {donation.status}</p>
//       {donation.status !== "Paid" && (
//         <button onClick={handlePayment}>Donate Now</button>
//       )}
//     </div>
//   );
// };

// export default DonatePage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const DonatePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [donation, setDonation] = useState(null);

// const { donorName, donorEmail, amount } = location.state || {};
//   useEffect(() => {
//     // Fetch donation details needed for payment
//     fetch(`http://localhost:5200/api/donations/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setDonation(data);

//         // After getting donation, create Razorpay order & open gateway
//         fetch(`http://localhost:5200/api/donations/create-payment/${id}`, {
//           method: "POST",
//         })
//           .then((res) => res.json())
//           .then((paymentData) => {
//             const options = {
//               key: "rzp_test_RjNmznCNiLWJWh", // Replace with your Razorpay Key ID
//               amount: paymentData.amount,
//               currency: "INR",
//               name: "SmartPay Donations",
//               description: "Donation Payment",
//               order_id: paymentData.orderId,
//               prefill: {
//                 name: data.donorName,
//                 email: data.donorEmail,
//               },
//               theme: { color: "#3399cc" },
//               handler: async function (response) {
//                 // Mark donation paid in backend
//                 await fetch(`http://localhost:5200/api/donations/${id}`, {
//                   method: "PUT",
//                 });
//                 alert("Payment Successful!");
//                 navigate("/thank-you"); // Redirect after payment
//               },
//               modal: {
//                 ondismiss: () => {
//                   alert("Payment cancelled");
//                   navigate("/donate"); // Or any fallback page
//                 },
//               },
//             };
//             const rzp = new window.Razorpay(options);
//             rzp.open();
//           });
//       })
//       .catch((err) => {
//         console.error("Error loading donation/payment", err);
//         alert("Error loading donation details");
//         navigate("/donate");
//       });
//   }, [id, navigate]);

//   return <p>Loading payment gateway...</p>;
// };

// export default DonatePage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";

// const DonatePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { donorName, donorEmail, amount } = location.state || {}; // ✅ Extract donor info
//   const [donation, setDonation] = useState(null);

//   useEffect(() => {
//     // Fetch donation details (optional)
//     fetch(`http://localhost:5200/api/donations/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setDonation(data);

//         // ✅ Now create Razorpay order with passed amount
//         fetch(`http://localhost:5200/api/donations/create-payment/${id}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount }), // ✅ Pass amount from state
//         })
//           .then((res) => res.json())
//           .then((paymentData) => {
//             const options = {
//               key: "rzp_test_RjNmznCNiLWJWh",
//               amount: paymentData.amount, // should be in paise
//               currency: "INR",
//               name: "SmartPay Donations",
//               description: "Donation Payment",
//               order_id: paymentData.orderId,
//               prefill: {
//                 name: donorName,
//                 email: donorEmail,
//               },
//               theme: { color: "#3399cc" },
//               handler: async function (response) {
//                 await fetch(`http://localhost:5200/api/donations/${id}`, {
//                   method: "PUT",
//                 });
//                 alert("Payment Successful!");
//                 navigate("/thank-you");
//               },
//               modal: {
//                 ondismiss: () => {
//                   alert("Payment cancelled");
//                   navigate("/donate");
//                 },
//               },
//             };
//             const rzp = new window.Razorpay(options);
//             rzp.open();
//           });
//       })
//       .catch((err) => {
//         console.error("Error loading donation/payment", err);
//         alert("Error loading donation details");
//         navigate("/donate");
//       });
//   }, [id, navigate, amount, donorName, donorEmail]);

//   return <p>Loading payment gateway...</p>;
// };

// export default DonatePage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import dotenv from 'dotenv';
// dotenv.config();


const DonatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { donorName, donorEmail, amount } = location.state || {};
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    const fetchDonationAndInitPayment = async () => {
      try {
        // 1. Fetch donation (optional)
        const res = await fetch(`http://localhost:5200/api/donations/${id}`);
        const donationData = await res.json();
        setDonation(donationData);

        // 2. Create Razorpay order
        const paymentRes = await fetch(`http://localhost:5200/api/donations/create-payment/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        });
        const paymentData = await paymentRes.json();

        // 3. Razorpay options
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,////////
          amount: paymentData.amount,
          currency: "INR",
          name: "SmartPay Donations",
          description: "Donation Payment",
          order_id: paymentData.orderId,
          prefill: {
            name: donorName,
            email: donorEmail,
          },
          theme: { color: "#3399cc" },
          handler: async function (response) {
            try {
              const verifyRes = await fetch(`http://localhost:5200/api/donations/verify-payment`, {
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
                navigate("/thank-you",{
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
              navigate("/payment-failed");
            }
          },
          modal: {
            ondismiss: () => {
              // Optional: Update status as 'Failed' on cancel
              fetch(`http://localhost:5200/api/donations/${id}/fail`, { method: "PUT" });
              alert("Payment cancelled");
              navigate("/payment-failed");
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (err) {
        console.error("Error in payment flow", err);
        alert("Something went wrong");
        navigate("/donate");
      }
    };

    fetchDonationAndInitPayment();
  }, [id, amount, donorName, donorEmail, navigate]);

  return <p>Loading payment gateway...</p>;
};

export default DonatePage;
