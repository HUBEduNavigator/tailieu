import katex from "katex";

/** Một đoạn của văn bản giàu sau khi phân tích. */
export type Seg =
  | { t: "text"; v: string; bold: boolean }
  | { t: "math"; v: string; display: boolean; bold: boolean };

/**
 * Phân tích văn bản giàu: `$...$`, `$$...$$`, `**...**`, và `\$` (ký tự $ thường).
 * Ném lỗi nếu có dấu công thức hoặc in đậm không đóng, để lỗi bị chặn ngay lúc build/validate.
 */
export function parseRich(input: string): Seg[] {
  const out: Seg[] = [];
  let buf = "";
  let bold = false;
  let i = 0;
  const flush = () => {
    if (buf) out.push({ t: "text", v: buf, bold });
    buf = "";
  };
  while (i < input.length) {
    if (input.startsWith("\\$", i)) {
      buf += "$";
      i += 2;
    } else if (input.startsWith("$$", i)) {
      const end = input.indexOf("$$", i + 2);
      if (end < 0) throw new Error(`Công thức khối "$$" không đóng: ${input.slice(i, i + 40)}`);
      flush();
      out.push({ t: "math", v: input.slice(i + 2, end).trim(), display: true, bold });
      i = end + 2;
    } else if (input[i] === "$") {
      let end = i + 1;
      while (end < input.length && !(input[end] === "$" && input[end - 1] !== "\\")) end++;
      if (end >= input.length) throw new Error(`Công thức "$" không đóng: ${input.slice(i, i + 40)}`);
      flush();
      out.push({ t: "math", v: input.slice(i + 1, end).trim(), display: false, bold });
      i = end + 1;
    } else if (input.startsWith("**", i)) {
      flush();
      bold = !bold;
      i += 2;
    } else {
      buf += input[i];
      i++;
    }
  }
  if (bold) throw new Error(`Dấu in đậm "**" không đóng: ${input.slice(0, 40)}`);
  flush();
  return out;
}

const cache = new Map<string, string>();

/** Dựng HTML KaTeX. throwOnError: true để không bao giờ lộ LaTeX thô ra giao diện. */
export function renderMath(tex: string, display: boolean): string {
  const key = `${display ? "D" : "I"}:${tex}`;
  let html = cache.get(key);
  if (html === undefined) {
    html = katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: false, trust: false });
    cache.set(key, html);
  }
  return html;
}

/** Kiểm tra một chuỗi giàu: phân tích và dựng thử mọi công thức. Trả về số công thức. */
export function checkRich(input: string): number {
  let n = 0;
  for (const s of parseRich(input)) {
    if (s.t === "math") {
      renderMath(s.v, s.display);
      n++;
    }
  }
  return n;
}

/** Bỏ ký hiệu giàu để lấy văn bản thuần (dùng cho tóm tắt/tìm kiếm). */
export function stripRich(input: string): string {
  return parseRich(input)
    .map((s) => s.v)
    .join("");
}
