import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-7 gap-y-3">
        <p>© 2026 HUB EduNavigator</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Liên kết cuối trang">
          <Link href="/gioi-thieu/" prefetch={false}>Về kho học liệu</Link>
          <a href="https://hubedunavigator.github.io/home/" className="inline-flex items-center gap-1">
            Trang chủ HUB <ArrowUpRight size={14} aria-hidden />
          </a>
        </nav>
      </div>
    </footer>
  );
}
