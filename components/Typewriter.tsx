"use client";

import { useEffect, useState } from "react";

const words = [
  "LET THE CODE BEGIN",
  "BUILD • INNOVATE • COMPETE",
  "24 HOURS OF INNOVATION",
  "CREATE THE FUTURE",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-block text-blue-700 font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
