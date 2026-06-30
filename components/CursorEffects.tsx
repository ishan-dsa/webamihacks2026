"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #EFFF00;
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 999999;
      box-shadow: 0 0 20px rgba(239,255,0,.8);
      transition:
        width .2s ease,
        height .2s ease,
        background .2s ease,
        border .2s ease;
    `;

    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
     currentX += (mouseX - currentX) * 0.6;
currentY += (mouseY - currentY) * 0.6;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const click = (e: MouseEvent) => {
      const ripple = document.createElement("div");

      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 20px;
        height: 20px;
        border: 2px solid #EFFF00;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 999998;
        box-shadow: 0 0 20px rgba(239,255,0,.8);
        animation: ripple .6s ease-out forwards;
      `;

      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    const hover = () => {
      cursor.style.width = "36px";
      cursor.style.height = "36px";
      cursor.style.background = "rgba(239,255,0,.15)";
    };

    const leave = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.background = "transparent";
    };

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes ripple {
        from {
          width:20px;
          height:20px;
          opacity:1;
        }
        to {
          width:140px;
          height:140px;
          opacity:0;
        }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", move);
    document.addEventListener("click", click);

    const clickables = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", click);

      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", leave);
      });

      cursor.remove();
      style.remove();
    };
  }, []);

  return null;
}
