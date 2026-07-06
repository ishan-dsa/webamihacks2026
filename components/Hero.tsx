"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";



const stats = [
  { value: "24", label: "Hours" },
  { value: "₹70K+", label: "Prize Pool" },
  { value: "For All", label: "Participation" },
  { value: "Captain + up to 3", label: "Team Members" },

];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
  "radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
         background:
  "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-20 text-center flex flex-col items-center">


         {/* Countdown */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 mb-5"
        >
          <p className="text-slate-500 text-xs font-mono-code tracking-widest uppercase">
            Hackathon Begins In
          </p>
          <Countdown />
        </motion.div>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 glass-card-neon rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse-slow" />
          <span className="text-slate-700 text-xs font-mono-code tracking-widest uppercase">
            24th–25th September 2026 · Jaipur
          </span>
        </motion.div>
        
{/* Main Heading */}
<motion.div
  custom={0.8}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="mb-8"
>
  <div className="flex items-center justify-center gap-8 sm:gap-12">

{/* AMIHACKS Logo */}
<Image
  src="/logo.png"
  alt="AMIHACKS Logo"
  width={520}
  height={260}
  priority
  className="h-20 sm:h-28 md:h-36 w-auto object-contain hover:scale-105 transition-all duration-300"
/>


{/* Glowing Divider */}
<div className="hidden sm:block w-px h-20 bg-neon/50 shadow-[0_0_15px_rgba(239,255,0,0.8)]" />



    
    {/* Amity Logo */}
<Image
  src="/amity-logo.jpg"
  alt="Amity University Rajasthan"
  width={180}
  height={180}
  priority
  className="h-20 sm:h-28 md:h-36 w-auto object-contain hover:scale-105 transition-all duration-300"
/>



  </div>
</motion.div>

        <motion.div
          custom={1.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono-code text-slate-600 text-lg sm:text-xl tracking-[0.3em] mb-6"
        >
          2026
        </motion.div>
       
        
      {/* Prize Banner */}
<motion.div
  custom={0.5}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="mb-5 flex justify-center"
>
  <div className="glass-card rounded-full border border-blue-200 px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 whitespace-nowrap">

    <span className="text-base sm:text-lg">🏆</span>

    <span className="text-blue-700 font-bold text-[11px] sm:text-sm font-mono-code tracking-wide">
      ₹70K+ PRIZE POOL
    </span>

    <div className="w-px h-4 bg-white/20" />

    <span className="text-base sm:text-lg">🎁</span>

    <span className="text-slate-700 font-semibold text-[11px] sm:text-sm font-mono-code tracking-wide">
      SWAGS & GOODIES
    </span>

  </div>
</motion.div>
        

        {/* Typewriter Tagline */}
<motion.div
  custom={2}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-4 tracking-wide min-h-[48px] flex justify-center items-center"
>
  <Typewriter />
</motion.div>

        {/* Subtitle */}
<motion.p
  custom={2.5}
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.8 }}
  className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-justify"
>
  {"India's premier 24-hour hackathon hosted by Amity School of Engineering & Technology, welcoming students from colleges and universities across India to innovate, collaborate and build impactful solutions."
    .split(" ")
    .map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.04,
          duration: 0.3,
        }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))}
</motion.p>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href="#register"
          
            className="group inline-flex items-center gap-2 bg-blue-700 text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-blue-800 transition-all duration-200 shadow-lg"
          >
            Register Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 glass-card text-slate-900 font-semibold text-base px-8 py-3.5 rounded-full hover:border-blue-300 transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>

        

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 font-mono-code">
                {s.value}
              </span>
              <span className="text-slate-600 text-xs tracking-wider mt-0.5 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden sm:block w-px h-20 bg-blue-300"
      >
        <span className="text-xs font-mono-code tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
