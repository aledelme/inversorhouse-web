"use client";
import { useEffect, useState, useRef } from "react";

const themes = [
  { value: "system", label: "Sistema", icon: "🖥️" },
  { value: "light", label: "Claro", icon: "🌞" },
  { value: "dark", label: "Oscuro", icon: "🌙" },
] as const;

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem("theme")
        : null;
    if (saved === "light" || saved === "dark" || saved === "system") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function applyTheme(mode: "light" | "dark" | "system") {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    if (mode === "system") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", mode);
    }
  }

  function handleSelect(value: "light" | "dark" | "system") {
    setTheme(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", value);
    }
    applyTheme(value);
    setOpen(false);
  }

  const current = themes.find((t) => t.value === theme);

  return (
    <div ref={ref} className="relative ml-2">
      <button
        aria-label="Cambiar tema"
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1 rounded-full border flex items-center gap-1"
        style={{
          borderColor: "var(--color-background,#e5e7eb)",
          background: "var(--background)",
          color: "var(--foreground)",
          transition: "background 0.2s, color 0.2s",
        }}
        type="button"
      >
        <span>{current?.icon}</span>
        <span className="hidden sm:inline">{current?.label}</span>
        <span className="flex items-center">
          <svg className="ml-1 w-3 h-3" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-36 border rounded shadow z-50"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
            borderColor: "var(--color-background,#e5e7eb)",
          }}
        >
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => handleSelect(t.value)}
              className="w-full flex items-center gap-2 px-4 py-2 text-left transition"
              style={{
                background: theme === t.value ? "var(--primary)" : "transparent",
                color: theme === t.value ? "#fff" : "var(--foreground)",
                fontWeight: theme === t.value ? 600 : 400,
              }}
              type="button"
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
