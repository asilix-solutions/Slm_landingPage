"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { headerActions, navItems } from "@/content/navigation";

/**
 * Disclosure-style mobile/tablet menu (shown below the `xl` breakpoint).
 * Non-modal: no focus trap. Escape closes and returns focus to the toggle;
 * choosing a link or growing to the desktop layout also closes it.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 80rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="ms-auto xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div id={panelId} className="menu-panel" hidden={!open}>
        <nav aria-label="القائمة الرئيسية">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="menu-link" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={headerActions.primary.href}
            className="btn btn-primary"
            onClick={close}
          >
            {headerActions.primary.label}
            <ArrowIcon />
          </a>
          <a
            href={headerActions.secondary.href}
            className="btn btn-outline"
            onClick={close}
          >
            {headerActions.secondary.label}
          </a>
        </div>
      </div>
    </div>
  );
}
