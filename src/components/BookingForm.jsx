import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function BookingForm({ defaultService }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#001f3f]/60 backdrop-blur-xl
                 border border-[#00ffff]/30
                 rounded-2xl p-8 space-y-5 text-white"
    >
      <h3 className="text-xl font-semibold text-center mb-4">
        Book Tyre Service
      </h3>

      {/* SERVICE */}
      <select
        name="service"
        defaultValue={defaultService}
        required
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      >
        <option value="">Select Service</option>
        <option>MOBILE TYRE FITTING</option>
        <option>CAR TYRES REPLACEMENT</option>
        <option>WHEEL BALANCING</option>
        <option>PUNCTURE REPAIRS</option>
      </select>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <input
        name="location"
        type="text"
        placeholder="Postcode / Location"
        required
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <input
        name="vehicle"
        type="text"
        placeholder="Vehicle / Tyre Size (optional)"
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Additional Details"
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <input
        type="hidden"
        name="time"
        value={new Date().toLocaleString()}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-[#00ff99] text-black
                   font-semibold shadow-[0_0_25px_#00ff99]
                   hover:scale-105 transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Confirm Booking"}
      </button>

      {success && (
        <p className="text-center text-[#00ff99] text-sm mt-2">
          ✅ Booking request sent successfully!
        </p>
      )}

      {error && (
        <p className="text-center text-red-400 text-sm mt-2">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </motion.form>
  );
}
