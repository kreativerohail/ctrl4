import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Main from "./pages/Main.jsx";

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
        </Routes>
      </div>
    </Router>
  );
}
