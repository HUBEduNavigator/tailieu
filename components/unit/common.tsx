import Link from "next/link";
import type { ReactNode } from "react";
import { Rich, RichList, RichParas } from "@/components/Rich";
import { getUnitById } from "@/lib/content";
import { FORMAT_INFO } from "@/lib/labels";
import type { QuotedPassage, WorkedExample } from "@/lib/schema";
import { getSource } from "@/lib/sources";
import { unitHref } from "@/lib/text";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="section-title">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function SourceName({ id }: { id: string }) {
  const s = getSource(id);
  if (!s) return <span>{id}</span>;
  return (
    <span>
      {s.title}
      {s.author_or_org ? ` – ${s.author_or_org}` : ""}
    </span>
  );
}

/** Khối [Trích dẫn nguyên văn + Nguồn], tách khỏi phần diễn giải. */
export function QuoteBox({ passage }: { passage: QuotedPassage }) {
  return (
    <figure className="quote-box">
      <figcaption className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Trích dẫn nguyên văn</figcaption>
      <blockquote className="whitespace-pre-line font-display text-lg leading-relaxed">{passage.text}</blockquote>
      <p className="mt-3 text-sm text-muted">
        <span className="font-semibold">Nguồn:</span> {passage.attribution} <span className="font-mono">[{passage.sourceId}]</span>
      </p>
    </figure>
  );
}

export function WorkedExampleView({ ex, index }: { ex: WorkedExample; index: number }) {
  return (
    <article className="card space-y-4 p-5" aria-labelledby={`vd-${index}`}>
      <div>
        <h3 id={`vd-${index}`} className="text-xl">{ex.title}</h3>
        {ex.format && <span className="chip mt-2">{FORMAT_INFO[ex.format]}</span>}
      </div>
      <div>
        <p className="text-sm font-semibold text-muted">Đề bài</p>
        <div className="mt-1"><RichParas>{ex.statement}</RichParas></div>
      </div>
      {ex.passage && <QuoteBox passage={ex.passage} />}
      {ex.choices && (
        <ul className="space-y-2">
          {ex.choices.map((c) => {
            const ok = c.label === ex.correctChoice;
            return (
              <li key={c.label} className={`rounded-xl border px-3 py-2 ${ok ? "border-ok" : "border-line"}`}>
                <span className="font-semibold">{c.label}. </span>
                <Rich>{c.text}</Rich>
                {ok && <span className="ml-2 chip !border-ok">Đáp án</span>}
                {c.note && <span className="mt-1 block text-sm text-muted"><Rich>{c.note}</Rich></span>}
              </li>
            );
          })}
        </ul>
      )}
      {ex.statements && (
        <ul className="space-y-2">
          {ex.statements.map((s) => (
            <li key={s.label} className="rounded-xl border border-line px-3 py-2">
              <span className="font-semibold">{s.label}) </span>
              <Rich>{s.text}</Rich>
              <span className={`ml-2 chip ${s.truth ? "!border-ok" : ""}`}>{s.truth ? "Đúng" : "Sai"}</span>
              <span className="mt-1 block text-sm text-muted"><Rich>{s.explanation}</Rich></span>
            </li>
          ))}
        </ul>
      )}
      <div>
        <p className="text-sm font-semibold text-muted">Phân tích hướng đi</p>
        <div className="mt-1"><RichParas>{ex.analysis}</RichParas></div>
      </div>
      <div>
        <p className="text-sm font-semibold text-muted">Lời giải</p>
        <ol className="mt-1 space-y-3">
          {ex.solution.map((s, i) => (
            <li key={i}><RichParas>{s}</RichParas></li>
          ))}
        </ol>
      </div>
      {ex.answer && (
        <p className="callout">
          <span className="font-semibold">Đáp án: </span>
          <Rich>{ex.answer}</Rich>
        </p>
      )}
      {ex.check && (
        <p className="text-muted">
          <span className="font-semibold text-ink">Kiểm tra lại: </span>
          <Rich>{ex.check}</Rich>
        </p>
      )}
    </article>
  );
}

export function IdLinks({ ids, empty }: { ids: string[]; empty: string }) {
  const units = ids.map((id) => getUnitById(id)).filter((u) => u !== undefined);
  if (units.length === 0) return <p className="text-muted">{empty}</p>;
  return (
    <ul className="prose-list list-disc">
      {units.map((u) => (
        <li key={u.id}>
          <Link href={unitHref(u.id)} className="underline">
            {u.title}
          </Link>{" "}
          <span className="font-mono text-sm text-muted">{u.id}</span>
        </li>
      ))}
    </ul>
  );
}

export { RichList };
