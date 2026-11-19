import Link from "next/link";
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

  return (
    <div className="container-x py-8">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: info.name }]} />
      <h1 className="mt-4 text-3xl md:text-4xl">{info.name}</h1>
      <p className="mt-2 max-w-3xl text-lg text-muted">{info.description}</p>

      <h2 className="section-title mt-10">Theo lớp</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {GRADES.map((g) => {
          const n = countBy(s, g);
          const body = (
            <>
              <span className="block font-display text-xl">Lớp {g}</span>
              <span className="block text-sm text-muted">{n > 0 ? `${n} dạng bài` : "Đang cập nhật"}</span>
            </>
          );
          return n > 0 ? (
            <Link key={g} href={`/hoc-lieu/?mon=${s}&lop=${g}`} className="card px-4 py-3 text-center">{body}</Link>
          ) : (
            <div key={g} className="card px-4 py-3 text-center opacity-80" aria-label={`Lớp ${g}: đang cập nhật theo lộ trình`}>{body}</div>
          );
        })}
      </div>

      <h2 className="section-title mt-10">Theo nhóm học liệu</h2>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((t) => {
          const n = countBy(s, undefined, t);
          const body = (
            <>
              <span className="block font-display text-lg">{TRACK_INFO[t].name}</span>
              <span className="block text-sm text-muted">{TRACK_INFO[t].description}</span>
              <span className="mt-1 block text-sm font-semibold">{n > 0 ? `${n} dạng bài` : "Đang cập nhật theo lộ trình"}</span>
            </>
          );
          return n > 0 ? (
            <Link key={t} href={`/hoc-lieu/?mon=${s}&nhom=${t}`} className="card block p-4">{body}</Link>
          ) : (
            <div key={t} className="card p-4 opacity-80">{body}</div>
          );
        })}
      </div>

      <h2 className="section-title mt-10">Dạng bài đã đăng</h2>
      {items.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((it) => <UnitCard key={it.id} item={it} />)}
        </div>
      ) : (
        <p className="text-muted">Đang cập nhật theo lộ trình.</p>
      )}
    </div>
  );
}
