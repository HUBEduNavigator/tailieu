import fs from "node:fs";
import path from "node:path";

export interface SourceRow {
  source_id: string;
  title: string;
  author_or_org: string;
  year: string;
  url: string;
  source_type: string;
  reliability: string;
  scope: string;
  verified_status: string;
}

/** Bộ phân tích CSV tối giản (hỗ trợ trường có dấu ngoặc kép và dấu phẩy bên trong). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") {
      row.push(cur);
      cur = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cur);
      cur = "";
      if (row.some((x) => x !== "")) rows.push(row);
      row = [];
    } else cur += c;
  }
  if (cur !== "" || row.length) {
    row.push(cur);
    if (row.some((x) => x !== "")) rows.push(row);
  }
  return rows;
}

export function loadSources(root = process.cwd()): SourceRow[] {
  const text = fs.readFileSync(path.join(root, "SOURCE_REGISTRY.csv"), "utf8");
  const [header, ...rest] = parseCsv(text);
  return rest.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])) as unknown as SourceRow);
}

export function getSource(id: string): SourceRow | undefined {
  return loadSources().find((s) => s.source_id === id);
}
