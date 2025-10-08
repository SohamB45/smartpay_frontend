

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DonatePage from "./pages/donate/DonatePage";
import DonateForm from "./pages/donate/DonateForm";
import AuthForm from "./components/authForm";

import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentFailed from './pages/payment/PaymentFailed';
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/home" element={<div><Home /> <ChatWidget /> </div>}  />
      
      
      <Route path="/donate-form" element={<DonateForm />} />
      <Route path="/donate/:id" element={<DonatePage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/thank-you" element={<PaymentSuccess />} />
      <Route path="/payment-failed" element={<PaymentFailed />} />
    </Routes>
  );
}

export default App;
