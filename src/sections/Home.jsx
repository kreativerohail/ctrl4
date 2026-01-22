import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx"
import { motion } from "framer-motion";

export default function Home() {

  const roles = useMemo(
    () => [
      "STRATEGIC CONSULTING",
      "OPERATIONAL EXCELLENCE",
      "CYBERSECURITY LEADERSHIP",
      "DIGITAL TRANSFORMATION",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timer = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1300);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 90);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020617]
                 px-6 sm:px-16 pt-36 overflow-hidden"
    >
      <ParticlesBackground/>
      {/* AMBIENT BACKGROUND */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px]
                      bg-cyan-500/10 blur-[280px]" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px]
                      bg-emerald-500/5 blur-[280px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[80px_1fr] gap-14">

        {/* ========== LEFT VERTICAL BRAND RAIL ========== */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-6 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-px h-32 bg-cyan-500/40" />
          <span className="text-cyan-400 text-[10px] tracking-[0.4em]
                           rotate-180 [writing-mode:vertical-rl]">
            CTRL4 ADVISORY
          </span>
          <div className="w-px h-32 bg-white/10" />
        </motion.div>

        {/* ========== MAIN CONTENT ========== */}
        <div>

          {/* ROLE STRIP */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-cyan-400 text-xs tracking-[0.35em] uppercase">
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="ml-1 text-cyan-400 animate-pulse">|</span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            className="text-white font-extrabold
                       text-4xl sm:text-5xl lg:text-6xl
                       leading-[1.1] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Where Leadership
            <br />
            <span className="text-cyan-400">
              Meets Clarity
            </span>
          </motion.h1>

          {/* PHILOSOPHY LINE (UNIQUE TOUCH) */}
          <motion.p
            className="mt-6 text-cyan-400/80 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Less noise. Better decisions. Stronger outcomes.
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-10 text-slate-300 text-lg
                       leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            CTRL4 advises senior leadership teams on navigating
            complexity across operations, security, and digital
            change — enabling confident decisions backed by
            structure, insight, and experience.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-14 flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl
                         bg-cyan-500 text-[#020617]
                         font-semibold tracking-wide
                         shadow-[0_0_28px_rgba(34,211,238,0.35)]
                         hover:-translate-y-0.5 transition"
            >
              Speak with an Advisor
            </a>

            <a
              href="#services"
              className="px-10 py-4 rounded-xl
                         border border-white/20
                         text-white font-medium
                         hover:border-cyan-400
                         hover:text-cyan-400 transition"
            >
              View Capabilities
            </a>
          </motion.div>

          {/* TRUST STRIP */}
<div className="mt-20 mb-10 grid grid-cols-2 sm:grid-cols-4 gap-10
                border border-white/10 rounded-xl p-6 text-center">
  {[
    ["10+ Years", "Leadership Experience"],
    ["UK & Global", "Client Engagements"],
    ["Board-Level", "Strategic Advisory"],
    ["Security-Led", "Delivery Approach"],
  ].map(([title, subtitle], i) => (
    <div key={i}>
      <h3 className="text-cyan-400 font-semibold">{title}</h3>
      <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
    </div>
  ))}
</div>


        </div>
      </div>
    </section>
  );
}
