"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Users } from "lucide-react";

const REGISTER_URL = "https://forms.gle/AzrVWXLTmcJjGP9R7";

export default function Register() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card-neon rounded-3xl p-12 sm:p-16 relative overflow-hidden"
        >
          {/* BG glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(239,255,0,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-6">
              Join the Movement
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Build Something{" "}
              <span className="neon-text">Amazing</span>?
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              24 hours. A problem to solve. A team to lead. ₹70,000+ on the
              line. What are you waiting for?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-neon text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_40px_rgba(239,255,0,0.35)] hover:shadow-[0_0_60px_rgba(239,255,0,0.5)]"
              >
                Register Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-neon/60" />
                <span>Register Early To Secure Your Spot</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <Users size={14} className="text-neon/60" />
                <span>Limited Seats Available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
