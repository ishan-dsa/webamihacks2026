"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who can participate in AMIHACKS 2026?",
    a: "AMIHACKS 2026 is open to all students enrolled at Amity University Rajasthan. Whether you are a fresher or a final-year student, you are welcome to participate.",
  },
  {
    q: "What is the team size?",
    a: "Teams can have 1 to 4 members. Each team must have one designated Team Captain who is responsible for registration and communication. Solo participation is allowed — you may also find teammates at the event.",
  },
  {
    q: "Is there a registration fee?",
    a: "Details about registration fees will be communicated during the registration process. Check the official registration form for up-to-date information.",
  },
  {
    q: "Do participants receive certificates?",
    a: "Yes! All participants who complete the hackathon will receive certificates of participation. Winners and special award recipients will receive additional recognition certificates.",
  },
  {
    q: "Can first-year students participate?",
    a: "Absolutely! First-year students are encouraged to participate. AMIHACKS is a learning experience as much as a competition — everyone walks away with new skills, connections, and insights.",
  },
  {
    q: "What should participants bring?",
    a: "Bring your laptop, chargers, any hardware you plan to use for your project, and a strong problem-solving mindset. All software tools, APIs, and frameworks can be used freely. Food and refreshments will be provided throughout the event.",
  },
];

function FAQItem({ q, a, i, inView }: { q: string; a: string; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
      className="border-b border-white/8 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span className="text-white/80 group-hover:text-white text-base font-medium transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 group-hover:border-neon/40 flex items-center justify-center transition-all">
          {open ? (
            <Minus size={14} className="text-neon" />
          ) : (
            <Plus size={14} className="text-white/40 group-hover:text-neon transition-colors" />
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
            <p className="text-white/45 text-sm leading-relaxed pb-5 max-w-2xl">
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
    <section id="faq" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-neon font-mono-code text-xs tracking-[0.3em] uppercase mb-4"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          Common <span className="neon-text">Questions</span>
        </motion.h2>

        <div className="glass-card rounded-2xl px-6 sm:px-8">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
