"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const REGISTER_URL = "https://forms.gle/AzrVWXLTmcJjGP9R7";
const PAYMENT_URL = "https://amity.edu/eventspg/jaipur/HACKATHON2026/";

export default function Register() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="register"
      className="py-28 px-4 relative bg-[#05070f] overflow-hidden"
    >
      {/* Ambient glow — consistent with rest of page */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,255,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Faint grid, consistent with other sections */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-12 sm:p-16 relative overflow-hidden bg-[#0a0e1a] border border-[#efff00]/20 shadow-[0_0_60px_rgba(239,255,0,0.08)]"
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
            <p className="text-[#efff00] font-mono-code text-xs tracking-[0.3em] uppercase mb-6">
              {/* &lt;/&gt; Registration */}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Register for{" "}
              <span
                className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                style={{ textShadow: "0 0 25px rgba(239,255,0,0.4)" }}
              >
                AMIHACKS 2026
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Register for AMIHACKS 2026 in two simple steps. First, complete
              the registration payment, then submit the registration form
              along with your payment screenshot to confirm your
              participation. </p>
            <p className="text-slate-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed"> 
              <b><u>Special Bonus:</u></b> <i>Teams with at least one female member will be eligible for additional evaluation points, subject to the applicable terms and conditions. </i>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold text-white bg-white/[0.04] border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 hover:bg-white/[0.08] transition-all"
              >
                STEP 1 of 2 — Pay Registration Fee
              </a>

              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-lg font-semibold text-white bg-white/[0.04] border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 hover:bg-white/[0.08] transition-all"
              >
                Step 2 of 2 — Registration Form
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 text-left mt-8">
              <div className="rounded-xl p-5 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm">
                <h3 className="text-[#efff00] font-semibold mb-3">
                  Registration Highlights
                </h3>

                <ul className="text-slate-300 text-sm space-y-2">
                  <li>✓ Open to students across India</li>
                  <li>✓ 1 Team Captain + up to 3 Team Members</li>
                  <li>✓ ₹300(+ GST and payment gateway charges) per Team (Amity Students)</li>
                  <li>✓ ₹400(+ GST and payment gateway charges per Team (Other Colleges)</li>
                  <li>✓ ₹70,000+ Prize Pool</li>
                  <li>✓ Swags & Goodies</li>
                </ul>
              </div>

              <div className="rounded-xl p-5 bg-white/[0.03] border border-cyan-500/15 backdrop-blur-sm">
                <h3 className="text-[#efff00] font-semibold mb-3">
                  Important Information
                </h3>

                <ul className="text-slate-300 text-sm space-y-2">
                  <li>✓ Upload your payment screenshot with the registration form</li>
                  <li>✓ Participation Certificates</li>
                  <li>
                    ✓ Teams with at least one female member are eligible for
                    bonus evaluation marks as per event policy
                  </li>
                  <li>✓ Registrations are confirmed only after successful payment verification</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
