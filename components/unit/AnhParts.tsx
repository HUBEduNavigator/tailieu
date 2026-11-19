import { Rich } from "@/components/Rich";
import type { BilingualExample, Exercise, GrammarTable, IpaSection, VocabTable } from "@/lib/schema";

export function IpaView({ ipa }: { ipa: IpaSection }) {
  const hasNotes = (rows: { note?: string }[]) => rows.some((r) => r.note);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        {ipa.sounds.map((s) => (
          <article key={s.ipa} className="card p-5">
            <p className="ipa text-4xl font-semibold" lang="en-fonipa">{s.ipa}</p>
            <p className="mt-1 font-semibold">{s.name}</p>
            <p className="mt-2 text-sm font-semibold text-muted">Vị trí phát âm</p>
            <p><Rich>{s.articulation}</Rich></p>
            <p className="mt-2 text-sm font-semibold text-muted">Lỗi thường gặp</p>
            <ul className="prose-list list-disc">{s.commonErrors.map((e, i) => <li key={i}><Rich>{e}</Rich></li>)}</ul>
            {s.accentNote && <p className="mt-2 text-sm text-muted"><span className="font-semibold">Anh–Anh / Anh–Mỹ: </span><Rich>{s.accentNote}</Rich></p>}
          </article>
        ))}
      </div>

      {ipa.wordGroups.map((g) => (
        <div key={g.label}>
          <h3 className="mb-2 text-lg">{g.label}</h3>
          <div className="table-scroll" tabIndex={0} role="region" aria-label={`Bảng ${g.label}, cuộn ngang để xem thêm`}>
            <table>
              <thead>
                <tr><th scope="col">Từ</th><th scope="col">IPA (Anh–Anh)</th><th scope="col">IPA (Anh–Mỹ)</th><th scope="col">Nghĩa</th>{hasNotes(g.rows) && <th scope="col">Ghi chú</th>}</tr>
              </thead>
              <tbody>
                {g.rows.map((r) => (
                  <tr key={r.word}>
                    <th scope="row" className="!bg-transparent font-semibold">{r.word}</th>
                    <td className="ipa" lang="en-fonipa">{r.ipaBr}</td>
                    <td className="ipa" lang="en-fonipa">{r.ipaAm ?? <span className="text-muted">giống Anh–Anh</span>}</td>
                    <td>{r.meaningVi}</td>
                    {hasNotes(g.rows) && <td>{r.note ? <Rich>{r.note}</Rich> : null}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {ipa.minimalPairs && ipa.minimalPairs.length > 0 && (
        <div>
          <h3 className="mb-2 text-lg">Cặp từ tối thiểu</h3>
          <div className="table-scroll" tabIndex={0} role="region" aria-label="Cặp từ tối thiểu, cuộn ngang để xem thêm">
            <table>
              <thead><tr><th scope="col">Từ 1</th><th scope="col">IPA</th><th scope="col">Từ 2</th><th scope="col">IPA</th></tr></thead>
              <tbody>
                {ipa.minimalPairs.map((p) => (
                  <tr key={p.a.word}>
                    <td><span className="font-semibold">{p.a.word}</span> <span className="text-muted">({p.a.meaningVi})</span></td>
                    <td className="ipa" lang="en-fonipa">{p.a.ipaBr}</td>
                    <td><span className="font-semibold">{p.b.word}</span> <span className="text-muted">({p.b.meaningVi})</span></td>
                    <td className="ipa" lang="en-fonipa">{p.b.ipaBr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {ipa.accentNotes && (
        <ul className="prose-list list-disc text-muted">{ipa.accentNotes.map((n, i) => <li key={i}><Rich>{n}</Rich></li>)}</ul>
      )}
    </div>
  );
}

export function GrammarTableView({ t }: { t: GrammarTable }) {
  return (
    <div>
      <h3 className="mb-2 text-lg">{t.title}</h3>
      <div className="table-scroll" tabIndex={0} role="region" aria-label={`${t.title}, cuộn ngang để xem thêm`}>
        <table>
          <thead><tr>{t.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {t.rows.map((r, i) => (
              <tr key={i}>{r.map((c, j) => <td key={j} className={/\/.+\//.test(c) ? "ipa" : ""}><Rich>{c}</Rich></td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.exceptions && (
        <div className="callout callout-warn mt-3" role="note">
          <p className="font-semibold">Ngoại lệ cần nhớ</p>
          <ul className="prose-list list-disc">{t.exceptions.map((e, i) => <li key={i}><Rich>{e}</Rich></li>)}</ul>
        </div>
      )}
    </div>
  );
}

const KIND_LABEL = { vocab: "Từ vựng", collocation: "Collocation", "phrasal-verb": "Cụm động từ" } as const;

export function VocabTableView({ t }: { t: VocabTable }) {
  return (
    <div>
      <h3 className="mb-2 text-lg">{t.title} <span className="chip ml-1 align-middle">{KIND_LABEL[t.kind]}</span></h3>
      <div className="table-scroll" tabIndex={0} role="region" aria-label={`${t.title}, cuộn ngang để xem thêm`}>
        <table>
          <thead><tr><th scope="col">Mục</th><th scope="col">Nghĩa</th><th scope="col">Ví dụ</th></tr></thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.term}>
                <td>
                  <span className="font-semibold">{r.term}</span>
                  {r.pos && <span className="text-muted"> ({r.pos})</span>}
                  {r.ipa && <span className="ipa block text-muted" lang="en-fonipa">{r.ipa}</span>}
                </td>
                <td>{r.meaningVi}</td>
                <td>
                  {r.example && <span lang="en" className="block">{r.example}</span>}
                  {r.exampleVi && <span className="block text-muted">{r.exampleVi}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function BilingualView({ items }: { items: BilingualExample[] }) {
  return (
    <ul className="space-y-3">
      {items.map((e, i) => (
        <li key={i} className="card p-4">
          <p lang="en" className="font-semibold">{e.en}</p>
          {e.ipa && <p className="ipa text-muted" lang="en-fonipa">{e.ipa}</p>}
          <p>{e.vi}</p>
          {e.note && <p className="mt-1 text-sm text-muted"><Rich>{e.note}</Rich></p>}
        </li>
      ))}
    </ul>
  );
}

export function ExerciseView({ ex }: { ex: Exercise }) {
  let n = 0;
  return (
    <article className="card space-y-4 p-5">
      <h3 className="text-xl">{ex.title}</h3>
      <p className="text-muted" lang="en">{ex.instruction}</p>
      {ex.passage && (
        <div className="callout">
          {ex.passage.title && <p lang="en" className="font-semibold">{ex.passage.title}</p>}
          <div lang="en" className="mt-1 space-y-2">
            {ex.passage.text.split("\n\n").map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}
          </div>
          {ex.passage.textVi && (
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold">Bản dịch tiếng Việt</summary>
              <div className="mt-2 space-y-2">{ex.passage.textVi.split("\n\n").map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}</div>
            </details>
          )}
          <p className="mt-2 text-xs text-muted">{ex.passage.sourceNote}</p>
        </div>
      )}
      <ol className="space-y-3">
        {ex.items.map((it) => {
          n++;
          return (
            <li key={n} className="rounded-xl border border-line p-3">
              <p lang="en"><span className="font-semibold">{n}. </span>{it.prompt}</p>
              {it.options && (
                <ul className="mt-1 grid gap-x-6 sm:grid-cols-2" lang="en">
                  {it.options.map((o) => <li key={o}>{o}</li>)}
                </ul>
              )}
              <details className="mt-2">
                <summary className="cursor-pointer text-sm font-semibold text-accenttext">Xem đáp án và giải thích</summary>
                <p className="mt-1"><span className="font-semibold">Đáp án: {it.answer}.</span> <Rich>{it.explanation}</Rich></p>
              </details>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
