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

      audioRef.current.volume = 0.10;

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
        audio.volume = 0.10;
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
        aria-label={playing ? "Mute music" : "Play music"}
        title={playing ? "Mute Music" : "Play Music"}
        className="
          fixed
          bottom-20
          right-8
          z-[9999]
          h-16
          w-16
          rounded-full
          bg-gradient-to-br
          from-yellow-300
          via-yellow-400
          to-yellow-500
          text-black
          border
          border-yellow-200/80
          backdrop-blur-xl
          flex
          items-center
          justify-center
          shadow-[0_0_40px_rgba(255,255,0,0.8)]
          transition-all
          duration-500
          hover:scale-110
          hover:rotate-180
          active:scale-95
        "
      >
        {playing ? (
          <Volume2 size={28} className="drop-shadow-lg" />
        ) : (
          <VolumeX size={28} className="drop-shadow-lg" />
        )}
      </button>
    </>
  );
}
