"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    // Cursor
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      position:fixed;
      width:18px;
      height:18px;
      border:2px solid #FFD700;
      border-radius:50%;
      pointer-events:none;
      transform:translate(-50%,-50%);
      z-index:999999;
      transition:
        width .2s ease,
        height .2s ease,
        border .2s ease,
        background .2s ease,
        transform .08s linear;
      box-shadow:0 0 20px rgba(255,215,0,.8);
    `;

    document.body.appendChild(cursor);

    // Move Cursor
    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Trail
      const dot = document.createElement("div");

      dot.style.cssText = `
        position:fixed;
        left:${e.clientX}px;
        top:${e.clientY}px;
        width:8px;
        height:8px;
        background:#FFD700;
        border-radius:50%;
        pointer-events:none;
        transform:translate(-50%,-50%);
        z-index:999998;
        box-shadow:0 0 15px rgba(255,215,0,.9);
        transition:all .45s ease-out;
      `;

      document.body.appendChild(dot);

      requestAnimationFrame(() => {
        dot.style.opacity = "0";
        dot.style.transform = "translate(-50%,-50%) scale(3)";
      });

      setTimeout(() => dot.remove(), 450);
    };

    // Ripple
    const click = (e: MouseEvent) => {
      const ripple = document.createElement("div");

      ripple.style.cssText = `
        position:fixed;
        left:${e.clientX}px;
        top:${e.clientY}px;
        width:20px;
        height:20px;
        border:2px solid #FFD700;
        border-radius:50%;
        transform:translate(-50%,-50%);
        pointer-events:none;
        z-index:999998;
        box-shadow:0 0 20px rgba(255,215,0,.8);
        transition:all .6s ease-out;
      `;

      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.width = "140px";
        ripple.style.height = "140px";
        ripple.style.opacity = "0";
      });

      setTimeout(() => ripple.remove(), 600);
    };

    // Hover Effects
    const hover = () => {
      cursor.style.width = "36px";
      cursor.style.height = "36px";
      cursor.style.background = "rgba(255,215,0,.2)";
    };

    const leave = () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      cursor.style.background = "transparent";
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("click", click);

    const clickable = document.querySelectorAll(
      "a,button,input,textarea,select,[role='button']"
    );

    clickable.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.body.style.cursor = "default";
      cursor.remove();

      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", click);

      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
