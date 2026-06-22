"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-09-24T09:00:00+05:30").getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="glass-card-neon rounded-lg px-3 py-2 sm:px-5 sm:py-3 min-w-[56px] sm:min-w-[72px] text-center">
              <span className="font-mono-code text-2xl sm:text-4xl font-bold neon-text">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-white/40 text-[10px] sm:text-xs mt-1 font-mono-code uppercase tracking-widest">
              {u.label}
            </span>
          </div>
          {i < 3 && (
            <span className="neon-text text-2xl sm:text-3xl font-bold mb-4 opacity-60">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
