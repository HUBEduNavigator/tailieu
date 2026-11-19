"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { CatalogItem } from "@/lib/content";
import { DIFFICULTY_INFO, SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { DIFFICULTIES, GRADES, SUBJECTS, TRACKS } from "@/lib/schema";
import { matchesQuery, searchItems } from "@/lib/search";
import { UnitCard } from "./UnitCard";

const FACETS = ["mon", "lop", "nhom", "chude", "muc"] as const;
type Facet = (typeof FACETS)[number];

function Group({
  label, options, value, onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold">{label}</legend>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="chip chip-btn" aria-pressed={!value} onClick={() => onChange("")}>Tất cả</button>
        {options.map((o) => (
          <button key={o.value} type="button" className="chip chip-btn"
            aria-pressed={value === o.value} onClick={() => onChange(value === o.value ? "" : o.value)}>
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Catalog({ items }: { items: CatalogItem[] }) {
  const routeParams = useSearchParams();
  const [query, setQuery] = useState(() => routeParams.toString());
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    // Read the current URL when navigation finishes, including Back and Forward.
    // A router snapshot can lag behind a recent keystroke.
    setQuery(new URLSearchParams(window.location.search).toString());
  }, [routeParams]);

  const params = new URLSearchParams(query);
  const q = params.get("q") ?? "";
  const mon = params.get("mon") ?? "";
  const lop = params.get("lop") ?? "";
  const nhom = params.get("nhom") ?? "";
  const chude = params.get("chude") ?? "";
  const muc = params.get("muc") ?? "";

  function updateQuery(key?: Facet | "q", value = "") {
    const next = new URLSearchParams(window.location.search);
    if (!key) {
      for (const name of [...FACETS, "q"]) next.delete(name);
    } else {
      if (value) next.set(key, value);
      else next.delete(key);
      if (key === "mon" || key === "lop") next.delete("chude");
    }
    const nextQuery = next.toString();
    setQuery(nextQuery);
    window.history.replaceState(null, "", `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}`);
  }

  const candidates = items.filter((it) =>
    (!mon || it.subject === mon) &&
    (!lop || String(it.grade) === lop) &&
    (!nhom || it.track === nhom) &&
    (!muc || it.difficulty === muc),
  );
  const topicOptions = new Map(candidates.filter((it) => matchesQuery(it, q)).map((it) => [it.topicSlug, it.topic]));
  const selectedTopic = chude && items.find((it) => it.topicSlug === chude);
  if (selectedTopic) topicOptions.set(chude, selectedTopic.topic);
  const topics = [...topicOptions].sort((a, b) => a[1].localeCompare(b[1], "vi"));
  const results = searchItems(candidates.filter((it) => !chude || it.topicSlug === chude), q);
  const facetCount = FACETS.filter((key) => params.get(key)).length;
  const active = Boolean(q || facetCount);

  return (
    <div className="catalog-layout">
      <div role="search" className="catalog-search">
        <label htmlFor="q" className="sr-only">Tìm theo tên dạng bài, mã hoặc chủ đề</label>
        <Search size={21} aria-hidden />
        <input id="q" type="search" className="field" placeholder="Tìm tên dạng bài, chủ đề hoặc mã…"
          value={q} onChange={(e) => updateQuery("q", e.target.value)} autoComplete="off" />
      </div>

      <aside className="catalog-filters card" aria-label="Bộ lọc">
        <button type="button" className="filter-toggle" aria-expanded={filtersOpen} aria-controls="catalog-facets"
          onClick={() => setFiltersOpen(!filtersOpen)}>
          <SlidersHorizontal size={18} aria-hidden />
          Bộ lọc {facetCount > 0 && `(${facetCount})`}
        </button>
        <div id="catalog-facets" data-open={filtersOpen} className="filter-fields">
          <div className="filter-heading">
            <h2>Bộ lọc</h2>
            {active && <button type="button" className="filter-clear" onClick={() => updateQuery()}>Xóa bộ lọc</button>}
          </div>
          <Group label="Môn học" value={mon} onChange={(v) => updateQuery("mon", v)}
            options={SUBJECTS.map((s) => ({ value: s, label: SUBJECT_INFO[s].name }))} />
          <Group label="Lớp" value={lop} onChange={(v) => updateQuery("lop", v)}
            options={GRADES.map((g) => ({ value: String(g), label: String(g) }))} />
          <Group label="Nhóm học liệu / kỳ thi" value={nhom} onChange={(v) => updateQuery("nhom", v)}
            options={TRACKS.map((t) => ({ value: t, label: TRACK_INFO[t].name }))} />
          <div>
            <label htmlFor="chude" className="mb-2 block text-sm font-semibold">Chủ đề</label>
            <select id="chude" className="field" value={chude} onChange={(e) => updateQuery("chude", e.target.value)}>
              <option value="">Tất cả chủ đề</option>
              {chude && !topics.some(([slug]) => slug === chude) && <option value={chude}>Chủ đề chưa có trong kho</option>}
              {topics.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
            </select>
          </div>
          <Group label="Mức độ" value={muc} onChange={(v) => updateQuery("muc", v)}
            options={DIFFICULTIES.map((d) => ({ value: d, label: DIFFICULTY_INFO[d].name }))} />
        </div>
      </aside>

      <section className="catalog-results" aria-label="Kết quả">
        <p aria-live="polite" className="mb-4 text-sm font-semibold text-muted">
          {results.length > 0 ? `${results.length} dạng bài ${active ? "phù hợp" : "đã đăng"}` : "Chưa có dạng bài phù hợp"}
        </p>
        {results.length > 0 ? (
          <div className="document-grid">{results.map((item) => <UnitCard key={item.id} item={item} />)}</div>
        ) : (
          <div className="card p-6">
            <h2 className="text-xl">Đang cập nhật theo lộ trình</h2>
            <p className="mt-2 text-muted">
              {lop && !q && !nhom && !chude && !muc
                ? `Học liệu lớp ${lop} trong mục đã chọn chưa được đăng.`
                : "Thử từ khóa khác hoặc bỏ bớt điều kiện lọc để tìm tài liệu."}
            </p>
            {active && (
              <button type="button" className="btn btn-primary mt-4" onClick={() => updateQuery()}>
                Xem tất cả dạng bài
              </button>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
