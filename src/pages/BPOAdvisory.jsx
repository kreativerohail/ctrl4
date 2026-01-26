import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaProjectDiagram,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

export default function BPOAdvisory() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const highlights = [
    {
      icon: <FaProjectDiagram />,
      title: "Process Optimization",
      desc: "Analyze and redesign workflows to improve efficiency and reduce operational costs.",
    },
    {
      icon: <FaHeadset />,
      title: "Contact Center Excellence",
      desc: "Enhance customer engagement with best practices, KPIs, and performance monitoring.",
    },
    {
      icon: <FaUsers />,
      title: "Team Scaling",
      desc: "Support growth with operator-led guidance for hiring, training, and retention strategies.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      desc: "Implement real-time dashboards and metrics for actionable insights and continuous improvement.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch(
        "https://ctrl-backend-three.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );

      if (res.ok) {
        setSuccess(true); // trigger modal
        e.target.reset();
      } else {
        alert("Something went wrong");
      }
    } catch {
      alert("Network error");
    }
  };

  return (
    <section className="relative bg-[#050518] px-6 sm:px-16 pt-32 pb-32 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20], rotate: [0, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 blur-[250px] rounded-full"
      />
      <motion.div
        animate={{ x: [40, -40, 40], y: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-500/20 to-green-400/10 blur-[250px] rounded-full"
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-[#6ad1ff] mb-4">
          BPO Advisory
        </p>
        <h1 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
          Optimize operations and <br />
          <span className="text-[#6ad1ff]">scale your BPO teams</span>
        </h1>
        <p className="text-white/70 mt-6 leading-relaxed max-w-2xl mx-auto">
          Our BPO Advisory services guide organisations to improve efficiency,
          enhance performance, and scale operations with operator-led expertise.
        </p>
      </motion.div>

      {/* HIGHLIGHTS */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 mb-24">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-cyan-400 text-5xl mt-1">{item.icon}</div>
            <div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FEATURES + FORM */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        {/* LEFT – Features */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-cyan-400 mt-1 text-2xl" />
            <p className="text-white/80 text-lg leading-relaxed">
              Tailored operational guidance to streamline BPO processes and delivery models.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-cyan-400 mt-1 text-2xl" />
            <p className="text-white/80 text-lg leading-relaxed">
              Operator-led advisory helping executives scale teams and reduce operational cost.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-cyan-400 mt-1 text-2xl" />
            <p className="text-white/80 text-lg leading-relaxed">
              Performance dashboards and analytics ensuring measurable improvements.
            </p>
          </div>
        </motion.div>

        {/* RIGHT – Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/[0.035] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-lg"
        >
          <h3 className="text-white text-2xl font-semibold mb-10 text-center">
            Request a BPO Consultation
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Floating Inputs */}
            {[
              { label: "Full Name", name: "name", required: true },
              { label: "Email", name: "email", type: "email", required: true },
            ].map((field, i) => (
              <div key={i} className="relative w-full">
                <input
                  {...field}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/25 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition"
                />
                <label className="absolute left-0 top-3 text-white/50 text-[11px] uppercase tracking-[0.3em] transition-all
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-[11px]
                  peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-[10px] pointer-events-none">
                  {field.label}
                </label>
              </div>
            ))}

            {/* Company */}
            <div className="sm:col-span-2 relative w-full">
              <input
                name="company"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/25 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition"
              />
              <label className="absolute left-0 top-3 text-white/50 text-[11px] uppercase tracking-[0.3em] transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-[11px]
                peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-[10px] pointer-events-none">
                Company
              </label>
            </div>

            {/* Message */}
            <div className="sm:col-span-2 relative w-full">
              <textarea
                name="message"
                rows="4"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/25 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition resize-none"
              />
              <label className="absolute left-0 top-3 text-white/50 text-[11px] uppercase tracking-[0.3em] transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-[11px]
                peer-focus:-top-2 peer-focus:text-cyan-400 peer-focus:text-[10px] pointer-events-none">
                Message
              </label>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="mt-12 w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#020617] font-semibold rounded-lg shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all hover:scale-105"
          >
            Request Discussion
          </motion.button>

          <p className="text-white/45 text-sm mt-4 text-center">Selective engagements only.</p>
        </motion.form>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div className="bg-[#050518] text-white rounded-2xl p-10 sm:p-16 max-w-sm text-center shadow-lg">
              <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Success!</h3>
              <p className="text-white/70 mb-6">
                Your message has been sent successfully. We will get back to you soon.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSuccess(false)}
                className="mt-2 w-full py-2 bg-cyan-400 text-[#020617] rounded-lg font-semibold transition"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
