"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { CatalogItem } from "@/lib/content";
import { SUBJECT_INFO } from "@/lib/labels";
import { searchItems } from "@/lib/search";
import { unitHref } from "@/lib/text";

export function HomeSearch({ items }: { items: CatalogItem[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => (q.trim() ? searchItems(items, q).slice(0, 5) : []), [items, q]);
  return (
    <div className="mx-auto w-full max-w-2xl">
      <label htmlFor="home-q" className="sr-only">
        Tìm dạng bài
      </label>
      <div className="relative">
        <Search aria-hidden size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          id="home-q"
          type="search"
          className="field !min-h-14 !rounded-full !pl-12 text-lg"
          placeholder="Tìm dạng bài: tên, mã, chủ đề (có dấu hay không dấu)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div aria-live="polite">
        {q.trim() && (
          <div className="card mt-3 p-2 text-left">
            {results.length > 0 ? (
              <ul>
                {results.map((r) => (
                  <li key={r.id}>
                    <Link href={unitHref(r.id)} className="block rounded-xl px-3 py-2 hover:bg-surface2">
                      <span className="font-semibold">{r.title}</span>
                      <span className="block text-sm text-muted">
                        {SUBJECT_INFO[r.subject].name} · Lớp {r.grade} · {r.id}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-3 py-2 text-muted">Chưa có dạng bài khớp từ khóa này. Mục này có thể đang được cập nhật theo lộ trình.</p>
            )}
            <div className="border-t border-line px-3 pt-2 pb-1 text-sm">
              <Link href={`/hoc-lieu/?q=${encodeURIComponent(q.trim())}`} className="underline">
                Xem kết quả đầy đủ và lọc theo môn, lớp, nhóm học liệu
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
