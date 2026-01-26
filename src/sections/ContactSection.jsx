import { motion } from "framer-motion";
import { FaLock, FaClock, FaUserTie } from "react-icons/fa";

export default function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const res = await fetch(
        "https://ctrl-backend-three.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Server error");
      }

      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#020617] py-20 px-6 sm:px-16 overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* AMBIENT */}
      <div className="absolute -top-32 right-[-10%] w-[520px] h-[520px] bg-cyan-500/10 blur-[260px]" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[520px] h-[520px] bg-emerald-500/5 blur-[260px]" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto text-center mb-24"
      >
        <p className="uppercase tracking-[0.45em] text-xs text-cyan-400 mb-5">
          Contact
        </p>

        <h2 className="text-white text-4xl sm:text-5xl font-extrabold">
          Let’s discuss
          <span className="block text-cyan-400 mt-2">
            leadership-level decisions
          </span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="h-px bg-cyan-400/60 mx-auto mt-10"
        />
      </motion.div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-white text-2xl font-semibold">
            Senior advisory engagement
          </h3>

          <p className="mt-6 text-slate-300 text-lg max-w-xl">
            This is not a sales enquiry. We work directly with executives and
            boards who require clarity, discretion, and decisive execution.
          </p>

          <div className="mt-14 space-y-6">
            {[
              {
                icon: <FaLock />,
                title: "Strict confidentiality",
                desc: "All conversations are private and protected.",
              },
              {
                icon: <FaClock />,
                title: "24-hour response",
                desc: "Reviewed directly by senior consultants.",
              },
              {
                icon: <FaUserTie />,
                title: "Board-level experience",
                desc: "Decisions supported at the highest level.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="text-cyan-400 mt-1 text-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/[0.035] backdrop-blur-2xl border border-white/10 rounded-3xl p-10 sm:p-14 w-full max-w-xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <label className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                Full Name
              </label>
              <input
                name="name"
                required
                className="w-full mt-3 bg-transparent border-b border-white/25 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-3 bg-transparent border-b border-white/25 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                Company
              </label>
              <input
                name="company"
                className="w-full mt-3 bg-transparent border-b border-white/25 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-3 bg-transparent border-b border-white/25 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/45 text-sm text-center sm:text-left">
              Selective engagements only.
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-cyan-500 text-[#020617] text-sm font-semibold tracking-wide shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Request Discussion
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
