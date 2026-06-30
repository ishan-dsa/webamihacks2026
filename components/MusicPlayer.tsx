"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startMusic = async () => {
      if (hasStarted.current || !audioRef.current) return;

      hasStarted.current = true;

      audioRef.current.volume = 0.15;

      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error(err);
      }

      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMusic();
        }}
        className="fixed top-6 right-6 z-[9999] h-14 w-14 rounded-full
        bg-black/60 backdrop-blur-md border border-yellow-400
        flex items-center justify-center
        hover:scale-110 transition-all duration-300
        shadow-[0_0_20px_rgba(255,255,0,0.5)]"
      >
        {playing ? (
          <Volume2 className="text-yellow-300" size={24} />
        ) : (
          <VolumeX className="text-white" size={24} />
        )}
      </button>
    </>
  );
}
