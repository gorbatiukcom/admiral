"use client";

import { useEffect, useId, useRef, useState } from "react";

import design from "./design.module.css";
import { packageScopes } from "./package-scopes";
import styles from "./services.module.css";
import { Arrow } from "./ui";

export function PackageDrawer({ name }: { name: keyof typeof packageScopes }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function finishClose() {
    setOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }
  function close() {
    dialog.current?.close();
    finishClose();
  }
  return (
    <>
      <button
        type="button"
        ref={trigger}
        className={styles.scopeTrigger}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        Zakres pakietu {name}
        <span aria-hidden="true">+</span>
      </button>
      <dialog
        ref={dialog}
        id={id}
        className={styles.packageDrawer}
        aria-labelledby={`${id}-title`}
        onClose={() => {
          if (!dialog.current?.open) finishClose();
        }}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const r = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < r.left ||
              event.clientX > r.right ||
              event.clientY < r.top ||
              event.clientY > r.bottom
            )
              close();
          }
        }}
      >
        <div className={styles.drawerHeader}>
          <div>
            <p className={design.eyebrow}>Pełny zakres pakietu</p>
            <h2 id={`${id}-title`}>{name}</h2>
          </div>
          <button
            type="button"
            autoFocus
            aria-label={`Zamknij zakres pakietu ${name}`}
            onClick={close}
            className={styles.drawerClose}
          >
            ×
          </button>
        </div>
        <div className={styles.drawerContent}>
          {packageScopes[name].map((group) => (
            <section key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className={styles.drawerFooter}>
          <button type="button" className={design.button} onClick={close}>
            Wróć do pakietów
            <Arrow />
          </button>
        </div>
      </dialog>
    </>
  );
}
