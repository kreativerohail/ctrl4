import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Smith",
      city: "London, UK",
      message: "Fast and professional service! My tyres were replaced at my home without any hassle.",
      rating: 5,
    },
    {
      name: "Olivia Johnson",
      city: "Manchester, UK",
      message: "Amazing mobile tyre fitting. Highly recommend for anyone needing quick service.",
      rating: 5,
    },
    {
      name: "Liam Williams",
      city: "Bristol, UK",
      message: "Efficient and friendly service. They balanced my wheels perfectly.",
      rating: 5,
    },
    {
      name: "Emily Brown",
      city: "Liverpool, UK",
      message: "Emergency puncture repair done quickly on the roadside. Very impressed!",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className="relative bg-[#0b0c1c] py-20 px-6 sm:px-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-white">What Our</span>{" "}
          <span className="text-[#00ff99]">Clients Say</span>
        </motion.h2>

        <p className="text-white/70 mt-4">
          Trusted by drivers across the UK. Hear from our happy customers!
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto">
        <div className="relative min-h-70 sm:min-h-80">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30
                         rounded-2xl p-6 sm:p-8 text-white absolute inset-0
                         transition-all
                         ${i === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={i === current ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="text-[#00ff99] text-3xl mb-4" />
              <p className="text-lg sm:text-base text-[#00ff99] mb-4 leading-relaxed">
                “{t.message}”
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm opacity-70">{t.city}</p>
                <div className="mt-1 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-xl drop-shadow-md">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 bottom-4 z-20 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full text-[#00ff99] bg-[#001f3f]/70 hover:bg-[#00ff99]/30 transition shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 bottom-4 z-20 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full text-[#00ff99] bg-[#001f3f]/70 hover:bg-[#00ff99]/30 transition shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition
                         ${i === current ? "bg-[#00ff99]" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
