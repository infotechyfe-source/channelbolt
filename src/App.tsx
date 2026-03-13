import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Marketplace from "./pages/MarketPlace";
import AccountDetails from "./pages/AccountDetails";
import Checkout from "./pages/Checkout";
import SellAccount from "./pages/SellAccount";
import Contact from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HowItWorks from "./pages/HowItWorks";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import VerificationProcess from "./components/VerificationProcess";
import SellerGuide from "./components/SellerGuide";
import BuyerProtection from "./components/BuyerProtection";

import AdminDashboard from "./pages/AdminPage";
import AdminProtectedRoute from "./components/AdminRoute";
import AdminContactMessages from "./components/AdminContactMessage";
import RefundPolicy from "./pages/RefundPolicy";

export default function App() {
  return (
    <Router>
       <Toaster position="top-right" />
      <ScrollToTop />
      <Routes>

        {/* ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route path="/admin/contactmessages" element={<AdminContactMessages />} />

        {/* WEBSITE ROUTES */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />

              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/account/:id/:handle" element={<AccountDetails />} />
                  <Route path="/checkout/:id" element={<Checkout />} />
                  <Route path="/sell" element={<SellAccount />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                   <Route path="/refund" element={<RefundPolicy />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/verification" element={<VerificationProcess />} />
                  <Route path="/seller-guide" element={<SellerGuide />} />
                  <Route path="/buyer-protection" element={<BuyerProtection />} />
                </Routes>
              </div>

              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}