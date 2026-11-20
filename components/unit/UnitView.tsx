import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ListTree } from "lucide-react";
import { SubjectIcon } from "@/components/SubjectIcon";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Rich, RichList } from "@/components/Rich";
import { DIFFICULTY_INFO, SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import type { ContentStatus, LearningUnit } from "@/lib/schema";
import { getSource } from "@/lib/sources";
import { slugify } from "@/lib/text";
import { BilingualView, ExerciseView, GrammarTableView, IpaView, VocabTableView } from "./AnhParts";
import { IdLinks, Section, SourceName, WorkedExampleView } from "./common";
import { EssayFrameView, EvidenceCardView } from "./VanParts";

const STATUS_LABELS: Record<ContentStatus, string> = {
  draft: "Bản nháp",
  "seed-verified": "Đã tự kiểm (seed-verified)",
  verified: "Đã thẩm định",
};

interface Sec {
  id: string;
  title: string;
  node: ReactNode;
}

export function UnitView({ unit }: { unit: LearningUnit }) {
  const t = unit.taxonomy;
  const subj = SUBJECT_INFO[t.subject];
  const m = unit.methodology;

  const secs: Sec[] = [
    { id: "muc-tieu", title: "Mục tiêu cần đạt", node: <RichList items={unit.objectives} /> },
    {
      id: "tien-quyet",
      title: "Kiến thức và kỹ năng tiên quyết",
      node: (
        <>
          <RichList items={unit.prerequisites} />
          {unit.relatedIds.prerequisiteIds.length > 0 && (
            <div>
              <p className="font-semibold">Dạng bài tiên quyết trong kho học liệu</p>
              <IdLinks ids={unit.relatedIds.prerequisiteIds} empty="" />
            </div>
          )}
        </>
      ),
    },
    { id: "dau-hieu", title: "Dấu hiệu nhận biết dạng bài", node: <RichList items={unit.recognitionSigns} /> },
    { id: "mo-hinh", title: "Mô hình câu hỏi thường gặp", node: <RichList items={unit.questionPatterns} /> },
    { id: "trong-tam", title: "Kiến thức trọng tâm được kiểm tra", node: <RichList items={unit.testedKnowledge} /> },
    {
      id: "phuong-phap",
      title: "Phương pháp và các bước tư duy",
      node: (
        <>
          {m.summary && <p><Rich>{m.summary}</Rich></p>}
          <div className="callout">
            <p className="font-semibold">Điều kiện áp dụng</p>
            <RichList items={m.applicability} />
          </div>
          <ol className="space-y-3">
            {m.steps.map((s, i) => (
              <li key={i} className="card flex gap-3 p-4">
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-semibold text-white">{i + 1}</span>
                <div className="space-y-1">
                  <p className="font-semibold"><Rich>{s.title}</Rich></p>
                  <p><Rich>{s.detail}</Rich></p>
                  {s.why && <p className="text-muted"><span className="font-semibold text-ink">Vì sao: </span><Rich>{s.why}</Rich></p>}
                  {s.condition && <p className="text-muted"><span className="font-semibold text-ink">Điều kiện: </span><Rich>{s.condition}</Rich></p>}
                </div>
              </li>
            ))}
          </ol>
        </>
      ),
    },
  ];

  // Phần đặc thù từng môn (kiến thức)
  const ext = unit.ext;
  if (ext.kind === "van") {
    secs.push({ id: "khung-bai-viet", title: "Khung cấu trúc bài viết", node: <EssayFrameView frame={ext.essayFrame} /> });
  }
  if (ext.kind === "anh") {
    if (ext.ipa) secs.push({ id: "ipa", title: ext.ipa.title + " – bảng phiên âm IPA", node: <IpaView ipa={ext.ipa} /> });
    if (ext.grammarTables.length) {
      secs.push({ id: "ngu-phap", title: "Cấu trúc ngữ pháp và ngoại lệ", node: <div className="space-y-6">{ext.grammarTables.map((g) => <GrammarTableView key={g.title} t={g} />)}</div> });
    }
    if (ext.vocabTables.length) {
      secs.push({ id: "tu-vung", title: "Từ vựng, collocation, cụm động từ", node: <div className="space-y-6">{ext.vocabTables.map((v) => <VocabTableView key={v.title} t={v} />)}</div> });
    }
    if (ext.bilingualExamples.length) {
      secs.push({ id: "anh-viet", title: "Ví dụ đối chiếu Anh–Việt", node: <BilingualView items={ext.bilingualExamples} /> });
    }
  }

  secs.push({
    id: "vi-du",
    title: "Ví dụ minh họa",
    node: (
      <div className="space-y-5">
        {unit.workedExamples.map((ex, i) => <WorkedExampleView key={i} ex={ex} index={i} />)}
      </div>
    ),
  });

  if (ext.kind === "van" && ext.evidenceCards.length) {
    secs.push({
      id: "dan-chung",
      title: "Ngân hàng Dẫn chứng",
      node: (
        <>
          <p className="text-muted">Mỗi thẻ gồm xuất xứ, nội dung cốt lõi, ý nghĩa, chủ đề vận dụng và giới hạn sử dụng. Hãy đọc kỹ mục giới hạn trước khi dùng.</p>
          <div className="space-y-5">{ext.evidenceCards.map((c) => <EvidenceCardView key={c.id} card={c} />)}</div>
        </>
      ),
    });
  }
  if (ext.kind === "anh" && ext.exercises.length) {
    secs.push({ id: "bai-tap", title: "Bài tập theo dạng", node: <div className="space-y-5">{ext.exercises.map((e) => <ExerciseView key={e.id} ex={e} />)}</div> });
  }

  secs.push(
    {
      id: "bien-the",
      title: "Các biến thể thường gặp",
      node: (
        <ul className="space-y-3">
          {unit.variants.map((v, i) => (
            <li key={i} className="card p-4">
              <p className="font-semibold"><Rich>{v.title}</Rich></p>
              <p><Rich>{v.description}</Rich></p>
              {v.hint && <p className="text-muted"><span className="font-semibold text-ink">Gợi ý: </span><Rich>{v.hint}</Rich></p>}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "loi-sai",
      title: "Lỗi sai và bẫy dễ nhầm",
      node: (
        <ul className="space-y-3">
          {unit.commonMistakes.map((x, i) => (
            <li key={i} className="callout callout-warn">
              <p className="font-semibold"><Rich>{x.mistake}</Rich></p>
              <p><span className="font-semibold">Vì sao sai: </span><Rich>{x.why}</Rich></p>
              {x.fix && <p><span className="font-semibold">Cách tránh: </span><Rich>{x.fix}</Rich></p>}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "lien-quan",
      title: "Dạng bài liên quan",
      node: <IdLinks ids={unit.relatedIds.relatedProblemIds} empty="Chưa có dạng bài liên quan trong kho học liệu. Các liên kết sẽ được thêm khi có học liệu tương ứng." />,
    },
    {
      id: "nguon",
      title: "Nguồn căn cứ và mức độ kiểm chứng",
      node: (
        <>
          <div className="callout">
            <p className="font-semibold">Trạng thái: {STATUS_LABELS[unit.status]}</p>
            <p className="mt-1"><span className="font-semibold">Cách kiểm chứng: </span><Rich>{unit.verification.method}</Rich></p>
            {unit.verification.openItems.length > 0 && (
              <>
                <p className="mt-2 font-semibold">Còn cần người đối chiếu:</p>
                <ul className="prose-list list-disc">{unit.verification.openItems.map((o, i) => <li key={i}>{o}</li>)}</ul>
              </>
            )}
          </div>
          <ul className="prose-list list-disc">
            {unit.sources.map((s, i) => {
              const src = getSource(s.sourceId);
              return (
                <li key={i}>
                  <span className="font-mono text-sm">{s.sourceId}</span> – <SourceName id={s.sourceId} />
                  {src?.year ? ` (${src.year})` : ""}
                  {s.locator ? `; ${s.locator}` : ""}
                  {s.note ? ` — ${s.note}` : ""}
                  {src?.url && (
                    <>
                      {" "}
                      <a href={src.url} className="underline" target="_blank" rel="noopener noreferrer">Liên kết</a>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      ),
    },
  );

  const toc = (
    <ol className="toc-links">
      {secs.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="toc-link">{s.title}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="container-x page-shell reader">
      <Breadcrumb
        items={[
          { label: "Khám phá", href: "/" },
          { label: subj.name, href: `/mon/${t.subject}/` },
          { label: `Lớp ${t.grade}`, href: `/hoc-lieu/?mon=${t.subject}&lop=${t.grade}` },
          { label: t.topic, href: `/hoc-lieu/?mon=${t.subject}&lop=${t.grade}&chude=${slugify(t.topic)}` },
          { label: unit.title },
        ]}
      />
      <header className="reader-header">
        <div className="reader-kicker">
          <SubjectIcon subject={t.subject} />
          <p>{subj.name} · Lớp {t.grade} <span className="block font-mono text-xs text-muted">{unit.id}</span></p>
        </div>
        <h1>{unit.title}</h1>
        <p className="reader-summary">{unit.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip">{TRACK_INFO[t.track].name}</span>
          <span className="chip">{DIFFICULTY_INFO[unit.difficulty].name}</span>
          <span className="chip">{t.topic}</span>
        </div>
        <p className="mt-3 text-sm text-muted">{t.curriculumPosition} · Cập nhật {unit.updatedAt}</p>
        <nav className="reader-jumps" aria-label="Đọc nhanh">
          <a href="#phuong-phap">Phương pháp <ArrowUpRight size={14} aria-hidden /></a>
          <a href="#vi-du">Ví dụ có lời giải <ArrowUpRight size={14} aria-hidden /></a>
          <a href="#loi-sai">Lỗi thường gặp <ArrowUpRight size={14} aria-hidden /></a>
        </nav>
      </header>

      <div className="reader-layout">
        <aside className="reader-toc" aria-label="Mục lục">
          <details className="card p-4 lg:hidden">
            <summary className="cursor-pointer font-semibold">Mục lục</summary>
            <div className="mt-2">{toc}</div>
          </details>
          <nav aria-label="Các phần trong tài liệu" className="card toc-panel hidden lg:block">
            <h2><ListTree size={19} aria-hidden /> Mục lục</h2>
            {toc}
          </nav>
        </aside>
        <article className={`reader-paper ${t.subject === "van" ? "reading" : ""}`}>
          {secs.map((s) => (
            <Section key={s.id} id={s.id} title={s.title}>
              {s.node}
            </Section>
          ))}
          <p className="pt-4">
            <Link prefetch={false} href={`/hoc-lieu/?mon=${t.subject}&lop=${t.grade}`} className="btn btn-ghost">← Các dạng bài khác của {subj.name} lớp {t.grade}</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
