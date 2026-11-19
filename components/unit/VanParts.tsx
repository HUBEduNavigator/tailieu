import { Rich } from "@/components/Rich";
import type { EssayFrame, EvidenceCard } from "@/lib/schema";
import { SourceName } from "./common";

export function EssayFrameView({ frame }: { frame: EssayFrame }) {
  return (
    <div className="space-y-3">
      <p>
        <span className="chip">{frame.examType}</span>
        {frame.lengthGuide && <span className="chip ml-2">{frame.lengthGuide}</span>}
      </p>
      <ol className="space-y-3">
        {frame.parts.map((p, i) => (
          <li key={i} className="card flex gap-3 p-4">
            <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-white">{i + 1}</span>
            <div>
              <p className="font-semibold">{p.part}</p>
              <p><Rich>{p.content}</Rich></p>
              {p.guideline && <p className="text-sm text-muted">{p.guideline}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Thẻ Ngân hàng Dẫn chứng: 5 trường, nổi bật Giới hạn sử dụng. */
export function EvidenceCardView({ card }: { card: EvidenceCard }) {
  const o = card.origin;
  return (
    <article className="card space-y-3 p-5">
      <p className="eyebrow">Thẻ Dẫn chứng · <span className="font-mono normal-case tracking-normal">{card.id}</span></p>
      {card.quote && (
        <figure className="quote-box">
          <figcaption className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Trích dẫn nguyên văn</figcaption>
          <blockquote className="whitespace-pre-line font-display text-lg leading-relaxed">{card.quote.text}</blockquote>
          <p className="mt-2 text-sm text-muted">{card.quote.attribution}</p>
        </figure>
      )}
      <dl className="space-y-3">
        <div>
          <dt className="text-sm font-semibold text-muted">1. Xuất xứ</dt>
          <dd>
            {o.author ? `${o.author}, ` : ""}
            <em>{o.work}</em>
            {o.location ? ` – ${o.location}` : ""}
            <span className="block text-sm text-muted">Nguồn tham chiếu: <SourceName id={o.sourceId} /> <span className="font-mono">[{o.sourceId}]</span></span>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">2. Nội dung cốt lõi</dt>
          <dd><Rich>{card.coreContent}</Rich></dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">3. Ý nghĩa</dt>
          <dd><Rich>{card.meaning}</Rich></dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted">4. Chủ đề vận dụng</dt>
          <dd className="mt-1 flex flex-wrap gap-2">{card.applicableTopics.map((t) => <span key={t} className="chip">{t}</span>)}</dd>
        </div>
      </dl>
      <div className="callout callout-warn" role="note">
        <p className="font-semibold">5. Giới hạn sử dụng</p>
        <p><Rich>{card.usageLimits}</Rich></p>
      </div>
    </article>
  );
}
