// import { useState } from "react";
// import axios from "axios";

// export default function AuthForm() {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5200/api/auth/register", formData);
//       alert("Signup successful! Please login now.");
//       window.location.href = "/login"; // Redirect to login page
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed.");
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

 // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // For login, we don't need 'name'
  //   const payload = isLogin
  //     ? { email: formData.email, password: formData.password }
  //     : formData;

  //   const endpoint = isLogin ? "http://localhost:5200/api/auth/login" : "http://localhost:5200/api/auth/register";

  //   try {
  //     const res = await axios.post(endpoint, payload);

  //     if (isLogin) {
  //       // Save user and token from backend response (adjust if your backend sends differently)
  //       localStorage.setItem("user", JSON.stringify(res.data.user));
  //       localStorage.setItem("token", res.data.token); // assuming you send token on login
  //       alert("Login successful!");
  //       window.location.href = "/Home";
  //     } else {
  //       alert("Signup successful! Please login now.");
  //       setIsLogin(true);
  //       setFormData({ name: "", email: "", password: "" });
  //     }
  //   } catch (err) {
  //     alert(err.response?.data?.error || "Error occurred.");
  //   }
  // };

// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from '../context/AuthContext';

// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

 
// const { setUser } = useAuth(); // ✅ Add this at the top of the component

// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   try {
// //     let endpoint = isLogin
// //       ? "http://localhost:5200/api/auth/login"
// //       : "http://localhost:5200/api/auth/register";

// //     const dataToSend = isLogin
// //       ? { email: formData.email, password: formData.password }
// //       : formData;

// //     const { data } = await axios.post(endpoint, dataToSend);

// //     localStorage.setItem("user", JSON.stringify(data.user));
// //     setUser(data.user);

// //     alert(isLogin ? "Logged in successfully!" : "Registered successfully!");
// //     window.location.href = "/Home";
// //   } catch (err) {
// //     alert(err.response?.data?.message || "Something went wrong."); // ✅ Fixed this line
// //   }
// // };  

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     let endpoint = isLogin
//       ? "http://localhost:5200/api/auth/login"
//       : "http://localhost:5200/api/auth/register";

//     const dataToSend = isLogin
//       ? { email: formData.email, password: formData.password }
//       : formData;

//     const { data } = await axios.post(endpoint, dataToSend);

//     if (isLogin) {
//       localStorage.setItem("user", JSON.stringify(data.user));
//       setUser(data.user);
//       alert("Logged in successfully!");
//       window.location.href = "/Home";
//     } else {
//       alert("Registered successfully! Please login.");
//       setIsLogin(true); // 👈 switch to login form
//       setFormData({ name: "", email: "", password: "" }); // reset form
//     }
//   } catch (err) {
//     alert(err.response?.data?.message || "Something went wrong.");
//   }
// };


//   return (
//     <div>
//       <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={handleChange}
//             value={formData.name}
//             required={!isLogin ? true : false}
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           value={formData.email}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           value={formData.password}
//           required
//         />
//         <button type="submit">{isLogin ? "Login" : "Register"}</button>
//       </form>
//       <p>
//         {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//         <button
//           onClick={() => {
//             setIsLogin(!isLogin);
//             setFormData({ name: "", email: "", password: "" });
//           }}
//         >
//           {isLogin ? "Sign Up" : "Login"}
//         </button>
//       </p>
//     </div>
//   );
// }
// import React, { useEffect } from "react";
// import "../authStyle.css";

// export default function AuthForm() {
//   useEffect(() => {
//     const container = document.getElementById("container");
//     const registerBtn = document.getElementById("register");
//     const loginBtn = document.getElementById("login");

