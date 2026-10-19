"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      // Ring follows with lerp (smooth delay)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    animateRing();

    // Hover effects
    const handleHover = () => {
      dot.style.width = "12px";
      dot.style.height = "12px";
      ring.style.width = "50px";
      ring.style.height = "50px";
      ring.style.borderColor = "rgba(204, 20, 38, 0.8)";
    };
    const handleLeave = () => {
      dot.style.width = "8px";
      dot.style.height = "8px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(255, 255, 255, 0.3)";
    };

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

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}