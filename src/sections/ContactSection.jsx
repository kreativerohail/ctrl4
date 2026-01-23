import { motion } from "framer-motion";

export default function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Backend URL from environment variable
    const API_URL = "http://localhost:5000";

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        const data = await res.json();
        alert(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Network error, please try again later.");
    }
  };

  return (
    <section className="relative bg-[#050518] px-6 sm:px-16 py-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 bg-[#6ad1ff]/10 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-2 gap-20"
      >
        {/* LEFT */}
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-[#6ad1ff] mb-4">
            Get In Touch
          </p>

          <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
            Let’s talk <br />
            <span className="text-[#6ad1ff]">strategy & execution</span>
          </h2>

          <p className="text-white/70 mt-6 leading-relaxed max-w-md">
            Whether you're scaling operations, refining delivery, or planning
            transformation — we’ll help you move forward with clarity.
          </p>
        </div>

        {/* RIGHT – FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="text-white/70 text-sm">Full Name</label>
            <input
              required
              name="name"
              className="mt-2 w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6ad1ff]"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm">Email Address</label>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6ad1ff]"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm">Company</label>
            <input
              name="company"
              className="mt-2 w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6ad1ff]"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm">How can we help?</label>
            <textarea
              required
              name="message"
              rows="4"
              className="mt-2 w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6ad1ff]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-4 rounded-full bg-[#6ad1ff] text-black font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
