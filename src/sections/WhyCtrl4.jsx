import { motion } from "framer-motion";
import { FaLightbulb, FaCogs, FaShieldAlt, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhyCtrl4PremiumUKStyle() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Strategic Clarity",
      desc: "Bridge business needs with actionable, tech-enabled strategies that drive measurable growth.",
    },
    {
      icon: <FaCogs />,
      title: "Hands-on Execution",
      desc: "We implement solutions end-to-end, ensuring operational excellence and tangible outcomes.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      desc: "Risk-aware frameworks and cybersecurity-first practices to protect your business assets.",
    },
    {
      icon: <FaRocket />,
      title: "Long-term Partnership",
      desc: "Focus on sustainable growth with strategic guidance and operational scaling support.",
    },
  ];

  return (
    <section className="relative bg-[#010517] px-6 sm:px-16 pt-32 pb-32 overflow-hidden">
      {/* Ambient Glow Background */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [-20, 20, -20], rotate: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 blur-[200px] rounded-full"
      />
      <motion.div
        animate={{ x: [30, -30, 30], y: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/20 to-green-400/10 blur-[200px] rounded-full"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center max-w-4xl mx-auto mb-24 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-cyan-400 mb-4">Why CTRL4</p>
        <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
          Smarter Solutions <br />
          <span className="text-cyan-400">for measurable impact</span>
        </h2>
        <p className="text-white/70 mt-6 leading-relaxed max-w-2xl mx-auto">
          Partnering with leadership teams to simplify complexity, strengthen execution, and scale with confidence.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* LEFT – Sticky Message Column */}
        <div className="lg:sticky top-32 self-start space-y-10">
          <p className="text-white/80 text-lg leading-relaxed">
            CTRL4’s approach ensures clarity where it matters most — operations, people, technology, and growth.
          </p>

          <div className="border-l-2 border-cyan-400 pl-6 space-y-4">
            <p className="text-white font-medium">✔ UK-first consulting mindset</p>
            <p className="text-white font-medium">✔ Operator-led strategy</p>
            <p className="text-white font-medium">✔ Tangible, measurable outcomes</p>
          </div>

          <Link to="/contact">
            <button className="mt-6 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              Schedule a discussion
            </button>
          </Link>
        </div>

        {/* RIGHT – Feature Timeline */}
        <div className="space-y-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ x: 12 }}
              className="relative pl-12 border-l border-white/10 group cursor-pointer"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-2.5 top-2 w-4 h-4 rounded-full bg-cyan-400 transition-all group-hover:scale-125" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                className="text-cyan-400 text-2xl mb-3"
              >
                {item.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <p className="text-white/70 mt-3 leading-relaxed max-w-xl">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-32"
      >
        <p className="text-white/60 text-sm tracking-wide mb-4">
          Trusted by UK SMEs, operators & digital-first organisations
        </p>

        <h3 className="text-white text-2xl sm:text-3xl font-semibold">
          Ready to scale with clarity and confidence?
        </h3>

      </motion.div>
    </section>
  );
}
