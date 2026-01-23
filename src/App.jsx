import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Main from "./pages/Main.jsx";
import PremiumFooter from "./components/PremiumFooter.jsx";
import SolutionConsulting from "./pages/SolutionConsulting.jsx";
import BPOAdvisory from "./pages/BPOAdvisory.jsx";
import CybersecurityAwareness from "./pages/CybersecurityAwareness.jsx";
import SmeGrowthEnablement from "./pages/SmeGrowthEnablement.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Router>
      <div className="relative text-white min-h-screen">
        <CustomCursor />
        <WhatsAppButton
          phone="447459745929"
          message="Hello! I saw your website and would like to connect with You."
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/solution-consulting" element={<SolutionConsulting/>} />
          <Route path="/bpo-advisory" element={<BPOAdvisory/>} />
          <Route path="/cybersecurity-awareness" element={<CybersecurityAwareness/>} />
          <Route path="/smegrowth-enablement" element={<SmeGrowthEnablement/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <PremiumFooter/>
      </div>
    </Router>
  );
}
