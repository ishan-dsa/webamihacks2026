"use client";

import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05070f] border-t border-cyan-500/10 pt-16 pb-8 px-6">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient glow blobs — cyan / violet, matching Hero */}
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <a href="#hero">
                <Image
                  src="/logo.png"
                  alt="AMIHACKS Logo"
                  width={200}
                  height={80}
                  className="object-contain drop-shadow-[0_0_15px_rgba(239,255,0,0.15)]"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-cyan-400/70 text-xs font-mono-code tracking-widest uppercase mb-5">
              Quick Links
            </p>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cyan-400/70 text-xs font-mono-code tracking-widest uppercase mb-5">
              Contact
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="tel:+919667187089"
                className="hover:text-cyan-400 transition-colors"
              >
                📞 +91 9667187089
              </a>

              <a
                href="mailto:amihacks2026@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                ✉ amihacks2026@gmail.com
              </a>

              <div className="leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Amity+University+Rajasthan+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                >
                  View on Google Maps
                </a>

                <p className="mt-3">📍 Amity University Rajasthan</p>
                <p>SP-1, Kant Kalwar</p>
                <p>NH-11C, Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div>
            <p className="text-cyan-400/70 text-xs font-mono-code tracking-widest uppercase mb-5">
              Registration
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Complete your registration in two simple steps:
              <br />
              First, pay the registration fee.
              <br />
              Then submit the registration form along with your payment
              screenshot.
            </p>

            <a
              href="#register"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/10 pt-8 relative">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-500">
              © 2026 AMIHACKS. All Rights Reserved.
            </span>
          </div>

          {/* Credits */}
          <div className="mt-6 sm:mt-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2">
            <span className="flex flex-col items-center text-center">
              <span className="text-slate-300 text-base sm:text-lg font-medium tracking-wide">
                Engineered &amp; Crafted with ❤️
              </span>

              <span className="font-script text-cyan-400 text-2xl sm:text-3xl mt-1 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
