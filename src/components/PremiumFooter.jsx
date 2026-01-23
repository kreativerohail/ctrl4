import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PremiumFooter() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Solution Consulting", path: "/solution-consulting" },
    { name: "BPO Advisory", path: "/bpo-advisory" },
    { name: "Cybersecurity Awareness", path: "/cybersecurity-awareness" },
    { name: "SME Growth Enablement", path: "/smegrowth-enablement" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaEnvelope, link: "mailto:riz.aziz@ctrl4.co.uk" },
  ];

  return (
    <footer className="relative bg-[#010517] text-white pt-24 pb-12 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-30, 30, -30], rotate: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-400/10 blur-[180px] rounded-full"
      />
      <motion.div
        animate={{ x: [30, -30, 30], y: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/20 to-blue-400/10 blur-[180px] rounded-full"
      />

      {/* Top CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-md rounded-xl py-6 mb-16 border border-white/10 shadow-lg"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">
            Ready to elevate your business?
          </h3>
          <p className="text-white/70 mt-1 text-sm">
            Let’s simplify complexity, strengthen execution, and scale with clarity.
          </p>
        </div>
        <Link to="/contact">
          <button className="mt-3 md:mt-0 px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Contact CTRL4
          </button>
        </Link>
      </motion.div>

      {/* Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand + Short Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-cyan-400">CTRL4</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            UK-first consulting approach: simplify complexity, strengthen execution, and scale with clarity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-white/70 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white text-lg">Connect</h3>
          <div className="flex items-center gap-5 text-white/70">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                <item.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/50 text-sm relative z-10">
        &copy; {new Date().getFullYear()} CTRL4. All rights reserved.
      </div>
    </footer>
  );
}