//     registerBtn?.addEventListener("click", () => {
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener("click", () => {
//       container.classList.remove("active");
//     });
//   }, []);

//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-up">
//         <form>
//           <h1>Create account</h1>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>

//       <div className="form-container sign-in">
//         <form>
//           <h1>Sign In</h1>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>

//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your credentials to access the site</p>
//             <button className="hidden" id="login">Sign In</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register to start your journey with us</p>
//             <button className="hidden" id="register">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./authStyle.css";

// export default function AuthForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     const registerBtn = document.getElementById("register");
//     const loginBtn = document.getElementById("login");

//     registerBtn?.addEventListener("click", () => {
//       setIsLogin(false);
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener("click", () => {
//       setIsLogin(true);
//       container.classList.remove("active");
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5200/api/auth/login"
//         : "http://localhost:5200/api/auth/register";

//       const dataToSend = isLogin
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const { data } = await axios.post(endpoint, dataToSend);

//       // Store user in localStorage and go to home
//       localStorage.setItem("user", JSON.stringify(data.user));
//       // alert(isLogin ? "Login successful!" : "Registration successful!");
//       navigate("/home");
//       // navigate("/happy-birthday");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="container" id="container">
//       {/* Sign Up Form */}
//       <div className="form-container sign-up">
//         <form onSubmit={handleSubmit}>
//           <h1>Create account</h1>
//           <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>

//       {/* Sign In Form */}
//       <div className="form-container sign-in">
//         <form onSubmit={handleSubmit}>
//           <h1>Sign In</h1>
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>

//       {/* Toggle Panel */}
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected, please login</p>
//             <button className="hidden" id="login">Sign In</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register with your personal info</p>
//             <button className="hidden" id="register">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     const registerBtn = document.getElementById("register");
//     const loginBtn = document.getElementById("login");

//     registerBtn?.addEventListener("click", () => {
//       setIsLogin(false);
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener("click", () => {
//       setIsLogin(true);
//       container.classList.remove("active");
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5200/api/auth/login"
//         : "http://localhost:5200/api/auth/register";

//       const dataToSend = isLogin
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const { data } = await axios.post(endpoint, dataToSend);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div
//       id="container"
//       className="relative w-full max-w-5xl mx-auto min-h-[500px] bg-white shadow-lg rounded-xl overflow-hidden flex"
//     >
//       {/* Sign Up Form */}
//       <div className={`w-1/2 p-8 ${isLogin ? "hidden" : "block"}`}>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <h1 className="text-3xl font-bold text-center text-gray-700">Create account</h1>
//           <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="p-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-2 border rounded" />
//           <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Sign Up</button>
//         </form>
//       </div>

//       {/* Sign In Form */}
//       <div className={`w-1/2 p-8 ${isLogin ? "block" : "hidden"}`}>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <h1 className="text-3xl font-bold text-center text-gray-700">Sign In</h1>
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-2 border rounded" />
//           <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Sign In</button>
//         </form>
//       </div>

//       {/* Toggle Panel */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex flex-col items-center justify-center text-center p-10">
//         {isLogin ? (
//           <>
//             <h1 className="text-3xl font-bold">Hello, Friend!</h1>
//             <p className="mb-4">Register with your personal info</p>
//             <button id="register" className="border px-6 py-2 rounded hover:bg-white hover:text-pink-600 transition">Sign Up</button>
//           </>
//         ) : (
//           <>
//             <h1 className="text-3xl font-bold">Welcome Back!</h1>
//             <p className="mb-4">To keep connected, please login</p>
//             <button id="login" className="border px-6 py-2 rounded hover:bg-white hover:text-purple-600 transition">Sign In</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     const registerBtn = document.getElementById("register");
//     const loginBtn = document.getElementById("login");

//     registerBtn?.addEventListener("click", () => {
//       setIsLogin(false);
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener("click", () => {
//       setIsLogin(true);
//       container.classList.remove("active");
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5200/api/auth/login"
//         : "http://localhost:5200/api/auth/register";

//       const dataToSend = isLogin
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const { data } = await axios.post(endpoint, dataToSend);

//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-200 font-[Montserrat]">
//       <div
//         id="container"
//         className={`relative bg-white rounded-[30px] w-[768px] max-w-full min-h-[480px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 ${
//           isLogin ? "" : "active"
//         }`}
//       >
//         {/* Sign Up Form */}
//         <div
//           className={`form-container absolute top-0 w-1/2 h-full transition-all duration-500 ${
//             isLogin ? "opacity-0 z-1" : "translate-x-full opacity-100 z-[5] animate-fadeIn"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center items-center h-full px-10"
//           >
//             <h1 className="text-3xl font-bold mb-4">Create account</h1>
//             <div className="social-icons flex gap-2 mb-4">
//               {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="border border-gray-300 w-10 h-10 flex items-center justify-center rounded-md text-gray-700"
//                 >
//                   <i className={`fab fa-${icon}`}></i>
//                 </a>
//               ))}
//             </div>
//             <span className="text-xs mb-2">or use your email for registration</span>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div
//           className={`form-container absolute top-0 w-1/2 h-full transition-all duration-500 z-[2] ${
//             isLogin ? "" : "translate-x-full"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center items-center h-full px-10"
//           >
//             <h1 className="text-3xl font-bold mb-4">Sign-In</h1>
//             <div className="social-icons flex gap-2 mb-4">
//               {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="border border-gray-300 w-10 h-10 flex items-center justify-center rounded-md text-gray-700"
//                 >
//                   <i className={`fab fa-${icon}`}></i>
//                 </a>
//               ))}
//             </div>
//             <span className="text-xs mb-2">or use your email and password</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <a href="#" className="text-xs text-gray-600 my-2">
//               Forgot Password?
//             </a>
//             <button
//               type="submit"
//               className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//             >
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Toggle Panel */}
//         <div
//           className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500 z-[1000] ${
//             isLogin ? "" : "transform -translate-x-full rounded-l-[150px] rounded-r-[0px]"
//           }`}
//         >
//           <div
//             className={`bg-gradient-to-r from-indigo-500 to-indigo-700 h-full w-[200%] text-white flex justify-center items-center flex-col text-center px-8 transition-transform duration-500 ${
//               isLogin ? "" : "transform translate-x-1/2"
//             }`}
//           >
//             {isLogin ? (
//               <div className="w-1/2 flex flex-col items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold mb-2">Hello User please register</h1>
//                 <p className="text-sm mb-4">Register with your details to use all features</p>
//                 <button
//                   className="hidden border border-white py-2 px-6 rounded-md text-sm"
//                   id="register"
//                 >
//                   sign-up
//                 </button>
//               </div>
//             ) : (
//               <div className="w-1/2 flex flex-col items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold mb-2">Welcome Back User!</h1>
//                 <p className="text-sm mb-4">Enter your details to use all features</p>
//                 <button
//                   className="hidden border border-white py-2 px-6 rounded-md text-sm"
//                   id="login"
//                 >
//                   sign-in
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>-------------------------------------------------------->>>>>WORKS
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [isLogin, setIsLogin] = useState(true);

//   useEffect(() => {
//     const container = document.getElementById("container");
//     const registerBtn = document.getElementById("register");
//     const loginBtn = document.getElementById("login");

//     registerBtn?.addEventListener("click", () => {
//       setIsLogin(false);
//       container.classList.add("active");
//     });

//     loginBtn?.addEventListener("click", () => {
//       setIsLogin(true);
//       container.classList.remove("active");
//     });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5200/api/auth/login"
//         : "http://localhost:5200/api/auth/register";

//       const dataToSend = isLogin
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const { data } = await axios.post(endpoint, dataToSend);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-[Montserrat]">
//       <div
//         id="container"
//         className={`relative w-[768px] max-w-full min-h-[480px] rounded-[20px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white transition-all duration-700 ${
//           isLogin ? "" : "active"
//         }`}
//       >
//         {/* Sign Up Form */}
//         <div
//           className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ${
//             isLogin
//               ? "opacity-0 z-[1]"
//               : "translate-x-full opacity-100 z-[5] animate-fadeIn"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center items-center h-full px-10"
//           >
//             <h1 className="text-3xl font-bold mb-4">Create account</h1>
//             <div className="flex gap-3 mb-4">
//               {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
//                 >
//                   <i className={`fab fa-${icon}`}></i>
//                 </a>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 mb-2">or use your email for registration</span>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>

//         {/* Sign In Form */}
//         <div
//           className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 z-[2] ${
//             isLogin ? "" : "translate-x-full"
//           }`}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center items-center h-full px-10"
//           >
//             <h1 className="text-3xl font-bold mb-4">Sign-In</h1>
//             <div className="flex gap-3 mb-4">
//               {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
//                 >
//                   <i className={`fab fa-${icon}`}></i>
//                 </a>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 mb-2">or use your email and password</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="email"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//               className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//             />
//             <a href="#" className="text-xs text-gray-600 my-2">Forgot Password?</a>
//             <button
//               type="submit"
//               className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//             >
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Toggle Panel */}
//         <div
//           className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 z-[1000] ${
//             isLogin ? "" : "transform -translate-x-full"
//           }`}
//         >
//           <div
//             className={`bg-gradient-to-r from-[#5c6bc0] to-[#512da8] h-full w-[200%] text-white flex justify-center items-center flex-col text-center px-8 transition-transform duration-700 rounded-l-[150px] ${
//               isLogin ? "" : "transform translate-x-1/2 rounded-l-[0px] rounded-r-[150px]"
//             }`}
//           >
//             {isLogin ? (
//               <div className="w-1/2 flex flex-col items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold mb-2">Hello User please register</h1>
//                 <p className="text-sm mb-4">Register with your details to use all features</p>
//                 <button
//                   className="border border-white py-2 px-6 rounded-md text-sm hover:bg-white hover:text-[#512da8] transition"
//                   id="register"
//                 >
//                   SIGN-UP
//                 </button>
//               </div>
//             ) : (
//               <div className="w-1/2 flex flex-col items-center justify-center h-full">
//                 <h1 className="text-2xl font-bold mb-2">Welcome Back User!</h1>
//                 <p className="text-sm mb-4">Enter your details to use all features</p>
//                 <button
//                   className="border border-white py-2 px-6 rounded-md text-sm hover:bg-white hover:text-[#512da8] transition"
//                   id="login"
//                 >
//                   SIGN-IN
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function AuthForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [isLogin, setIsLogin] = useState(true);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5200/api/auth/login"
//         : "http://localhost:5200/api/auth/register";

//       const dataToSend = isLogin
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const { data } = await axios.post(endpoint, dataToSend);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       navigate("/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-[Montserrat]">
//       <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-[30px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
//         {/* Forms Container */}
//         <div
//           className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out ${
//             isLogin ? "" : "-translate-x-1/2"
//           }`}
//         >
//           {/* Sign In */}
//           <div className="w-1/2 h-full flex justify-center items-center">
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col items-center justify-center h-full px-10 text-center w-full"
//             >
//               <h1 className="text-3xl font-bold mb-4">Sign-In</h1>
//               <div className="flex gap-3 mb-4">
//                 {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
//                   >
//                     <i className={`fab fa-${icon}`}></i>
//                   </a>
//                 ))}
//               </div>
//               <span className="text-xs text-gray-500 mb-2">
//                 or use your email and password
//               </span>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//               />
//               <a href="#" className="text-xs text-gray-600 my-2">
//                 Forgot Password?
//               </a>
//               <button
//                 type="submit"
//                 className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>

//           {/* Sign Up */}
//           <div className="w-1/2 h-full flex justify-center items-center">
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col items-center justify-center h-full px-10 text-center w-full"
//             >
//               <h1 className="text-3xl font-bold mb-4">Create account</h1>
//               <div className="flex gap-3 mb-4">
//                 {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
//                   >
//                     <i className={`fab fa-${icon}`}></i>
//                   </a>
//                 ))}
//               </div>
//               <span className="text-xs text-gray-500 mb-2">
//                 or use your email for registration
//               </span>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Overlay Panel */}
//         <div
//           className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out z-10 ${
//             isLogin ? "" : "-translate-x-full"
//           }`}
//         >
//           <div className="relative h-full w-full bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white flex items-center justify-center rounded-l-[150px] transition-all duration-700">
//             <div className="text-center px-8">
//               <h1 className="text-2xl font-bold mb-2">
//                 {isLogin ? "Hello User please register" : "Welcome Back User!"}
//               </h1>
//               <p className="text-sm mb-4">
//                 {isLogin
//                   ? "Register with your details to use all features"
//                   : "Enter your details to use all features"}
//               </p>
//               <button
//                 onClick={() => setIsLogin((prev) => !prev)}
//                 className="border border-white py-2 px-6 rounded-md text-sm hover:bg-white hover:text-[#512da8] transition"
//               >
//                 {isLogin ? "SIGN-UP" : "SIGN-IN"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin
        ? "http://localhost:5200/api/auth/login"
        : "http://localhost:5200/api/auth/register";

      const dataToSend = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const { data } = await axios.post(endpoint, dataToSend);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] font-[Montserrat]">
      <div
        id="container"
        className={`relative w-[768px] max-w-full min-h-[480px] bg-white rounded-[30px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.35)]`}
      >
        {/* Sign In */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full px-10 transition-all duration-700 ease-in-out z-[2] flex items-center justify-center ${
            isLogin ? "translate-x-0 opacity-100 z-[5]" : "-translate-x-full opacity-0 z-[1]"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-center items-center w-full"
          >
            <h1 className="text-3xl font-bold mb-4">Sign-In</h1>
            <div className="flex gap-3 mb-4">
              {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
            <span className="text-xs text-gray-500 mb-2">
              or use your email and password
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
            />
            <a href="#" className="text-xs text-gray-600 my-2">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3 cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Sign Up */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full px-10 transition-all duration-700 ease-in-out flex items-center justify-center ${
            isLogin
              ? "translate-x-full opacity-0 z-[1]"
              : "translate-x-0 opacity-100 z-[5]"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-center items-center w-full"
          >
            <h1 className="text-3xl font-bold mb-4">Create account</h1>
            <div className="flex gap-3 mb-4">
              {["google-plus-g", "facebook-f", "github", "linkedin-in"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md text-black shadow"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
            <span className="text-xs text-gray-500 mb-2">
              or use your email for registration
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="bg-gray-100 my-2 p-2 w-full text-sm rounded-md outline-none"
            />
            <button
              type="submit"
              className="bg-[#512da8] text-white text-xs font-semibold uppercase py-2 px-10 rounded-md mt-3 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out z-[1000] ${
            isLogin ? "" : "-translate-x-full"
          }`}
        >
          <div className="relative h-full w-full bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white flex items-center justify-center rounded-l-[150px] transition-all duration-700">
            <div className="text-center px-8">
              <h1 className="text-2xl font-bold mb-2">
                {isLogin ? "Hello User please register" : "Welcome Back User!"}
              </h1>
              <p className="text-sm mb-4">
                {isLogin
                  ? "Register with your details to use all features"
                  : "Enter your details to use all features"}
              </p>
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="border border-white py-2 px-6 rounded-md text-sm hover:bg-white hover:text-[#512da8] transition"
              >
                {isLogin ? "SIGN-UP" : "SIGN-IN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
