"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
}

export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm transition-colors hover:bg-card"
      >
        {label}
        <svg
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-32 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        >
          <div className="max-h-64 overflow-y-auto py-1">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-background ${
                  locale === currentLocale
                    ? "font-medium text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {localeNames[locale]}
                {locale === currentLocale && (
                  <span className="ml-2 text-accent">✓</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
