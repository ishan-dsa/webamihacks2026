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
      className="py-28 px-6 bg-white/[0.01]">
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
              Registration
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Register for {" "}
              <span className="neon-text">AMIHACKS 2026</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
  Register for AMIHACKS 2026 in two simple steps. First, 
              complete the registration payment,
              then submit the registration form along with your payment screenshot to confirm your participation.
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">

  <a
    href={PAYMENT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-2 glass-card text-white font-semibold text-lg px-10 py-4 rounded-full hover:border-white/20 transition-all"
  >
    STEP 1 of 2- Pay Registration Fee
  </a>

  <a
    href={REGISTER_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-2 bg-neon text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-white transition-all duration-200 shadow-[0_0_40px_rgba(239,255,0,0.35)]"
  >
   Step 2 of 2- Registration Form
    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition-transform"
    />
  </a>

</div>

            <div className="grid sm:grid-cols-2 gap-5 text-left mt-8">

  <div className="glass-card rounded-xl p-5">
    <h3 className="text-neon font-semibold mb-3">
      Registration Highlights
    </h3>

    <ul className="text-white/70 text-sm space-y-2">
      <li>✓ Open to students across India</li>
     <li>✓ 1 Team Captain + up to 3 Team Members</li>
      <li>✓ ₹350 per Team (Amity Students)</li>
<li>✓ ₹450 per Team (Other Colleges)</li>
      <li>✓ ₹70,000+ Prize Pool</li>
      <li>✓ Swags & Goodies</li>
    </ul>
  </div>

  <div className="glass-card rounded-xl p-5">
    <h3 className="text-neon font-semibold mb-3">
      Important Information
    </h3>

    <ul className="text-white/70 text-sm space-y-2">
      <li>✓ Upload your payment screenshot with the registration form</li>
      <li>✓ Participation Certificates</li>
      <li>✓ Teams with at least one female member are eligible for bonus evaluation marks as per event policy </li>
      <li>✓ ✓ Registrations are confirmed only after successful payment verification. </li>
    </ul>
  </div>

</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
