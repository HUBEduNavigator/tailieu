"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Khám phá" },
  { href: "/hoc-lieu/", label: "Danh mục" },
];

export function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="container-x header-inner">
        <Link href="/" prefetch={false} className="brand">
          <Logo />
          <span><strong>Kho học liệu</strong><small>HUB EduNavigator</small></span>
        </Link>
        <nav aria-label="Menu chính" className="header-nav">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
