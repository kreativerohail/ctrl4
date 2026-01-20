import { FaUsers, FaTools, FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0b0c1c] px-6 sm:px-16 pt-28 pb-20">

      {/* HEADER */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
          About <span className="text-[#00ff99]">Us</span>
        </h1>
        <p className="text-white/70 mt-4">
          UK Mobile Tyres is the UK's leading mobile tyre service. We bring professional tyre fitting, replacement, and repair directly to your location, saving you time and hassle.
        </p>
      </motion.div>

      {/* MISSION & VISION */}
      <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 text-white"
        >
          <h2 className="text-3xl font-bold text-[#00ff99]">Our Mission</h2>
          <p className="text-white/80">
            To provide fast, reliable, and professional mobile tyre services across the UK, ensuring safety and convenience for every customer.
          </p>

          <h2 className="text-3xl font-bold text-[#00ff99]">Our Vision</h2>
          <p className="text-white/80">
            To be the most trusted mobile tyre experts in the country, delivering exceptional service wherever our customers need us.
          </p>
        </motion.div>

        {/* IMAGE OR ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md h-64 bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30 rounded-2xl flex items-center justify-center text-[#00ff99] text-6xl font-bold">
            🚗
          </div>
        </motion.div>
      </div>

      {/* WHY CHOOSE US CARDS */}
      <div className="max-w-6xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">

        {[
          { icon: <FaUsers />, title: "Professional Team", desc: "Experienced and certified tyre technicians." },
          { icon: <FaTools />, title: "Modern Equipment", desc: "We use top-quality tools for safe fitting." },
          { icon: <FaCar />, title: "On-Site Service", desc: "We come to your home, office, or roadside." },
          { icon: <FaMapMarkerAlt />, title: "UK Coverage", desc: "Providing services all across the United Kingdom." },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30 rounded-2xl p-6 text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl text-[#00ff99] mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm opacity-70 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-4 text-center bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30 rounded-2xl p-6 text-white">
        {[
          ["1.2K+", "Tyres Fitted"],
          ["500+", "Happy Clients"],
          ["99%", "Satisfaction"],
          ["10+", "Years Experience"]
        ].map(([num, label], i) => (
          <div key={i}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00ff99]">{num}</h2>
            <p className="text-sm opacity-70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
