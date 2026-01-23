import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaNetworkWired,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb />,
      title: "Solution Consulting",
      desc: "We align strategy with execution to enable confident decision-making, operational clarity, and scalable growth.",
    },
    {
      icon: <FaCogs />,
      title: "BPO Advisory",
      desc: "Operator-led guidance to optimise delivery models, reduce cost leakage, and scale teams sustainably.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness",
      desc: "Board-level and team-focused cybersecurity awareness to protect digital assets and reduce exposure.",
    },
    {
      icon: <FaRocket />,
      title: "Digital Transformation",
      desc: "Modernisation of systems, processes, and platforms to future-proof operations.",
    },
  ];

  return (
    <section id="services" className="relative bg-[#050518] px-6 sm:px-16 pt-32 pb-32 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-225 bg-[#0099ff]/10 blur-[140px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-[#6ad1ff] mb-4">
          Strategic Advantage
        </p>
        <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
          Consulting built for <br />
          <span className="text-[#6ad1ff]">decision-makers</span>
        </h2>
        <p className="text-white/70 mt-6 leading-relaxed max-w-2xl mx-auto">
          CTRL4 partners with leadership teams to simplify complexity,
          strengthen execution, and build scalable operating models.
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* LEFT – Sticky Strategy Column */}
        <div className="lg:sticky top-36 self-start space-y-10">
          <p className="text-white/80 text-lg leading-relaxed">
            We work closely with founders, executives, and operators to
            unlock clarity where it matters most — operations, people,
            technology, and growth.
          </p>

          <div className="border-l-2 border-[#6ad1ff] pl-6 space-y-4">
            <p className="text-white font-medium">✔ UK-first consulting mindset</p>
            <p className="text-white font-medium">✔ Operator-led strategy</p>
            <p className="text-white font-medium">✔ Measurable business outcomes</p>
          </div>

          <Link to="/contact">
            <button className="mt-6 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              Schedule a strategic discussion
            </button>
          </Link>
        </div>

        {/* RIGHT – Vertical Timeline */}
        <div className="space-y-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ x: 12 }}
              className="relative pl-12 border-l border-white/10"
            >
              {/* Timeline dot */}
              <span className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-[#6ad1ff]" />

              {/* Icon */}
              <div className="text-[#6ad1ff] text-2xl mb-3">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-white/70 mt-3 leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Trust CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center mt-32"
      >
        <p className="text-white/60 text-sm tracking-wide mb-4">
          Trusted by UK SMEs, BPO operators & digital-first organisations
        </p>

        <h3 className="text-white text-2xl sm:text-3xl font-semibold">
          Ready to move with clarity and confidence?
        </h3>

        <div className="flex justify-center gap-6 mt-8">
          <Link to="/contact">
            <button className="px-8 py-4 rounded-full bg-[#6ad1ff] text-black font-semibold hover:scale-105 transition">
              Contact Us
            </button>
          </Link>

          <a
            href="mailto:riz.aziz@ctrl4.co.uk"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

