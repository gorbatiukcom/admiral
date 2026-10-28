"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./home.module.css";

const slides = [
  { src: "Budcor1.jpg", alt: "Projekt nowoczesnego wnętrza Budcor Design" },
  { src: "Budcor2.jpg", alt: "Przestrzeń mieszkalna zaprojektowana przez Budcor Design" },
  { src: "Budcor5.jpg", alt: "Detal projektu wnętrza Budcor Design" },
  { src: "BudcorDesign1.jpeg", alt: "Aranżacja wnętrza Budcor Design" },
  { src: "Budcor_exterior.png", alt: "Projekt architektury Budcor Design" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && !motion.matches) setActive((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active]);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
  }
  return (
    <>
      <div
        className={styles.heroSlides}
        role="region"
        aria-roledescription="karuzela"
        aria-label="Projekty Budcor Design"
        onTouchStart={(event) => {
          const point = event.touches[0];
          touch.current = { x: point.clientX, y: point.clientY };
        }}
        onTouchEnd={(event) => {
          const point = event.changedTouches[0];
          if (touch.current) {
            const dx = point.clientX - touch.current.x;
            const dy = point.clientY - touch.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
              select(active + (dx < 0 ? 1 : -1));
          }
          touch.current = null;
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.src} className={styles.heroSlide} aria-hidden={active !== index}>
            <Image
              src={`/images/main-hero/${slide.src}`}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className={styles.sliderControls}>
        <div
          className={styles.sliderDots}
          role="group"
          aria-label="Wybierz slajd"
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const next =
              event.key === "Home"
                ? 0
                : event.key === "End"
                  ? slides.length - 1
                  : (active + (event.key === "ArrowRight" ? 1 : -1) + slides.length) %
                    slides.length;
            select(next);
            event.currentTarget.querySelectorAll("button")[next]?.focus();
          }}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Slajd ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => select(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
