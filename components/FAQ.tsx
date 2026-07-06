"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who can participate in AMIHACKS 2026?",
    a: "AMIHACKS 2026 is open to students from colleges and universities across India. Participants must carry a valid student ID issued by their institution.",
  },
  {
    q: "What is the team size?",
    a: "Each team must have 1 Team Captain and can include up to 3 additional team members (maximum 4 members per team). Solo participation is also allowed. Teams with at least one female member are eligible for bonus evaluation marks as per the official event policy.",
  },
  {
    q: "How do I register?",
    a: "Registration is completed in two simple steps. First, pay the registration fee through the official payment portal. Then, submit the registration form along with your payment screenshot to confirm your participation.",
  },
  {
    q: "What is the registration fee?",
    a: "The registration fee is ₹300(+ GST & Payment gateway Charges) per team for Amity University Rajasthan students and ₹400(+ GST & Payment gateway Charges) per team for participants from other colleges. Please complete the payment through the official payment portal before submitting the registration form.",
  },
  {
    q: "What do participants receive?",
    a: "Participants will receive participation certificates, exciting swags and goodies, networking opportunities, mentorship, and a chance to compete for a prize pool worth ₹70,000+.",
  },
  {
    q: "Are food and refreshments provided?",
    a: "Self-Paid Food stalls and vending machines will be available throughout the event. Refreshments can be purchased separately by participants. A DJ Night will also be organized as part of the AMIHACKS experience.",
  },
  {
    q: "What should I bring to the hackathon?",
    a: "Please bring your laptop, charger, valid student ID card, any hardware required for your project, and everything needed to build your solution during the hackathon.",
  },
  {
    q: "Can participants use any programming language or technology?",
    a: "Yes. Teams are free to use any programming language, framework, hardware platform, or technology stack unless a specific problem statement mentions otherwise.",
  },
  {
    q: "How will projects be evaluated?",
    a: "Projects will be evaluated by the judging panel based on innovation, technical implementation, usability, impact, presentation, and adherence to the problem statement. Additional evaluation benefits may apply as per the official event policy.",
  },
  {
    q: "Will internet and power supply be available during the hackathon?",
    a: "Yes. High-speed internet connectivity and uninterrupted power supply will be available throughout the event to support all participating teams.",
  },
];

function FAQItem({
  q,
  a,
  i,
  inView,
}: {
  q: string;
  a: string;
  i: number;
  inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
      className="border-b border-cyan-500/10 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="text-white/90 group-hover:text-cyan-400 text-base font-medium transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500/20 group-hover:border-cyan-400/50 flex items-center justify-center transition-all">
          {open ? (
            <Minus size={14} className="text-cyan-400" />
          ) : (
            <Plus
              size={14}
              className="text-slate-400 group-hover:text-cyan-400 transition-colors"
            />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="relative py-28 px-6 overflow-hidden bg-[#05070f]"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs — cyan / violet, matching Hero */}
      <div
        className="absolute top-0 left-1/3 w-[550px] h-[550px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-cyan-400/70 font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          &lt;/&gt; FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          Frequently Asked{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            Questions
          </span>
        </motion.h2>

        <div className="rounded-2xl px-6 sm:px-8 bg-white/[0.03] border border-cyan-500/20 backdrop-blur-sm shadow-[0_0_25px_rgba(56,189,248,0.08)]">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} i={i} inView={inView} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          Still have questions? Reach out to the AMIHACKS organizing team
          through the official contact channels.
        </motion.p>
      </div>
    </section>
  );
}
