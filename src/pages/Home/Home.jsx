
// import React from "react";
// // import "./HomePage.css"; // move the CSS into a separate file if needed
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { useState } from "react";

// export default function Home() {
//   const { user } = useAuth();
//   const date = new Date().toLocaleString();

//   const courses = [
//     {
//       name: "Full Stack Web Dev",
//       desc: "HTML, CSS, JS, React, and Node.js",
//       image:
//         "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "6 weeks",
//       amount: 6333,
//     },
//     {
//       name: "Python for AI",
//       desc: "Learn Python with AI use cases",
//       image:
//         "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "5 weeks",
//       amount: 3499,
//     },
//     {
//       name: "Data Science Bootcamp",
//       desc: "Pandas, NumPy, Matplotlib, ML",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "8 weeks",
//       amount: 4999,
//     },
//     {
//       name: "Cloud Fundamentals",
//       desc: "AWS, GCP, Azure basics",
//       image:
//         "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "4 weeks",
//       amount: 2000,
//     },
//     {
//       name: "Cybersecurity Essentials",
//       desc: "Network security & best practices",
//       image:
//         "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "6 weeks",
//       amount: 2500,
//     },
//     {
//       name: "Mobile App Dev",
//       desc: "React Native & Flutter",
//       image:
//         "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "6 weeks",
//       amount: 3000,
//     },
//     {
//       name: "UI/UX Design",
//       desc: "Figma, prototyping, wireframes",
//       image:
//         "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "4 weeks",
//       amount: 1000,
//     },
//     {
//       name: "Ethical Hacking",
//       desc: "Learn to hack ethically",
//       image:
//         "https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "5 weeks",
//       amount: 3499,
//     },
//     {
//       name: "Blockchain Basics",
//       desc: "How blockchain works + hands-on",
//       image:
//         "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "5 weeks",
//       amount: 2700,
//     },
//     {
//       name: "Game Dev with Unity",
//       desc: "Make your own games in Unity",
//       image:
//         "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       duration: "7 weeks",
//       amount: 3999,
//     },
//   ];

//   const donations = [
//     {
//       title: "Sponsor Education",
//       image:
//         "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       desc: "Help a child go to school. ₹1000 can change a life.",
//     },
//     {
//       title: "Plant Trees",
//       image:
//         "https://images.unsplash.com/photo-1600296343269-737803e6231d?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       desc: "Support green projects. Just ₹500 to plant 5 trees.",
//     },
//     {
//       title: "Women Empowerment",
//       image:
//         "https://images.unsplash.com/photo-1621783014861-dc6ef309bd05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       // https://plus.unsplash.com/premium_vector-1729814120039-370d0f24601c?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
//       desc: "Contribute to training and growth programs.",
//     },
//     {
//       title: "Animal Welfare",
//       image:
//         "https://plus.unsplash.com/premium_photo-1722054522739-ae2be648a177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       desc: "Help stray and injured animals. Donate ₹700.",
//     },
//   ];

//   // style={{ padding: "30px", fontFamily: "Montserrat, sans-serif" }}
//   return (
//     <div className="w-full bg-slate-50">
//       <header className="bg-slate-800 w-full ">
//         <div className="flex h-20 w-full items-center gap-8 px-4 sm:px-6 lg:px-8 ">
//           <a className="block text-stone-50" href="#">
//             <span className="sr-only">Home</span>
//             <svg
//               className="h-8"
//               viewBox="0 0 28 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </a>

//           <div className="flex flex-1 items-center justify-end md:justify-between relative">
//             <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//                 <h1 className="text-4xl font-bold text-stone-50">
//                   Welcome to SmartPay
//                 </h1>
//                 <p className="text-lg mt-2 text-gray-700"></p>
//               </div>
//             <nav aria-label="Global" className="hidden md:block">
             
              
//             </nav>

//             <div className="flex items-center gap-4">
//               <div className="sm:flex sm:gap-4">
//                 <Link
//                   to="/"
                  
