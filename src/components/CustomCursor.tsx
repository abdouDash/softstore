"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2; // Smooth lerp
      ringY += (mouseY - ringY) * 0.2;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    animateRing();

    const handleHover = () => ring.classList.add("hovering");
    const handleLeave = () => ring.classList.remove("hovering");

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleHover);
      link.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" />;
}