import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/MarketPlace'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AccountDetails from "./pages/AccountDetails";
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrollToTop';
import SellAccount from './pages/SellAccount';
import Contact from './pages/ContactPage';

export default function App() {
  return (
    <Router>

       <ScrollToTop />
      <div className="min-h-screen flex flex-col">
       <Navbar />

        {/* Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/account/:id/:handle" element={<AccountDetails />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/sell" element={<SellAccount />} />
            <Route path="/contact" element={<Contact />} />
            {/* Sell page route */}
            {/* <Route path="/sell" element={<SellPage />} /> */}
          </Routes>
        </div>

         <Footer />
      </div>
    </Router>
  )
}