"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import design from "../../../components/redesign/design.module.css";
import styles from "./project.module.css";

type Photo = { src: string; width: number; height: number };

function Chevron({ next = false }: { next?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={next ? "m9 5 7 7-7 7" : "m15 5-7 7 7 7"} />
    </svg>
  );
}

export function ProjectGallery({ title, images }: { title: string; images: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;
  function open(index: number, button: HTMLButtonElement) {
    trigger.current = button;
    setActive(index);
    dialog.current?.showModal();
    requestAnimationFrame(() => {
      if (slider.current)
        slider.current.scrollTo({ left: index * slider.current.clientWidth, behavior: "instant" });
    });
  }
  function finishClose() {
    setActive(null);
    trigger.current?.focus({ preventScroll: true });
  }
  function close() {
    dialog.current?.close();
    finishClose();
  }
  function move(direction: number) {
    const index = ((active ?? 0) + direction + images.length) % images.length;
    slider.current?.scrollTo({
      left: index * slider.current.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const resize = () => {
      const current = slider.current;
      if (current)
        current.scrollTo({
          left: Number(current.dataset.active || 0) * current.clientWidth,
          behavior: "instant",
        });
    };
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("resize", resize);
    };
  }, [isOpen]);

  return (
    <section className={design.container} aria-label={`Zdjęcia projektu: ${title}`}>
      <div className={styles.photoGrid}>
        {images.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            className={styles.photoTile}
            onClick={(event) => open(index, event.currentTarget)}
            aria-label={`Powiększ zdjęcie ${index + 1}: ${title}`}
          >
            <Image
              src={photo.src}
              alt={`${title} — zdjęcie ${index + 1}`}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1440px) 22vw, (min-width: 1024px) 30vw, 45vw"
            />
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className={styles.lightbox}
        aria-label={`Galeria: ${title}`}
        onClose={() => {
          if (!dialog.current?.open) finishClose();
        }}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <div className={styles.viewerHeader}>
          <p>{title}</p>
          <button
            type="button"
            autoFocus
            className={styles.viewerButton}
            onClick={close}
            aria-label="Zamknij zdjęcie"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <>
            <div
              ref={slider}
              className={styles.viewerSlides}
              data-active={active}
              onScroll={(event) => {
                const element = event.currentTarget;
                setActive(Math.round(element.scrollLeft / element.clientWidth));
              }}
            >
              {images.map((photo, index) => (
                <div className={styles.viewerSlide} key={photo.src} aria-hidden={active !== index}>
                  <Image
                    src={photo.src}
                    alt={`${title} — zdjęcie ${index + 1}`}
                    fill
                    sizes="100vw"
                    loading={Math.abs(index - (active ?? 0)) <= 1 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
            <div className={styles.viewerControls}>
              <button
                type="button"
                className={styles.viewerButton}
                onClick={() => move(-1)}
                aria-label="Poprzednie zdjęcie"
              >
                <Chevron />
              </button>
              <div>
                <p role="status" aria-live="polite">
                  {(active ?? 0) + 1} / {images.length}
                </p>
                <span>Przesuń, aby zobaczyć więcej</span>
              </div>
              <button
                type="button"
                className={styles.viewerButton}
                onClick={() => move(1)}
                aria-label="Następne zdjęcie"
              >
                <Chevron next />
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
