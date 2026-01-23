import { FaUsers, FaLightbulb, FaChartLine, FaNetworkWired } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#050518] px-6 sm:px-16 pt-28 pb-20">

      {/* HEADER */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
          About <span className="text-[#6ad1ff]">CTRL4</span>
        </h1>
        <p className="text-white/70 mt-4 leading-relaxed">
          CTRL4 is a UK-first consulting brand helping businesses simplify complexity, strengthen execution, and scale confidently. We work with executives, boards, and teams to turn strategy into measurable outcomes.
        </p>
      </motion.div>

      {/* MISSION & VISION */}
      <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 text-white"
        >
          <h2 className="text-3xl font-bold text-[#6ad1ff]">Our Mission</h2>
          <p className="text-white/80">
            To empower UK businesses with tailored consulting solutions that drive clarity, accountability, and measurable growth.
          </p>

          <h2 className="text-3xl font-bold text-[#6ad1ff]">Our Vision</h2>
          <p className="text-white/80">
            To be the go-to consulting partner for SMEs, BPO operators, and digital-first organizations, enabling strategic excellence and scalable operations.
          </p>
        </motion.div>

        {/* IMAGE / ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md h-64 bg-[#001f3f]/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex items-center justify-center text-[#6ad1ff] text-6xl font-bold">
            📈
          </div>
        </motion.div>
      </div>

      {/* WHY CHOOSE US CARDS */}
      <div className="max-w-6xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">

        {[
          { icon: <FaUsers />, title: "Experienced Team", desc: "Consultants with board-level and operational expertise." },
          { icon: <FaLightbulb />, title: "Strategic Insights", desc: "Data-driven analysis to guide confident business decisions." },
          { icon: <FaChartLine />, title: "Operational Clarity", desc: "Frameworks and processes to ensure measurable results." },
          { icon: <FaNetworkWired />, title: "Technology Alignment", desc: "Optimizing your tech stack to scale efficiently." },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#001f3f]/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl text-[#6ad1ff] mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm opacity-70 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-4 text-center bg-[#001f3f]/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-white">
        {[
          ["200+", "Projects Delivered"],
          ["50+", "Satisfied Clients"],
          ["95%", "Client Retention"],
          ["10+", "Years Experience"]
        ].map(([num, label], i) => (
          <div key={i}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6ad1ff]">{num}</h2>
            <p className="text-sm opacity-70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
