import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../assets/llg.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const lastScrollY = useRef(0);

  const services = [
    { name: "Solution Consulting", path: "/solution-consulting" },
    { name: "BPO Advisory", path: "/bpo-advisory" },
    { name: "Cybersecurity Awareness", path: "/cybersecurity-awareness" },
    { name: "SME Growth Enablement", path: "/smegrowth-enablement" },
  ];

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-500/20`}
      >
        <div className="relative max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6">

          {/* LOGO – MOBILE LEFT */}
<Link
  to="/"
  className="absolute left-[0px] top-1/2 -translate-y-1/2
             lg:static lg:translate-y-0
             flex items-center gap-2"
>
  <img
    src={Logo}
    alt="CTRL4 Logo"
    className="h-10 lg:h-18 w-auto object-contain"
  />

  {/* BRAND TEXT */}
<span className="text-cyan-400 font-bold text-lg lg:text-xl tracking-wide
                 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
  CTRL4
</span>
</Link>

          {/* DESKTOP LINKS – CENTERED */}
          <div
            className="hidden lg:flex items-center gap-10 text-slate-200 text-sm
            absolute left-1/2 -translate-x-1/2"
          >
            {["Home", "About"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="relative group flex items-center gap-1">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64
                bg-[#020617]/95 backdrop-blur-xl
                border border-cyan-500/30
                rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)]
                overflow-hidden">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      to={service.path}
                      className="block px-6 py-4 text-slate-200
                        hover:bg-cyan-500/10 hover:text-cyan-300 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 ml-auto">
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-6 py-2 rounded-xl
              bg-cyan-500 text-[#020617] font-semibold
              shadow-[0_0_20px_rgba(34,211,238,0.4)]
              hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="text-cyan-400 text-3xl lg:hidden hover:scale-110 transition"
              aria-label="Open Menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
