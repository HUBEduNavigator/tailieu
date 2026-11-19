import { normalizeVi, words } from "./text";
import type { CatalogItem } from "./content";

/**
 * Khớp khi MỌI từ trong truy vấn đều là đầu của một từ trong nội dung
 * (không dấu, không phân biệt hoa thường). Khớp theo đầu từ để "am" không dính vào "tham".
 */
export function matchesQuery(item: CatalogItem, query: string): boolean {
  const toks = words(query);
  if (toks.length === 0) return true;
  const hay = " " + words(item.haystack).join(" ");
  return toks.every((tok) => hay.includes(" " + tok));
}

/** Điểm xếp hạng: khớp id/tiêu đề cao hơn khớp tóm tắt. */
export function scoreItem(item: CatalogItem, query: string): number {
  const q = normalizeVi(query);
  if (!q) return 0;
  const id = normalizeVi(item.id);
  const title = normalizeVi(item.title);
  let s = 0;
  if (id === q) s += 100;
  else if (id.includes(q)) s += 60;
  if (title.includes(q)) s += 40;
  for (const tok of words(query)) {
    if (title.includes(tok)) s += 5;
    if (id.includes(tok)) s += 3;
  }
  return s;
}

export function searchItems(items: CatalogItem[], query: string): CatalogItem[] {
  return items
    .filter((it) => matchesQuery(it, query))
    .map((it) => ({ it, s: scoreItem(it, query) }))
    .sort((a, b) => b.s - a.s)
    .map((x) => x.it);
}
