"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import design from "../../../components/redesign/design.module.css";
import styles from "./project.module.css";

export function ProjectGallery({
  title,
  featured,
  images,
}: {
  title: string;
  featured: string[];
  images: string[];
}) {
  const allImages = Array.from(new Set([...featured, ...images]));
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  function open(src: string) {
    setActive(allImages.indexOf(src));
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    setActive(null);
  }
  function move(direction: number) {
    setActive((index) => ((index ?? 0) + direction + allImages.length) % allImages.length);
  }
  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [active]);

  return (
    <div className={design.container}>
      <div className={styles.featuredGallery}>
        {featured.map((src, index) => (
          <button
            type="button"
            key={src}
            className={styles.galleryImage}
            onClick={() => open(src)}
            aria-label={`Powiększ zdjęcie ${index + 1}: ${title}`}
          >
            <Image
              src={src}
              alt={`${title} — detal ${index + 1}`}
              fill
              sizes="(min-width: 768px) 44vw, 100vw"
            />
          </button>
        ))}
      </div>
      <p className={styles.caption}>Projekt z portfolio Budcor Design.</p>
      <button
        type="button"
        className={`${design.textLink} ${styles.expandGallery}`}
        aria-expanded={expanded}
        aria-controls="project-all-images"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Zwiń galerię" : `Zobacz wszystkie zdjęcia (${images.length})`}
        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
      </button>
      {expanded && (
        <div id="project-all-images" className={styles.thumbnails}>
          {images.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => open(src)}
              aria-label={`Powiększ zdjęcie z galerii ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${title} — zdjęcie ${index + 1}`}
                fill
                sizes="(min-width: 768px) 22vw, 44vw"
              />
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className={styles.lightbox}
        aria-label={`Galeria: ${title}`}
        onClose={() => setActive(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <button
          type="button"
          autoFocus
          className={styles.lightboxClose}
          onClick={close}
          aria-label="Zamknij zdjęcie"
        >
          ×
        </button>
        {active !== null && (
          <>
            <div className={styles.lightboxImage}>
              <Image
                src={allImages[active]}
                alt={`${title} — zdjęcie ${active + 1}`}
                fill
                sizes="100vw"
              />
            </div>
            <div className={styles.lightboxControls}>
              <button type="button" onClick={() => move(-1)} aria-label="Poprzednie zdjęcie">
                ←
              </button>
              <p role="status">
                {active + 1} / {allImages.length}
              </p>
              <button type="button" onClick={() => move(1)} aria-label="Następne zdjęcie">
                →
              </button>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
