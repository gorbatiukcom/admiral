"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

import design from "./design.module.css";
import styles from "./site-shell.module.css";
import { ActionLink, Arrow } from "./ui";

const navigation = [
  { href: "/", label: "Strona Główna" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contacts", label: "Kontakty" },
];

function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Budcor Design — strona główna">
      <span className={styles.logoGraphic} aria-hidden="true" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const isRedesigned =
    pathname === "/" ||
    pathname === "/o-nas" ||
    pathname.startsWith("/portfolio") ||
    pathname.startsWith("/contacts") ||
    (pathname.startsWith("/uslugi") && !pathname.startsWith("/uslugi/order"));
  const showMobileCta =
    !isRedesigned &&
    !pathname.startsWith("/contacts") &&
    !pathname.startsWith("/uslugi/order") &&
    pathname !== "/qr";

  function closeMenu() {
    dialog.current?.close();
    setMenuOpen(false);
  }

  useEffect(() => {
    dialog.current?.close();
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (media.matches) closeMenu();
    };
    media.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      media.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  const links = navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={
        pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined
      }
      onClick={closeMenu}
    >
      {item.label}
    </Link>
  ));

  return (
    <div
      className={`${design.site} ${showMobileCta ? styles.hasMobileCta : ""} ${pathname === "/" ? styles.home : ""} ${pathname.startsWith("/contacts") ? styles.contactRoot : ""}`}
    >
      <a href="#main-content" className={design.skipLink}>
        Przejdź do treści
      </a>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.navigation} aria-label="Menu główne">
          {links}
        </nav>
        <div className={styles.desktopCta}>
          <a href="tel:+48794510151">+48 794 510 151</a>
        </div>
        <button
          ref={menuButton}
          type="button"
          className={styles.menuButton}
          aria-label="Otwórz menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            dialog.current?.showModal();
            setMenuOpen(true);
          }}
        >
          <span />
          <span />
        </button>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className={styles.dialog}
        aria-label="Menu główne"
        onClose={() => {
          setMenuOpen(false);
          menuButton.current?.focus();
        }}
      >
        <div className={styles.header}>
          <Logo />
          <button
            type="button"
            autoFocus
            className={`${styles.menuButton} ${styles.closeButton}`}
            aria-label="Zamknij menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        <nav className={styles.mobileNav} aria-label="Menu mobilne">
          {links}
        </nav>
        <div className={styles.menuContact}>
          <a href="tel:+48794510151">+48 794 510 151</a>
          <a href="mailto:budcordesign@gmail.com">budcordesign@gmail.com</a>
          <ActionLink>Porozmawiajmy</ActionLink>
        </div>
      </dialog>
      <main
        id="main-content"
        tabIndex={-1}
        className={`${design.main} ${isRedesigned ? "" : design.legacy}`}
      >
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <Logo />
          <p className={styles.footerTagline}>
            Od pierwszej rozmowy
            <br />
            do ostatniego detalu.
          </p>
          <Link href="/contacts" className={styles.footerLink}>
            Porozmawiajmy o Twoim wnętrzu
            <Arrow />
          </Link>
        </div>
        <nav className={styles.footerNav} aria-label="Nawigacja w stopce">
          <div>
            <h2>Budcor Design</h2>
            <Link href="/">Strona główna</Link>
            <Link href="/o-nas">O nas</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contacts">Kontakt</Link>
            <Link href="/blog">Porady i inspiracje</Link>
          </div>
          <div>
            <h2>Nasze usługi</h2>
            <Link href="/uslugi">Wszystkie usługi</Link>
            <Link href="/uslugi/projektowanie-wnetrz">Projektowanie wnętrz</Link>
            <Link href="/uslugi/uslugi-budowlane">Remonty i wykończenia</Link>
            <Link href="/uslugi/remont-pod-klucz">Realizacja pod klucz</Link>
          </div>
        </nav>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Budcor Design</p>
          <p>Volantes Sp. z o.o. · NIP 7252306713</p>
          <Link href="/blog">Porady i inspiracje</Link>
        </div>
      </footer>
      {showMobileCta && (
        <aside className={styles.mobileCta} aria-label="Konsultacja projektu">
          <ActionLink />
        </aside>
      )}
    </div>
  );
}
