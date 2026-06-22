"use client";

import { ExternalLink } from "lucide-react";

const REGISTER_URL = "https://forms.gle/AzrVWXLTmcJjGP9R7";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-mono-code text-2xl font-bold neon-text">AMI</span>
              <span className="font-mono-code text-2xl font-bold text-white">HACKS</span>
              <span className="font-mono-code text-sm text-white/30 ml-1">2026</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              A flagship 24-hour hackathon by Amity School of Engineering &amp;
              Technology, Amity University Rajasthan.
            </p>
            <div className="flex flex-col gap-1 text-xs text-white/25">
              <span>Amity School of Engineering &amp; Technology</span>
              <span>Amity University Rajasthan</span>
              <span>Supported by Envent Student Council</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white/50 text-xs font-mono-code tracking-widest uppercase mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/35 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration */}
          <div>
            <p className="text-white/50 text-xs font-mono-code tracking-widest uppercase mb-5">
              Registration
            </p>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              Limited seats. Register now to secure your spot at AMIHACKS 2026.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neon text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Register Now
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <span>© 2026 AMIHACKS — Amity University Rajasthan</span>
          <span>
            Designed by{" "}
            <span className="font-script text-base text-white/35 ml-0.5">
              Ishan
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