//                   className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
//                 >
//                   Logout
//                 </Link>
//               </div>

//               <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
//                 <span className="sr-only">Toggle menu</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="size-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="mx-auto px-4 pt-5 pb-12 text-center" style={{ maxWidth: '2000px' }}>
//         <p className="text-sm mb-6 text-gray-600">
//           <strong>Username:</strong> {user.name} | <strong>Date:</strong> {date}
//         </p>

//         <h2 className="text-2xl font-semibold mb-6">🎓 Courses for You</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-slate-100 shadow-md rounded-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 border-[0.25px] border-gray-300"
//             >
//               <img
//                 src={course.image}
//                 alt={course.name}
//                 className="w-full h-40 object-cover border"
//               />
//               <div className="p-4 flex flex-col flex-grow">
//                 <div className="text-lg font-semibold text-gray-800 mb-1">
//                   {course.name}
//                 </div>
//                 <div className="text-sm text-gray-600 mb-2 flex-grow">
//                   {course.desc}
//                 </div>
//                 <div className="text-xs text-gray-500 mb-3">
//                   ⏳ {course.duration}
//                 </div>
//                 <Link
//                   to="/donate-form"
//                   state={{ amount: course.amount, name: course.name }}
//                   className="mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   Add to Cart
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
//           💙 Donate to a Cause
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
//           {donations.map((donation, index) => (
//             <div
//               key={index}
//               className="bg-slate-100 shadow-md rounded-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 border-[0.25px] border-gray-300"
//             >
//               <img
//                 src={donation.image}
//                 alt={donation.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4 flex flex-col flex-grow">
//                 <div className="text-lg font-semibold text-gray-800 mb-1">
//                   {donation.title}
//                 </div>
//                 <div className="text-sm text-gray-600 flex-grow mb-3">
//                   {donation.desc}
//                 </div>
//                 <button className="mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
//                   Donate
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTED LINK
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useAuth } from "../../context/AuthContext";

// --- Data (Can be moved to a separate file, e.g., src/data/homeData.js) ---
const courses = [
    { name: "Full Stack Web Dev", desc: "HTML, CSS, JS, React, and Node.js", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "6 weeks", amount: 6333 },
    { name: "Python for AI", desc: "Learn Python with AI use cases", image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "5 weeks", amount: 3499 },
    { name: "Data Science Bootcamp", desc: "Pandas, NumPy, Matplotlib, ML", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "8 weeks", amount: 4999 },
    { name: "Cloud Fundamentals", desc: "AWS, GCP, Azure basics", image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "4 weeks", amount: 2000 },
    { name: "Cybersecurity Essentials", desc: "Network security & best practices", image: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "6 weeks", amount: 2500 },
    { name: "Mobile App Dev", desc: "React Native & Flutter", image: "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "6 weeks", amount: 3000 },
    { name: "UI/UX Design", desc: "Figma, prototyping, wireframes", image: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "4 weeks", amount: 1000 },
    { name: "Game Dev with Unity", desc: "Make your own games in Unity", image: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "7 weeks", amount: 3999 },
];

const donations = [
    { title: "Sponsor Education", image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Help a child go to school. Your contribution can change a life.", amount: 1000 },
    { title: "Plant Trees", image: "https://images.unsplash.com/photo-1600296343269-737803e6231d?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Support green projects and help combat climate change.", amount: 500 },
    { title: "Women Empowerment", image: "https://images.unsplash.com/photo-1621783014861-dc6ef309bd05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Contribute to training and skill development programs for women.", amount: 750 },
    { title: "Animal Welfare", image: "https://plus.unsplash.com/premium_photo-1722054522739-ae2be648a177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Help provide shelter, food, and medical care for stray animals.", amount: 700 },
];

// --- Reusable Components (Can be moved to src/components/) ---

const InteractiveCard = ({ children, glowColor }) => {
    const mouseX = useMotionValue(200);
    const mouseY = useMotionValue(150);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 400], [-10, 10]);

    return (
        <motion.div
            className="group relative h-full w-full"
            style={{ perspective: 1000, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                mouseX.set(200); // Reset to center
                mouseY.set(150); // Reset to center
            }}
        >
            <div
                className="absolute inset-0 rounded-xl bg-gray-800/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([newX, newY]) => `radial-gradient(400px at ${newX}px ${newY}px, ${glowColor}, transparent 80%)`
                    ),
                }}
            />
            {children}
        </motion.div>
    );
};

