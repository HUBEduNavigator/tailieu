"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { CatalogItem } from "@/lib/content";
import { DIFFICULTY_INFO, SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { DIFFICULTIES, GRADES, SUBJECTS, TRACKS } from "@/lib/schema";
import { searchItems, matchesQuery } from "@/lib/search";
import { UnitCard } from "./UnitCard";

interface Filters {
  q: string;
  mon: string;
  lop: string;
  nhom: string;
  chude: string;
  muc: string;
}
const EMPTY: Filters = { q: "", mon: "", lop: "", nhom: "", chude: "", muc: "" };
const KEYS = Object.keys(EMPTY) as (keyof Filters)[];

function Group({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-semibold text-muted">{label}</legend>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="chip chip-btn" aria-pressed={value === ""} onClick={() => onChange("")}>
          Tất cả
        </button>
        {options.map((o) => (
          <button key={o.value} type="button" className="chip chip-btn" aria-pressed={value === o.value} onClick={() => onChange(value === o.value ? "" : o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Catalog({ items }: { items: CatalogItem[] }) {
  const params = useSearchParams();
  const initial = useMemo(() => {
    const f = { ...EMPTY };
    for (const k of KEYS) f[k] = params.get(k) ?? "";
    return f;
    // chỉ đọc tham số lần đầu; sau đó trạng thái nằm trong bộ lọc
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [f, setF] = useState<Filters>(initial);

  // Đồng bộ lên URL để chia sẻ/quay lại được.
  useEffect(() => {
    const sp = new URLSearchParams();
    for (const k of KEYS) if (f[k]) sp.set(k, f[k]);
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `${window.location.pathname}?${qs}` : window.location.pathname);
  }, [f]);

  const set = useCallback((k: keyof Filters, v: string) => {
    setF((prev) => {
      const next = { ...prev, [k]: v };
      if (k === "mon" || k === "lop") next.chude = "";
      return next;
    });
  }, []);

  const facetMatch = (it: CatalogItem, skip?: keyof Filters) =>
    (skip === "mon" || !f.mon || it.subject === f.mon) &&
    (skip === "lop" || !f.lop || String(it.grade) === f.lop) &&
    (skip === "nhom" || !f.nhom || it.track === f.nhom) &&
    (skip === "chude" || !f.chude || it.topicSlug === f.chude) &&
    (skip === "muc" || !f.muc || it.difficulty === f.muc);

  const results = useMemo(() => searchItems(items.filter((it) => facetMatch(it)), f.q), [items, f]); // eslint-disable-line react-hooks/exhaustive-deps

  const topics = useMemo(() => {
    const m = new Map<string, string>();
    for (const it of items) if (facetMatch(it, "chude") && matchesQuery(it, f.q)) m.set(it.topicSlug, it.topic);
    return [...m.entries()].sort((a, b) => a[1].localeCompare(b[1], "vi"));
  }, [items, f]); // eslint-disable-line react-hooks/exhaustive-deps

  const active = KEYS.some((k) => f[k]);
  const gradeOnly = f.lop && !f.q && !f.nhom && !f.chude && !f.muc;

  return (
    <div className="grid gap-6 lg:grid-cols-[19rem_1fr]">
      <aside className="card h-fit space-y-5 p-5 lg:sticky lg:top-24" aria-label="Bộ lọc">
        <div>
          <label htmlFor="q" className="mb-1.5 block text-sm font-semibold text-muted">
            Tìm kiếm (tên dạng bài, mã, chủ đề, từ khóa)
          </label>
          <input
            id="q"
            type="search"
            className="field"
            placeholder="Ví dụ: viete, cuc tri, IPA, ANH-06"
            value={f.q}
            onChange={(e) => set("q", e.target.value)}
            autoComplete="off"
          />
          <p className="mt-1 text-xs text-muted">Gõ có dấu hay không dấu đều được.</p>
        </div>
        <Group label="Môn học" value={f.mon} onChange={(v) => set("mon", v)} options={SUBJECTS.map((s) => ({ value: s, label: SUBJECT_INFO[s].name }))} />
        <Group label="Lớp" value={f.lop} onChange={(v) => set("lop", v)} options={GRADES.map((g) => ({ value: String(g), label: String(g) }))} />
        <Group label="Nhóm học liệu / kỳ thi" value={f.nhom} onChange={(v) => set("nhom", v)} options={TRACKS.map((t) => ({ value: t, label: TRACK_INFO[t].name }))} />
        <div>
          <label htmlFor="chude" className="mb-1.5 block text-sm font-semibold text-muted">Chủ đề</label>
          <select id="chude" className="field" value={f.chude} onChange={(e) => set("chude", e.target.value)}>
            <option value="">Tất cả chủ đề</option>
            {topics.map(([slug, name]) => (
              <option key={slug} value={slug}>{name}</option>
            ))}
          </select>
        </div>
        <Group label="Mức độ" value={f.muc} onChange={(v) => set("muc", v)} options={DIFFICULTIES.map((d) => ({ value: d, label: DIFFICULTY_INFO[d].name }))} />
        {active && (
          <button type="button" className="btn btn-ghost w-full" onClick={() => setF(EMPTY)}>
            Xóa bộ lọc
          </button>
        )}
      </aside>

      <section aria-live="polite" aria-label="Kết quả">
        <p className="mb-4 text-muted">
          {results.length > 0 ? `${results.length} dạng bài phù hợp` : "Chưa có dạng bài phù hợp"}
        </p>
        {results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((it) => (
              <UnitCard key={it.id} item={it} />
            ))}
          </div>
        ) : (
          <div className="card p-6">
            <p className="font-semibold">Đang cập nhật theo lộ trình</p>
            <p className="mt-2 text-muted">
              {gradeOnly
                ? `Học liệu cho lớp ${f.lop} ở bộ lọc này chưa được đăng. Chúng tôi chỉ đăng những dạng bài đã kiểm chứng, nên các mục còn trống sẽ được bổ sung dần theo lộ trình.`
                : "Không có dạng bài nào khớp với bộ lọc hiện tại. Hãy thử bỏ bớt điều kiện lọc hoặc gõ từ khóa khác; nếu mục bạn cần chưa có thì đang được cập nhật theo lộ trình."}
            </p>
            {active && (
              <button type="button" className="btn btn-primary mt-4" onClick={() => setF(EMPTY)}>
                Xem tất cả dạng bài
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
