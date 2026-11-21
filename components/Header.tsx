"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUBJECT_INFO } from "@/lib/labels";
import { SUBJECTS } from "@/lib/schema";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="container-x header-inner">
        <Link href="/" prefetch={false} className="brand">
          <Logo />
          <span><strong>Cẩm nang làm bài</strong><small>HUB EduNavigator</small></span>
        </Link>
        <nav aria-label="Các môn thực hành" className="subject-nav">
          {SUBJECTS.map(subject => {
            const href = `/mon/${subject}/`;
            return (
              <Link key={subject} href={href} prefetch={false}
                aria-current={path === href ? "page" : path.startsWith(href) ? "location" : undefined}>
                {SUBJECT_INFO[subject].short}
              </Link>
            );
          })}
        </nav>
        <nav aria-label="Menu chính" className="header-nav">
          <Link href="/hoc-lieu/" prefetch={false} aria-current={path === "/hoc-lieu/" ? "page" : undefined}>Danh mục</Link>
        </nav>
        <div className="header-theme"><ThemeToggle /></div>
      </div>
    </header>
  );
}