const CourseCard = ({ course }) => (
    <InteractiveCard glowColor="rgba(16, 185, 129, 0.25)">
        <div className="relative h-full flex flex-col rounded-xl bg-gray-900/70 p-1 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-emerald-500/80">
            <div className="overflow-hidden rounded-lg">
                <img src={course.image} alt={course.name} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0a0a0a/10b981?text=Course'; }}/>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">{course.name}</h3>
                <p className="mt-2 flex-grow text-sm text-gray-400">{course.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">{course.duration}</span>
                    <span className="text-xl font-bold text-emerald-400">₹{course.amount.toLocaleString("en-IN")}</span>
                </div>
                {/* --- UPDATED TO LINK --- */}
                <Link
                    to="/donate-form"
                    state={{ amount: course.amount, name: course.name }}
                    className="mt-5 block w-full rounded-lg bg-emerald-600/90 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    </InteractiveCard>
);

const DonationCard = ({ donation }) => (
     <InteractiveCard glowColor="rgba(99, 102, 241, 0.25)">
        <div className="relative h-full flex flex-col rounded-xl bg-gray-900/70 p-1 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-indigo-500/80">
            <div className="overflow-hidden rounded-lg">
                <img src={donation.image} alt={donation.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0a0a0a/6366f1?text=Cause'; }}/>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">{donation.title}</h3>
                <p className="mt-2 flex-grow text-sm text-gray-400">{donation.desc}</p>
                 {/* --- UPDATED TO LINK --- */}
                <Link
                    to="/donate-form"
                    state={{ amount: donation.amount, name: donation.title }}
                    className="mt-5 block w-full rounded-lg bg-indigo-600/90 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Donate
                </Link>
            </div>
        </div>
    </InteractiveCard>
);

const LiveClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);
    return <span className="text-sm font-mono text-gray-300">{time.toLocaleTimeString()}</span>;
};

// --- Main Home Component ---
export default function Home() {
    // Mock user for display. Replace with your actual auth context.
    const {user} =  useAuth() ;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <>
            {/* Global styles. Best placed in your main CSS file (e.g., index.css) */}
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
                    <div className="mx-auto flex h-20  items-center justify-between px-4 sm:px-6 lg:px-8">
                        <a className="flex items-center gap-3" href="#">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                SmartPay
                            </span>
                        </a>
                        <div className="flex items-center gap-4">
                            <LiveClock />
                            <div className="hidden h-8 w-px bg-white/10 sm:block"></div>
                            <span className="hidden text-sm sm:block">
                                Welcome, <strong className="font-semibold text-white">{user.name}</strong>
                            </span>
                             {/* --- UPDATED TO LINK --- */}
                            <Link
                                to="/"
                                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
                    <motion.section className="text-center mb-24" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Elevate Your Skills, Empower a Cause
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                            Dive into cutting-edge courses and support meaningful initiatives. Your journey of growth starts here.
                        </p>
                    </motion.section>

                    <section className="mb-24">
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Featured Courses
                        </h2>
                        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            {courses.map((course) => (
                                <motion.div key={course.name} variants={itemVariants}>
                                    <CourseCard course={course} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <section>
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Change the World
                        </h2>
                        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            {donations.map((donation) => (
                                <motion.div key={donation.title} variants={itemVariants}>
                                    <DonationCard donation={donation} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </main>
            </div>
        </>
    );
}