"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/mon/toan/", label: "Toán học" },
  { href: "/mon/van/", label: "Ngữ văn" },
  { href: "/mon/anh/", label: "Tiếng Anh" },
  { href: "/hoc-lieu/", label: "Tra cứu dạng bài" },
] as const;

export const HOME_URL = "https://hubedunavigator.github.io/home/";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-display text-lg font-semibold">
          <Logo />
          <span className="truncate">
            EduNavigator <span className="font-sans text-sm font-normal text-muted">· Học liệu</span>
          </span>
        </Link>
        <nav aria-label="Menu chính" className="hidden items-center gap-1 text-[0.95rem] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap rounded-full px-3 py-2 text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={HOME_URL} className="btn btn-ghost hidden whitespace-nowrap lg:inline-flex">
            Trang chủ HUB
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-full border border-line bg-surface md:hidden"
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Menu di động" className="border-t border-line bg-bg md:hidden">
          <ul className="container-x py-2">
            {[...links, { href: "/gioi-thieu/", label: "Về kho học liệu" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-line/60 text-lg">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={HOME_URL} className="flex min-h-12 items-center text-lg">
                Trang chủ HUB EduNavigator
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
