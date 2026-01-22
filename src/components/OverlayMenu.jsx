import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showServices, setShowServices] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "90% 6%" : "50% 6%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-1000 flex flex-col items-center justify-start pt-28
                     bg-[#020617]"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-cyan-400 hover:text-cyan-300
                       text-3xl transition z-1100"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* MENU LINKS */}
          <ul className="space-y-8 text-center w-full z-1050">

            {/* HOME */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/"
                onClick={onClose}
                className="text-2xl font-semibold text-white
                           hover:text-cyan-400 transition"
              >
                Home
              </Link>
            </motion.li>

            {/* ABOUT */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/about"
                onClick={onClose}
                className="text-2xl font-semibold text-white
                           hover:text-cyan-400 transition"
              >
                About CTRL4
              </Link>
            </motion.li>

            {/* SERVICES */}
            <motion.li
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <span className="text-2xl font-semibold text-white cursor-pointer
                               hover:text-cyan-400 transition">
                Services
              </span>

              <AnimatePresence>
                {showServices && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-6
                               bg-[#020617]/95 backdrop-blur-xl
                               border border-cyan-500/30
                               rounded-2xl px-8 py-6 space-y-4
                               min-w-65
                               shadow-[0_0_30px_rgba(34,211,238,0.2)]
                               z-1200"
                  >
                    {[
                      { label: "Solution Consulting", path: "#solutions" },
                      { label: "BPO Advisory", path: "#bpo" },
                      { label: "Cybersecurity Awareness", path: "#cyber" },
                      { label: "SME Growth Enablement", path: "#growth" },
                    ].map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.path}
                          onClick={onClose}
                          className="block text-center text-slate-200
                                     hover:text-cyan-400 transition font-medium"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            {/* CONTACT */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="text-2xl font-semibold text-white
                           hover:text-cyan-400 transition"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
