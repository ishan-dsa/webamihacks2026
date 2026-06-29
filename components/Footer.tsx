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
    <footer className="border-t border-white/6 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
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
    className="object-contain"
  />
</a>
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

{/* Contact */}
<div>
  <p className="text-white/50 text-xs font-mono-code tracking-widest uppercase mb-5">
    Contact
  </p>

  <div className="flex flex-col gap-3 text-sm text-white/40">

  <a
    href="tel:+919667187089"
    className="hover:text-neon transition-colors"
  >
    📞 +91 9667187089
  </a>

  <a
    href="mailto:amihacks2026@gmail.com"
    className="hover:text-neon transition-colors"
  >
    ✉ amihacks2026@gmail.com
  </a>

    
  <div className="leading-relaxed">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Amity+University+Rajasthan+Jaipur"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-4 bg-neon text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-white transition-colors"
    >
      View on Google Maps
    </a>
    <p>📍 Amity University Rajasthan</p>
    <p>SP-1, Kant Kalwar</p>
    <p>NH-11C, Jaipur, Rajasthan</p>

    
  </div>

</div>
</div>          
          {/* Registration */}
          <div>
            <p className="text-white/50 text-xs font-mono-code tracking-widest uppercase mb-5">
              Registration
            </p>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
Complete your registration in two simple steps:
First, pay the registration fee. Then submit the registration form along with your payment screenshot.            </p>
            <a
              href="#register"
              
              className="inline-flex items-center gap-2 bg-neon text-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Register Now
              
            </a>
          </div>
        </div>

{/* Bottom bar */}
<div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

  <span className="text-xs text-white/30">
    © 2026 AMIHACKS. All Rights Reserved.
  </span>

  <span className="text-white/60 text-base sm:text-lg font-medium tracking-wide text-center">
    Engineered &amp; Crafted with ❤️ by{" "}
    <span className="text-neon text-xl sm:text-2xl font-extrabold tracking-wider">
      Ishan Verma
    </span>
  </span>

</div>

      </div>
    </footer>
  );
}
