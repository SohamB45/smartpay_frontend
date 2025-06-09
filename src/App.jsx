// import DonatePage from "./pages/DonatePage";
// import Home from "./pages/Home";
// import DonateForm  from "./pages/DonateForm";
// import { Routes, Route } from 'react-router-dom';
// import AuthPage from "./pages/authPage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<AuthPage />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/donate-form" element={<DonateForm />} />
//       <Route path="/donate/:id" element={<DonatePage />} />
//       <Route path="*" element={<div>404 Not Found</div>} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DonatePage from "./pages/donate/DonatePage";
import DonateForm from "./pages/donate/DonateForm";
import AuthForm from "./components/authForm";
import BirthdayPage from "./pages/bday/BP";
import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentFailed from './pages/payment/PaymentFailed';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/happy-birthday" element={<BirthdayPage />} />
      <Route path="/donate-form" element={<DonateForm />} />
      <Route path="/donate/:id" element={<DonatePage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/thank-you" element={<PaymentSuccess />} />
      <Route path="/payment-failed" element={<PaymentFailed />} />
    </Routes>
  );
}

export default App;
