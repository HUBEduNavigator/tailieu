"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import type { CatalogItem } from "@/lib/content";
import { SUBJECT_INFO } from "@/lib/labels";
import { searchItems } from "@/lib/search";
import { unitHref } from "@/lib/text";

export function HomeSearch({ items }: { items: CatalogItem[] }) {
  const [q, setQ] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const query = q.trim();
  const results = query ? searchItems(items, query).slice(0, 5) : [];
  const catalogPath = "/hoc-lieu/";
  const href = query ? `/hoc-lieu/?q=${encodeURIComponent(query)}` : catalogPath;

  return (
    <div
      className="hero-search"
      onFocus={() => setShowResults(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setShowResults(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && showResults && query) {
          e.preventDefault();
          setShowResults(false);
        }
      }}
    >
      <form
        role="search"
        action={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${catalogPath}`}
        onSubmit={(e) => {
          e.preventDefault();
          setShowResults(false);
          router.push(href);
        }}
      >
        <label htmlFor="home-q" className="sr-only">Tìm dạng bài</label>
        <Search size={21} aria-hidden />
        <input id="home-q" name="q" type="search" value={q} autoComplete="off"
          placeholder="Tìm chủ đề hoặc mã bài…"
          onChange={(e) => { setQ(e.target.value); setShowResults(true); }}
        />
        <button type="submit" className="btn btn-primary">Tìm kiếm</button>
      </form>
      <div aria-live="polite">
        {query && showResults && (
          <div className="card search-results">
            {results.length ? (
              <ul>
                {results.map((item) => (
                  <li key={item.id}>
                    <Link href={unitHref(item.id)} prefetch={false} className="search-hit">
                      <strong>{item.title}</strong>
                      <span>{SUBJECT_INFO[item.subject].name} · Lớp {item.grade} · {item.id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-3 text-sm text-muted">Chưa có dạng bài khớp. Các chủ đề còn thiếu đang cập nhật theo lộ trình.</p>
            )}
            <Link href={href} prefetch={false} className="search-more">
              Xem kết quả trong danh mục <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
