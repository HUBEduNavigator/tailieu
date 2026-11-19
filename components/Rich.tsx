import { Fragment } from "react";
import { parseRich, renderMath } from "@/lib/rich";

/** Văn bản giàu nội dòng (hỗ trợ $...$, $$...$$, **...**). */
export function Rich({ children }: { children: string }) {
  const segs = parseRich(children);
  return (
    <>
      {segs.map((s, i) => {
        if (s.t === "math") {
          const html = renderMath(s.v, s.display);
          return s.display ? (
            <span key={i} className="math-block" dangerouslySetInnerHTML={{ __html: html }} />
          ) : (
            <span key={i} className="math-inline" dangerouslySetInnerHTML={{ __html: html }} />
          );
        }
        return s.bold ? <strong key={i}>{s.v}</strong> : <Fragment key={i}>{s.v}</Fragment>;
      })}
    </>
  );
}

/** Các đoạn văn bản giàu; "\n\n" tách đoạn, "\n" xuống dòng. */
export function RichParas({ children, className = "" }: { children: string; className?: string }) {
  return (
    <>
      {children.split("\n\n").map((p, i) => (
        <p key={i} className={className}>
          {p.split("\n").map((line, j) => (
            <Fragment key={j}>
              {j > 0 && <br />}
              <Rich>{line}</Rich>
            </Fragment>
          ))}
        </p>
      ))}
    </>
  );
}

/** Danh sách gạch đầu dòng giàu. */
export function RichList({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`prose-list ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((it, i) => (
        <li key={i}>
          <Rich>{it}</Rich>
        </li>
      ))}
    </Tag>
  );
}
