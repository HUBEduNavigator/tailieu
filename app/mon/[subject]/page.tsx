import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { SubjectIcon } from "@/components/SubjectIcon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { UnitCard } from "@/components/UnitCard";
import { countBy, getCatalog } from "@/lib/content";
import { SUBJECT_INFO, TRACK_INFO } from "@/lib/labels";
import { GRADES, SUBJECTS, TRACKS, type Subject } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({ subject }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }): Promise<Metadata> {
  const { subject } = await params;
  const info = SUBJECT_INFO[subject as Subject];
  return { title: info ? info.name : "Môn học", description: info?.description };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  if (!SUBJECTS.includes(subject as Subject)) notFound();
  const s = subject as Subject;
  const info = SUBJECT_INFO[s];
  const items = getCatalog().filter((i) => i.subject === s);

  const unavailable = GRADES.filter((g) => !countBy(s, g));

  return (
    <div className="container-x page-shell">
      <Breadcrumb items={[{ label: "Khám phá", href: "/" }, { label: info.name }]} />
      <header className="page-intro">
        <SubjectIcon subject={s} />
        <h1 className="mt-3">{info.name}</h1>
        <p>{info.tagline}.</p>
      </header>

      <div className="subject-layout">
        <aside className="library-browse" aria-label={`Tra cứu ${info.name}`}>
          <section>
            <h2>Theo lớp</h2>
            <div className="grade-grid">
              {GRADES.map((g) => countBy(s, g) > 0 ? (
                <Link key={g} href={`/hoc-lieu/?mon=${s}&lop=${g}`} prefetch={false} aria-label={`Lớp ${g}`}>{g}</Link>
              ) : (
                <span key={g} aria-label={`Lớp ${g} – Đang cập nhật`}>{g}</span>
              ))}
            </div>
            {unavailable.length > 0 && (
              <p className="browse-note">Đang cập nhật lớp {new Intl.ListFormat("vi").format(unavailable.map(String))}.</p>
            )}
          </section>
          <section>
            <h2>Nhóm học liệu</h2>
            <ul className="subject-tracks">
              {TRACKS.map((track) => {
                const count = countBy(s, undefined, track);
                return (
                  <li key={track}>
                    {count > 0 ? (
                      <Link href={`/hoc-lieu/?mon=${s}&nhom=${track}`} prefetch={false}>
                        {TRACK_INFO[track].name}<span className="browse-count">{count}</span>
                      </Link>
                    ) : (
                      <span>{TRACK_INFO[track].name} <small>Đang cập nhật</small></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>

        <section aria-labelledby="subject-documents">
          <div className="collection-heading">
            <div>
              <h2 id="subject-documents">Tài liệu đã đăng</h2>
              <p className="mt-1 text-sm text-muted">{items.length} dạng bài</p>
            </div>
            <Link href={`/hoc-lieu/?mon=${s}`} prefetch={false} className="btn btn-ghost">
              <SlidersHorizontal size={17} aria-hidden /> Lọc tài liệu
            </Link>
          </div>
          {items.length > 0 ? (
            <div className="document-grid">{items.map((item) => <UnitCard key={item.id} item={item} />)}</div>
          ) : (
            <p className="text-muted">Đang cập nhật theo lộ trình.</p>
          )}
        </section>
      </div>
    </div>
  );
}
